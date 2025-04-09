function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }; //pun tot la un loc
}

const obj1 = { food: 'shaurma', car: 'mercedes' }; //primul obiect
const obj2 = { animal: 'shepherd dog', drink: 'coca-cola' }; //al doilea obiect

function combina() {
    let rez = mergeObjects(obj1, obj2); //combin obiectele
    document.getElementById("rezultat").innerHTML = JSON.stringify(rez); //arata pe pagina
}