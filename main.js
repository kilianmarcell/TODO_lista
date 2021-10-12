let lista = [];

function kattint() {
    let szoveg = document.getElementById("bevitel").value;
    document.getElementById("bevitel").value = "";
    lista.push(szoveg);
}

function init() {
    document.getElementById("gombAdd").addEventListener("click", kattint);
}

document.addEventListener("DOMContentLoaded", init);