// Comprobar que el navegador sea compatible

if (typeof (Storage) !== "undefined") {
    nom = prompt("dime tu nombre");
    var fecha = new Date();
    var local = fecha.toLocaleDateString();
    localStorage.setItem("nombreUsuario", nom);
    localStorage.setItem("ultimaConexion", local);
    localStorage.Cognom = "Torres";
    localStorage.removeItem("color");
    localStorage.clear();
} else {
    alert("Tu navegador no puede guardar ningún dato")
}

document.getElementById("missatge").innerHTML = localStorage.getItem("nombreUsuario") + " Última visita fue " + localStorage.getItem("ultimaConexion");