import navComponent from './navigation';
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

function footerComponent() {
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.classList.add('footer-section');

    const date = new Date();
    footer.innerHTML = `
        <p>Copyright ©️ ${date.getFullYear()} JHoldsworth23</p>
        <a href="https://github.com/JHoldsworth23" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
    `;

    content.appendChild(footer);

    return content;
}

document.body.appendChild(navComponent());
document.body.appendChild(bodyComponent());
document.body.appendChild(footerComponent());