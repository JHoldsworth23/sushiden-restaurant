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

    const storyDiv = document.createElement('div');
    storyDiv.classList.add('story-text');
    storyDiv.innerHTML = `
        <h1>Our Story</h1>
        <div class="story-image">
            <div class="restaurant"></div>
            <div class="sushi-chef"></div>
        </div>
        <h3>2021</h3>
        <p>We opened our first Sushiden restaurant in Shibuya City, Tokyo. We are a family business to forge our passions for crafting authentic sushi dishes and making customers fall in love with exquisite food.</p>
        <h3>2023 - Los Angeles</h3>
        <p>Coming from Tokyo, we knew we wanted to bring the unique and delicate tastes of Japan to the USA. After a successful opening, we dedicated ourselves to expanding restaurants overseas and putting our heart and soul into what we love and serve.</p>
        <h3>2024 - London</h3>
        <p>Sushiden restaurant opened the third restaurant on Kensington Street. </p>
    `;

    background.appendChild(welcomeDiv);
    background.appendChild(storyDiv);

    return background;
}

const loadAboutPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(aboutComponent());
    return main;
}

export default loadAboutPage;