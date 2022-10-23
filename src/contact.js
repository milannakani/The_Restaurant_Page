function createContact () {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    
    const address = document.createElement("p");
    address.textContent = "Happily Unsettled, C-54/2, Nilkanth Park, Rajkot, India";

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "+49-15171071729";

    const location = document.createElement("img");
    location.src = "";

    contact.appendChild(address);
    contact.appendChild(phoneNumber);
    contact.appendChild(location);

    return contact;
}

function loadContact () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;