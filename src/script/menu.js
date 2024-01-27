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

    return menuBackground;
}

const loadMenuPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(menuComponent());
    return main;
}

export default loadMenuPage;