const aboutComponent = () => {

}

const loadAboutPage = () => {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(aboutComponent());
    return main;
}