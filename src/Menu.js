const pages = document.querySelector('#pages');

const Menu=()=>{

    const menu=document.createElement("div")
    
    menu.innerHTML=`
    <div class="card">
    <img src="https://i4.hurimg.com/i/hurriyet/75/750x422/5d4015917152d80f80b3f75a.jpg" alt="Denim Jeans" style="width:100%">
    <h1>Tailored Jeans</h1>
    <p class="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button>Add to Cart</button></p>
  </div>    
  <div class="card">
  <img src="https://iqhaber.com/upload/media/entries/2018-04/22/144-2-e9708934e22534bfe5e2f712be67e001.jpg" alt="Denim Jeans" style="width:100%">
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
<div class="card">
<img src="https://iqhaber.com/upload/media/entries/2018-04/22/144-1-e9708934e22534bfe5e2f712be67e001.jpg" alt="Denim Jeans" style="width:100%">
<h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
    `
        menu.classList.add("menuContainer")

    pages.appendChild(menu)
}



export{
    Menu
}