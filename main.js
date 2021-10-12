let teendok = "";

function kitorol(e) {
    e.target.parentNode.remove();
}

function kipipal(e) {
    e.target.parentNode.style = "block";
    if (this.checked) {
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
}

function listabaTolt() {
    let resz = document.createElement("div");
    let kipipal = document.createElement("input");
    kipipal.setAttribute("type", "checkbox");
    kipipal.style.marginRight = "10px";
    kipipal.addEventListener("change", kipipal);
    let szoveg = document.createElement("label");
    szoveg.style.marginRight = "100px";
    szoveg.innerHTML = document.getElementById("bevitel").value;
    let gomb = document.createElement("button");
    gomb.addEventListener("click", kitorol);
    gomb.innerHTML = "X";
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