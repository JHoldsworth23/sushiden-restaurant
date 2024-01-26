const homeComponent = () => {
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

const menuGrid = (sushi, japanese, description, container) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('menu-grid-item');

    gridItem.innerHTML = `
        <div id="${sushi.toLowerCase()}-img"></div>
        <h3>${sushi}</h3>
        <p>${japanese}</p>
        <p>${description}</p>
    `;

    container.appendChild(gridItem);
}

const menuComponent = () => {
    const content = document.querySelector('#content');
    const menuBackground = document.createElement('div');
    menuBackground.classList.add('menu-background');

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('menu-grid');

    const title = document.createElement('h1');
    title.textContent = 'Menu';

    const menu = [
        {type: 'Nigiri', jp: '握り', description: 'A piece of fish or seafood (both raw and cooked) placed upon a single ball of rice.'},
        {type: 'Sashimi', jp: '刺身', description: 'Fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce.'},
        {type: 'Maki', jp: '巻き', description: 'Raw fish or vegetables are rolled up in a sheet of roasted seaweed.'},
        {type: 'Temaki', jp: '手巻', description: 'Cold boiled rice moistened with rice vinegar, wrapped together with strips of vegetable or raw fish in a sheet of dried seaweed and rolled into a cone shape.'},
        {type: 'Poke', jp: '', description: 'Cubes of marinated sushi grade fish which is then tossed over rice and topped with Asian-inspired sauces.'},
        {type: 'Uramaki', jp: '裏巻', description: 'A type of rolled sushi in which the rice is on the outside, rather than rolled up inside the nori.'},
    ];

    menu.forEach(obj => menuGrid(obj.type, obj.jp, obj.description, gridContainer));

    menuBackground.appendChild(title);
    menuBackground.appendChild(gridContainer);
    content.appendChild(menuBackground);

    return content;
}

export { homeComponent, locationComponent, menuComponent };