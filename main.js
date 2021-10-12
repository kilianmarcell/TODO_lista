function listabaTolt() {
    let resz = document.createElement("div");
    let kipipal = document.createElement("input");
    kipipal.setAttribute("type", "checkbox");
    kipipal.style.marginRight = "10px";
    let szoveg = document.createElement("label");
    szoveg.style.marginRight = "100px";
    szoveg.innerHTML = document.getElementById("bevitel").value;
    let gomb = document.createElement("button");
    resz.appendChild(kipipal);
    resz.appendChild(szoveg);
    resz.appendChild(gomb);
    document.getElementById("feladatok").appendChild(resz);
}

function beviteliMezoUres() {
    document.getElementById("bevitel").value = "";
}

function kattint() {
    listabaTolt()
    beviteliMezoUres();
}

function init() {
    document.getElementById("gombAdd").addEventListener("click", kattint);
}

document.addEventListener("DOMContentLoaded", init);