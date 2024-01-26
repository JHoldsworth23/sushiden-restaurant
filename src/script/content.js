const bodyComponent = () => {
    const content = document.querySelector('#content');
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
    content.appendChild(background);

    return content;    
}

const restaurant = (location, address, country, times, contact, container) => {
    const information = document.createElement('div');
    information.classList.add('location-grid-item');
    const [streetName, zipCode, ...name] = address.split(',');
    const [phoneNo, email] = contact.split(',');
    const openingHours = times.split(',').map(text => text.includes('day') ? `<h4>${text}</h4>` : `<p>${text}</p>`);

    information.innerHTML = `
        <h2>${location}</h2>
        <p>${streetName}</p>
        <p>${zipCode}</p>
        ${name.length > 0 ? `<p>${name}</p>` : ''}
        <p>${country}</p>
        <div class="opening-hours">
            <i class="fa-regular fa-clock"></i>
            ${openingHours.join("")}
        </div>
        <div class="contact">
            <h3>${phoneNo}</h3>
            <h3>${email}</h3>
        </div>
    `;

    container.appendChild(information);
}

const locationComponent = () => {
    const content = document.querySelector('#content');
    const locationBackground = document.createElement('div');
    locationBackground.classList.add('location-background');

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('location-grid');

    const restaurants = [
        {location: 'London', address: 'Kensington High St, W8 7RG', country: 'United Kingdom', times: 'Monday - Saturday, 12:00 - 15:00, 18:00 - 23:00, Sunday, 12:00 - 15:00, 18:00 - 22:30', contact: '+44 63421 016174, sushidenuk@email.com'},
        {location: 'Tokyo', address: 'Shibuya City, Maruyamacho, Building 2nd Floor', times: 'Monday - Saturday, 12:00 - 15:00, 18:00 - 00:00, Sunday, Closed' , country: 'Japan', contact: '+81 82-5238-4234, sushidenjp@email.com'},
        {location: 'Los Angeles', address: 'Sunset Blvd, CA 90026, California', country: 'United States', times: 'Monday - Friday, 11:00 - 14:00, 17:00 - 21:30, Saturday - Sunday, Closed' , contact: '+1 (213) 555-7372, sushidenus@email.com'},
    ];

    restaurants.forEach((obj) => restaurant(obj.location, obj.address, obj.country, obj.times, obj.contact, gridContainer));

    const title = document.createElement('h2');
    title.textContent = 'Contact us to make a reservation';

    locationBackground.appendChild(gridContainer);
    locationBackground.appendChild(title);
    content.appendChild(locationBackground);

    // Source of the location background image

    return content;
}

const menuComponent = () => {
    const content = document.querySelector('#content');
    const menuBackground = document.createElement('div');
    menuBackground.classList.add('menu-background');

    content.appendChild(menuBackground);

    return content;
}

export default menuComponent;