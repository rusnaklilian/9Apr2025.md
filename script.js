function isPrime(n) {
    // daca numarul e 1 sau mai mic nu e prim
    if (n <= 1) return false
    // verificam de la 2 pana la n-1
    for (let i = 2; i < n; i++) {
        // daca se imparte exact la ceva nu e prim
        if (n % i == 0) return false
    }
    // daca nu am gasit divizori e prim
    return true
}

function verifica() {
    // luam numarul din caseta
    let numar = document.getElementById("numar").value
    // verificam daca e prim
    let rezultat = isPrime(numar)
    // punem rezultatul pe pagina
    document.getElementById("rezultat").innerHTML = numar + " e prim: " + rezultat
}