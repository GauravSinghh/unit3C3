// Store the wallet amount to your local storage with key "amount"
let balData=JSON.parse(localStorage.getItem("amount"))||0;
    wallet.innerText=balData;
function addBal(){
    let bal = document.querySelector("#amount").value;
    let sum = Number(bal)+Number(balData)
    localStorage.setItem("amount",JSON.stringify(sum))

    let wallet = document.querySelector("#wallet")

     balData=JSON.parse(localStorage.getItem("amount"))
    wallet.innerText=balData;
}