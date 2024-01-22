import './style.css';

function navComponent() {
    const content = document.querySelector('#content');
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('links');

    const aboutUsLink = document.createElement('a');
    const contactLink = document.createElement('a');
    const menuLink = document.createElement('a');

    aboutUsLink.classList.add('nav-link');
    contactLink.classList.add('nav-link');
    menuLink.classList.add('nav-link');

    aboutUsLink.textContent = 'About Us';
    aboutUsLink.href = '#';
    contactLink.textContent = 'Hours & Locations';
    contactLink.href = '#';
    menuLink.textContent = 'Menu';
    menuLink.href = '#';

    linkDiv.appendChild(aboutUsLink);
    linkDiv.appendChild(contactLink);
    linkDiv.appendChild(menuLink);

    content.appendChild(linkDiv);

    return content;
}

function bodyComponent() {
    const content = document.querySelector('#content');
    const background = document.createElement('div');
    background.classList.add('background');

    // const logoImg = document.createElement('img');
    // logoImg.classList.add('logo');
    // logoImg.src = './src/image/salmon-sushi-logo.png';

    const titleCard = document.createElement('div');
    titleCard.classList.add('title-card');

    titleCard.innerHTML = `
        <hr>
        <h2 class="cuisine-title">JAPANESE<h2>
        <h1 class="main-title">SUSHI <span class="and-symbol">&</span> POKE</h1>
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