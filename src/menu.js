function creatMenu () {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(menuItem(
        "Fafda",
        "made from checkpeas flour, long stics fried in oil"
        )
        );
    menu.appendChild(menuItem(
        "Khaman",
        "Yellow fluffy buttery smooth and sweet item"
        )
        );
    menu.appendChild(menuItem(
        "Thabadi",
        "made from milk and cheese, sweet dish"
        )
        );

    return menu;
}

function menuItem (name,description) {
    const item = document.createElement("div");
    item.classList.add("item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDes = document.createElement("p");
    foodDes.textContent = description;

    
    
    const foodImage = document.createElement("img");
    foodImage.src = `images/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;

    item.appendChild(foodImage)
    item.appendChild(foodName);
    item.appendChild(foodDes);    

    return item;
}

function loadMenu () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(creatMenu());
}

export default loadMenu;