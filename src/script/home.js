const homeComponent = () => {
    const background = document.createElement('div');
    background.classList.add('home-background');

    const titleCard = document.createElement('div');
    titleCard.classList.add('title-card');

    titleCard.innerHTML = `
        <div class='logo'></div>
        <hr>
        <h1 class="cuisine-title">JAPANESE</h1>
        <h1 class="main-title">SUSHI <span class="and-symbol">& POKE</span></h1>
        <hr>
    `;

    background.appendChild(titleCard);

    return background;    
}

const loadHomePage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(homeComponent());
    return main;
}

export default loadHomePage;