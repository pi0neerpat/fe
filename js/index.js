// TODO: Step 2: Setup Developer API Key
let fm = new Fortmatic("pk_test_2886ED2326F7B9CE");
web3 = new Web3(fm.getProvider());
// End Step 2

var contract_address = "0x3538716fd0f6bf656cbf12506ba4cc73979d3503";
var contract = new web3.eth.Contract(
  [
    {
      constant: false,
      inputs: [
        {
          name: "_repoId",
          type: "bytes32"
        },
        {
          name: "_pullRequestId",
          type: "uint256"
        }
      ],
      name: "approvePullRequest",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    }
  ],
  contract_address
);

let handleSendTransaction = function(repoId, pullRequestId) {
  contract.methods.approvePullRequest(repoId, pullRequestId).send({
    from: "0x0000000000000000000000000000000000000000"
  });
};

// Initialize elements and events (no need to change)
const defaultAmount = 0.01;
const defaultAddress = "0x22b05d73097c0a2440d29af61db4b4ed3803e55e";
const inputAmount = document.getElementById("input-amount");
inputAmount.setAttribute("placeholder", defaultAmount);
inputAmount.setAttribute("value", defaultAmount);
const inputAddress = document.getElementById("input-address");
inputAddress.setAttribute("placeholder", defaultAddress);
inputAddress.innerText = defaultAddress;
document.getElementById("btn-send").onclick = function() {
  let amount = inputAmount.value ? inputAmount.value : defaultAmount;
  let address = inputAddress.value ? inputAddress.value : defaultAddress;
  handleSendTransaction(amount, address);
};
