// Functie pentru a adauga un element nou în lista
function addListItem() {
    //  Obtine elementul <ul> folosind ID-ul sau
    const myList = document.getElementById("myList");

    //  Creeaza un nou element <li>
    const newListItem = document.createElement("li");

    //  Seteaza continutul text al elementului <li>
    newListItem.textContent = "Element Nou";

    //  Adauga elementul <li> la elementul <ul>
    myList.appendChild(newListItem);
}

// Obtine elementul <button> folosind ID-ul sau
const addButton = document.getElementById("addButton");

// Adauga un event listener pentru evenimentul de clic pe buton
addButton.addEventListener("click", addListItem);s