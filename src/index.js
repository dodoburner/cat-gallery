import './styles.css';
import displayCards from '../modules/displayCards';
import logo from './images/cat-logo.png';

const logoContainer = document.querySelector('.logo');

logoContainer.src = logo;

displayCards();
