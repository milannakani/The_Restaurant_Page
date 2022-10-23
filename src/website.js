import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader () {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("rest-name");
    restaurantName.textContent = "Happily Unsettled";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav () {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("nacv-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });
    
    const menuButton = document.createElement("button");
    menuButton.classList.add("nacv-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("nacv-button");
    contactButton.textContent = "Contact Us";
    contactButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton (button) {
    const buttons = document.querySelectorAll(".nacv-button");

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain () {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter () {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Milan`;

    footer.appendChild(copyright);

    return footer;
}

function intializeWebsite () {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".nacv-button"));
    loadHome();
}

export default intializeWebsite;

