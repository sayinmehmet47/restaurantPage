const pages = document.querySelector('#pages');

const Contact = () => {
  const contact = document.createElement('div');
  contact.innerHTML = `

        <div class="icon">
        <span class="fa-stack fa-2x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-map-marker fa-stack-1x fa-inverse"></i>
        </span>
        <span>Cheironos 10 Athens/Greece</span>
        </div>
        <div class="icon">
        <span class="fa-stack fa-2x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-envelope fa-stack-1x fa-inverse"></i>

    </span>
    <span>sayinmehmet47@gmail.com</span>

        </div>
 
    <div class="icon">
    <span class="fa-stack fa-2x">
    <i class="fas fa-circle fa-stack-2x"></i>
    <i class="fas fa-phone fa-stack-1x fa-inverse"></i>
    </span>
    <span>+306984870208</span>

    </div>

 
    
    `;
    contact.classList.add('contactContainer');

  pages.appendChild(contact);

};

export { Contact };
