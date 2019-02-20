// TODO: Step 2: Setup Developer API Key
let fm = new Fortmatic("pk_test_2886ED2326F7B9CE");
web3 = new Web3(fm.getProvider());
// End Step 2

const toAddress = "0xF539E077F48A2bee21F5E2052Bc094a025aceFf0";
const defaultAmount = 32;

let handleSendTransaction = function(value) {
  const sendValue = web3.toWei(value, "ether"); // Convert 1 ether to wei
  // Get user account wallet address first
  web3.eth.getAccounts().then(accounts => {
    // Send Ether transaction with web3
    web3.eth
      .sendTransaction({
        from: accounts[0],
        to: toAddress,
        value: sendValue
      })
      .once("transactionHash", hash => {
        console.log(hash);
      })
      .once("receipt", receipt => {
        console.log(receipt);
      });
  });
};

// Initialize elements and events (no need to change)
const inputAmount = document.getElementById("input-amount");
inputAmount.setAttribute("placeholder", defaultAmount);
inputAmount.setAttribute("value", defaultAmount);
document.getElementById("btn-send").onclick = function() {
  let amount = inputAmount.value ? inputAmount.value : defaultAmount;
  handleSendTransaction(amount);
};
