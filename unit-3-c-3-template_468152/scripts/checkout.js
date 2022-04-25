// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let balData=JSON.parse(localStorage.getItem("amount"))||0;
    wallet.innerText=balData;
let movieData = JSON.parse(localStorage.getItem("movie"))
let moviename = document.createElement("h2")
moviename.innerText= movieData.Title;

let poster = document.createElement("img")
poster.src=movieData.Poster;

movie.append(moviename,poster)

function total(){
    let cost = document.getElementById("number_of_seats").value;
    if(cost*100>balData)
    {
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking successful!")
        balData=balData-cost*100;
        localStorage.setItem("amount",JSON.stringify(balData))
        wallet.innerText=balData;
    }
}