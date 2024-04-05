const API_KEY = "dd274545847541c8a445703080e84cb2"
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener("load" , () => fetchNews("India"))


async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json()
    // console.log(data)
    bindData(data.articles);
}

function bindData(){
    const cardContainer = document.querySelector(".card-container")
    const newsCard = document.querySelector(".card")
    console.log(newsCard)
}