import navComponent from './navigation';
import footerComponent from './footer';
import './style.css';

function bodyComponent() {
    const content = document.querySelector('#content');
    const background = document.createElement('div');
    background.classList.add('background');

    const titleCard = document.createElement('div');
    titleCard.classList.add('title-card');

    titleCard.innerHTML = `
        <div class='logo'></div>
        <hr>
        <h2 class="cuisine-title">JAPANESE</h2>
        <h1 class="main-title">SUSHI <span class="and-symbol">& POKE</span></h1>
        <hr>
    `;

    background.appendChild(titleCard);
    content.appendChild(background);

    return content;    
}

document.body.appendChild(navComponent());
document.body.appendChild(bodyComponent());
document.body.appendChild(footerComponent());