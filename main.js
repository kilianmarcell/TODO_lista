document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("gombAdd").addEventListener("click", kattint);
}

function kattint() {
    listabaTolt()
    beviteliMezoUres();
}

function kitorol(e) {
    e.target.parentNode.remove();
}

function kipipal(e) {
}

function listabaTolt() {
    let resz = document.createElement("div");

    let kipipal = document.createElement("input");
    kipipal.setAttribute("type", "checkbox");
    kipipal.style.marginRight = "10px";
    kipipal.addEventListener("click", kipipal);

    let szoveg = document.createElement("label");
    szoveg.style.marginRight = "100px";
    szoveg.innerHTML = document.getElementById("bevitel").value;

    let gomb = document.createElement("button");
    gomb.addEventListener("click", kitorol);
    gomb.innerHTML = "X";

    let hr = document.createElement("hr");

    resz.appendChild(kipipal);
    resz.appendChild(szoveg);
    resz.appendChild(gomb);
    resz.appendChild(hr);

    document.getElementById("feladatok").appendChild(resz);
}

function beviteliMezoUres() {
    document.getElementById("bevitel").value = "";
}