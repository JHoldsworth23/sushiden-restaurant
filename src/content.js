const bodyComponent = () => {
    const content = document.querySelector('#content');
    const background = document.createElement('div');
    background.classList.add('home-background');

    const titleCard = document.createElement('div');
    titleCard.classList.add('title-card');

    titleCard.innerHTML = `
        <div class='logo'></div>
        <hr>
        <h2 class="cuisine-title">JAPANESE</h2>
        <h1 class="main-title">SUSHI <span class="and-symbol">& POKE</span></h1>
        <hr>
    `;

    background.appendChild(titleCard);
    content.appendChild(background);

    return content;    
}

const restaurant = (location, address, country, contact, container) => {
    const information = document.createElement('div');
    information.classList.add('grid-item');
    const [streetName, zipCode, ...name] = address.split(',');
    const [phoneNo, email] = contact.split(',')

    information.innerHTML = `
        <h2>${location}</h2>
        <p>${streetName}</p>
        <p>${zipCode}</p>
        <p>${name}</p>
        <p>${country}</p>
        <h3>${phoneNo}</h3>
        <h3>${email}</h3>
    `;

    container.appendChild(information);
}

const locationComponent = () => {
    const content = document.querySelector('#content');
    const locationBackground = document.createElement('div');
    locationBackground.classList.add('location-background');

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    const restaurants = [
        {location: 'London', address: 'Kensington High St, W8 7RG', country: 'United Kingdom', contact: '+44 63421 016174, sushidenuk@email.com'},
        {location: 'Tokyo', address: 'Shibuya City, Maruyamacho, Building 2nd Floor', country: 'Japan', contact: '+81 82-5238-4234, sushidenjp@email.com'},
        {location: 'Los Angeles', address: 'Sunset Blvd, CA 90026, California', country: 'United States', contact: '+1 (213) 555-7372, sushidenus@email.com'},
    ];

    restaurants.forEach((obj) => restaurant(obj.location, obj.address, obj.country, obj.contact, gridContainer));

    const title = document.createElement('h2');
    title.textContent = 'Contact us to make a reservation';

    locationBackground.appendChild(gridContainer);
    locationBackground.appendChild(title);
    content.appendChild(locationBackground);

    return content;
}

export default locationComponent;