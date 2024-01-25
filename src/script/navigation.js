const homeNavComponent = () => {
    const content = document.querySelector('#content');
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('links');

    const homeLink = document.createElement('a');
    const aboutUsLink = document.createElement('a');
    const contactLink = document.createElement('a');
    const menuLink = document.createElement('a');

    homeLink.classList.add('home-link');
    aboutUsLink.classList.add('nav-link');
    contactLink.classList.add('nav-link');
    menuLink.classList.add('nav-link');

    homeLink.innerHTML = '<div>';
    homeLink.href = '#';
    aboutUsLink.textContent = 'About Us';
    aboutUsLink.href = '#';
    contactLink.textContent = 'Hours & Locations';
    contactLink.href = '#';
    menuLink.textContent = 'Menu';
    menuLink.href = '#';

    linkDiv.appendChild(homeLink);
    linkDiv.appendChild(aboutUsLink);
    linkDiv.appendChild(contactLink);
    linkDiv.appendChild(menuLink);

    content.appendChild(linkDiv);

    return content;
}

const navComponent = () => {
    const content = homeNavComponent();
    const homeElement = document.querySelector('.home-link');
    homeElement.remove();
    return content;
}

export { homeNavComponent, navComponent };