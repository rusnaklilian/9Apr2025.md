function reverseArray(arr) {
    // creem o lista noua 
    let nou = []
    // mergem de la ultimul element 
    for (let i = arr.length - 1; i >= 0; i--) {
        // punem fiecare element in lista 
        nou.push(arr[i])
    }
    // dam lista inversata 
    return nou
}

function inverseaza() {
    // luam ce e scris in caseta
    let input = document.getElementById("lista").value
    let arr = input.split(",")
    // inversam lista
    let rezultat = reverseArray(arr)
    // aratam rezultatul
    document.getElementById("rezultat").innerHTML = rezultat
}