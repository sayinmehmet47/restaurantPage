const pages = document.querySelector('#pages');
const Home=()=>{

const home=document.createElement("div")
home.innerHTML=`
<h1>Taste Our Delicios Food</h1>


`
home.classList.add("homeContainer")

pages.appendChild(home)

}

export{
    Home
}