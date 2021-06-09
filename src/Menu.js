
const pages = document.querySelector('#pages');

const Menu=()=>{

    const menu=document.createElement("div")
    menu.innerHTML=`
        <h1>menu</h1>
    
    `
        menu.classList.add("menuContainer")

    pages.appendChild(menu)

}



export{
    Menu
}