import './styles.css';
import displayCards from './modules/displayCards';
import logo from './images/cat-logo.png';
import './popup.css';
import counters from './modules/counters';

const logoContainer = document.querySelector('.logo');
logoContainer.src = logo;

displayCards();
counters();
