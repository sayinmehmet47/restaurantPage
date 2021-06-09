const pages = document.querySelector('#pages');

const Contact = () => {
  const contact = document.createElement('div');
  contact.innerHTML = `
        <h1>contact</h1>
    
    
    `;
    contact.classList.add('contactContainer');

  pages.appendChild(contact);

};

export { Contact };
