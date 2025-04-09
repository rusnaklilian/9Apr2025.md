function objectToArray(obj) {
    let lista = []; //lista goala pt rezultat
    for(let k in obj) { //iau fiecare cheie din obiect
        lista.push([k, obj[k]]); //pun cheia si valoarea intr-un array
    }
    return lista; //dau lista inapoi
}

function transforma() {
    let input = document.getElementById("obiect").value; //iau textul scris
    let obj = {}; //fac obiect gol
    let perechi = input.split(","); //sparg la virgula
    for(let p of perechi) { //merg prin perechi
        let pereche = p.split(":"); //impart la : sa iau cheia si valoarea
        let k = pereche[0].trim(); //iau cheia si scot spatiile
        let v = pereche[1].trim(); //iau valoarea si scot spatiile
        obj[k] = v; //pun in obiect
    }
    let rez = objectToArray(obj); //fac lista din obiect
    document.getElementById("rezultat").innerHTML = JSON.stringify(rez); //arata rezultatul
}