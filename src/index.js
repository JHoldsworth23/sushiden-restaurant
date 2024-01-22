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

document.body.appendChild(navComponent());