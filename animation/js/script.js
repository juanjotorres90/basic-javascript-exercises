function miAnimacion() {

    var intervalo = setInterval(moviment, 5);
    var elem = document.getElementById("animado");
    var elemx = document.getElementById("coordx");
    var elemy = document.getElementById("coordy");
    var pos = 0;


    function moviment() {
        if (pos == 350) {
            clearInterval(intervalo);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
            elemy.innerHTML = elem.style.top = pos + "px";
            elemx.innerHTML = elem.style.left = pos + "px";
        }

    }

}