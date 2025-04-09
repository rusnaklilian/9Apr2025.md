function countOccurrences(arr, value) {
    // incep cu zero ca sa numar
    let numar = 0;
    // trec prin lista
    for(let i=0; i<arr.length; i++) {
        //daca gasesc valoarea cresc numarul
        if(arr[i] == value) {
            numar++;
        }
    }
    return numar; //zic cate am gasit
}

function numara() {
    //iau lista si o fac array
    let input = document.getElementById("lista").value;
    let arr = input.split(",");
    //iau valoarea de cautat
    let val = document.getElementById("valoare").value;
    //vad cate sunt
    let rez = countOccurrences(arr, val);
    //arata cate am gasit
    document.getElementById("rezultat").innerHTML = "am gasit " + rez;
}