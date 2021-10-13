document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("gombAdd").addEventListener("click", kattint);
}

function kattint() {
  listabaTolt();
  beviteliMezoUres();
}

function listabaTolt() {
  if (document.getElementById("bevitel").value == "") {
    alert("Kérem töltse ki a bemeneti mezőt!");
    return;
  }

  let resz = document.createElement("div");
  resz.className = "reszClass";

  let kipipal = document.createElement("input");
  kipipal.setAttribute("type", "checkbox");
  kipipal.addEventListener("click", kipipalFunction);
  resz.appendChild(kipipal);

  let szoveg = document.createElement("label");
  szoveg.innerHTML = document.getElementById("bevitel").value;
  resz.appendChild(szoveg);

  let gomb = document.createElement("button");
  gomb.addEventListener("click", kitorol);
  gomb.innerHTML = "x";
  resz.appendChild(gomb);

  let hr = document.createElement("hr");
  resz.appendChild(hr);

  document.getElementById("feladatok").appendChild(resz);
}

function kitorol(e) {
  e.target.parentNode.remove();
}

function kipipalFunction(e) {
  let sor = e.target.parentNode;
  let szoveg = sor.getElementsByTagName("label")[0];
  szoveg.classList.toggle("athuzott");
}

function beviteliMezoUres() {
  document.getElementById("bevitel").value = "";
}
