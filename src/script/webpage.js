import loadHomePage from "./home";
import loadLocationPage from "./location";
import loadMenuPage from "./menu";
import footerComponent from "./footer";
import '../style.css';

const homeNavComponent = () => {
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('links');

    const homeLink = document.createElement('a');
    homeLink.classList.add('home-link');
    homeLink.innerHTML = '<div></div>';
    homeLink.addEventListener('click', () => {
        loadHomePage();
    });

    const aboutUsLink = document.createElement('a');
    aboutUsLink.classList.add('nav-link');
    aboutUsLink.textContent = 'About Us';

    const contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    contactLink.textContent = 'Hours & Locations';
    contactLink.addEventListener('click', () => {
        loadLocationPage();
    });

    const menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', () => {
        loadMenuPage();
    });

    linkDiv.appendChild(homeLink);
    linkDiv.appendChild(aboutUsLink);
    linkDiv.appendChild(contactLink);
    linkDiv.appendChild(menuLink);

    return linkDiv;
}

const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    return main;
}

function initialiseWebpage() {
    const content = document.getElementById('content');

    content.appendChild(homeNavComponent());
    content.appendChild(createMain());
    content.appendChild(footerComponent());

    loadHomePage();
}

export default initialiseWebpage;