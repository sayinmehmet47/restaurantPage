const Navbar=()=>{
    const content=document.querySelector("#content")
    const nav=document.createElement("nav");
    nav.innerHTML=`
    
    <ul class="nav">
    <li class="home">Home</li>
    <li class="menu">Menu</li>
    <li class="contact">Contact</li>
  
</ul>

    
    
    
    `


content.appendChild(nav)
nav.classList.add("navbar")


}



export{
    Navbar
}