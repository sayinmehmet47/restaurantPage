import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { Contact } from './Contact';
import { Home } from './Home';
import { Menu } from './Menu';
import { Navbar } from './Navbar';

Navbar();
Home();

const pages = document.querySelector('#pages');
const home = document.querySelector('.home');

home.addEventListener('click', () => {
  pages.innerHTML = '';
  Home();
});

const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  pages.innerHTML = '';
  Menu();
});
const contact = document.querySelector('.contact');

contact.addEventListener('click', () => {
  pages.innerHTML = '';
  Contact();
});
