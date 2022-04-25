// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let balData=JSON.parse(localStorage.getItem("amount"))||0;
    wallet.innerText=balData;
let id;
async function displayMovies(){
    
   try{
    let q = document.getElementById("search").value;
    const url = `https://www.omdbapi.com/?apikey=2390808a&s=${q}`
   const res = await fetch(url)

   const data = await res.json();

   const movieArr = data.Search
   console.log(movieArr);

   return movieArr;
  //append(movieArr)

   } catch(err){
       console.log("err",err)
   }
}
const append = (data) =>{
    movies.innerHTML=null;
    data.map(function(e){
        
        let movie_div = document.createElement("div")
        
        let image = document.createElement("img")
        image.src = e.Poster

        let name = document.createElement("p")
        name.innerText=e.Title;

        let btn = document.createElement("button")
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            bookedMovies(e)
        })

        movie_div.append(image,name,btn)
        movies.append(movie_div)

    })
 

}

function debouncing(func,delay)
{
    if(id){
        clearInterval(id)
    }
    id = setTimeout(function(){
        func()
    },delay)
}
 
function bookedMovies(e){
    console.log(e)
    window.location.href="checkout.html"
    localStorage.setItem("movie",JSON.stringify(e))
}

async function main()
{
    let data = await displayMovies();
    if(data===undefined)
    {
        return false;
    }
    append(data)
}