function navComponent() {
    const content = document.querySelector('#content');
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('links');

    const aboutUsLink = document.createElement('a');
    const contactLink = document.createElement('a');
    const menuLink = document.createElement('a');

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

    const titleCard = document.createElement('div');
    titleCard.classList.add('title-card');

    const line = document.createElement('hr');
    const title = document.createElement('h1');

    title.textContent = 'Sushi & Poke';

    titleCard.appendChild(line);
    titleCard.appendChild(title);
    titleCard.appendChild(line.cloneNode());
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