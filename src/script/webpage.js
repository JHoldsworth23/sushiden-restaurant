import loadHomePage from "./home";
import loadAboutPage from "./about";
import loadLocationPage from "./location";
import loadMenuPage from "./menu";
import footerComponent from "./footer";
import '../style.css';

const homeNavComponent = () => {
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('links');

    const homeLink = document.createElement('a');
    homeLink.classList.add('nav-link');
    homeLink.id = 'home-link';
    homeLink.innerHTML = '<div></div>';
    homeLink.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveLink(homeLink);
        loadHomePage();
    });

    const aboutUsLink = document.createElement('a');
    aboutUsLink.classList.add('nav-link');
    aboutUsLink.textContent = 'About Us';
    aboutUsLink.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveLink(aboutUsLink);
        loadAboutPage();
    });

    const contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    contactLink.textContent = 'Hours & Locations';
    contactLink.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveLink(contactLink);
        loadLocationPage();
    });

    const menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveLink(menuLink);
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

const setActiveLink = (current) => {
    const anchors = Array.from(document.querySelectorAll('a')).slice(0, -1);

    anchors.forEach(link => {
        if (link !== this) {
            link.classList.remove('active');
        }
    });

    current.classList.add('active');
}

function initialiseWebpage() {
    const content = document.getElementById('content');

    content.appendChild(homeNavComponent());
    content.appendChild(createMain());
    content.appendChild(footerComponent());

    setActiveLink(document.querySelector('a'));
    loadHomePage();
}

export default initialiseWebpage;