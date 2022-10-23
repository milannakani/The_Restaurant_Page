function createHome () {
    const home = document.createElement("div");
    home.classList.add("home");

    const mainImage = document.createElement("img");
    mainImage.src = ""
    mainImage.alt = "mainImage";

home.appendChild(creatPara("Best Place to Eat Gujarati Food"));
home.appendChild(creatPara("Proudly Gujarati since Gujarat"));
home.appendChild(mainImage);
home.appendChild(creatPara("Visit Us"));

return home;

}

function creatPara(text) {
    const para = document.createElement("p")
    para.textContent = text;
    return para;
}

function loadHome () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;