const aboutComponent = () => {
    const background = document.createElement('div');
    background.classList.add('about-background');
    
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome-text');
    welcomeDiv.innerHTML = `
        <h1>Welcome to Sushiden</h1>
        <p>When you step inside a Sushiden restaurant, you will feel like you have teleported into a Tokyo-style restaurant, with all its harmonicity and liveliness.</p>
        <p>With over 70 of the most authentic Japanese and Hawaiian fish and vegetarian dishes on the menu, you experience our love and passion for cooking and service. </p>
    `;

    background.appendChild(welcomeDiv);

    return background;
}

const loadAboutPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(aboutComponent());
    return main;
}

export default loadAboutPage;