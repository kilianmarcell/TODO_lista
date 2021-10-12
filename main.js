let lista = [];

function kattint() {
    let szoveg = document.getElementById("bevitel").value;
    document.getElementById("bevitel").value = "";
    lista.push(szoveg);
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

function init() {
    document.getElementById("gombAdd").addEventListener("click", kattint);
}

document.addEventListener("DOMContentLoaded", init);