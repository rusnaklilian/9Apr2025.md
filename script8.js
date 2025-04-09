//  Functie pentru a incepe incarcarea
function startLoading() {
    //  Obtine elementele necesare din DOM
    const bar = document.getElementById("bar");
    const text = document.getElementById("text");
    let latime = 0;
    let interval;

    //  Functie pentru a actualiza progresul
    function update() {
        latime++;
        bar.style.width = latime + "%";
        text.textContent = "Progres: " + latime + "%";

        //  Verifica daca s-a ajuns la 100%
        if (latime >= 100) {
            clearInterval(interval);
            text.textContent = "Progres: Finalizat!";
        }
    }

    //  Seteaza intervalul de actualizare
    interval = setInterval(update, 50);
}

//  Obtine butonul si adauga un event listener
const startButton = document.getElementById("start");
startButton.addEventListener("click", startLoading);