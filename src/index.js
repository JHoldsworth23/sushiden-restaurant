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

document.body.appendChild(navComponent());
document.body.appendChild(bodyComponent());