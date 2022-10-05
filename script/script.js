import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const firebaseConfig = {
    apiKey: 'AIzaSyBwyKn1Rd1QxPfdq4nZlvkgLgvQuwXvGec',
    authDomain: 'obsagencyv01-4b87d.firebaseapp.com',
    databaseURL: 'https://obsagency2-default-rtdb.firebaseio.com/',
    projectId: 'obsagencyv01-4b87d',
    storageBucket: 'obsagencyv01-4b87d.appspot.com',
    messagingSenderId: '224046757045',
    appId: '1:224046757045:web:acc6c6190885c82c34fafc'
};

// Firebase Database connection
const app = initializeApp(firebaseConfig);
const db = getDatabase();  
const reference = ref(db, 'users/');

// Firebase Database connection

const date = new Date();
const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
const form = document.getElementById('form');

function writeUserData(e) {
    e.preventDefault();
    
  
    push(reference, {
        date: currentDate,
        username: document.getElementById('name').value,
        email: document.getElementById('email').value,
        text: document.getElementById('text').value,
    });
  
    form.reset();
}

form.addEventListener('submit', writeUserData);


const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
});