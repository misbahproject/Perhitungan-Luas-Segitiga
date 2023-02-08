const segitigaForm = document.getElementById("segitigaForm");
const demoContainer = document.getElementById("demoContainer");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");

const hasilSegitiga = JSON.parse(localStorage.getItem("segitiga")) || [];

const addSegitiga = (alas, tinggi, hasil) => {
  hasilSegitiga.push({
    alas,
    tinggi,
    hasil,
  });

  localStorage.setItem("segitiga", JSON.stringify(hasilSegitiga));

  return { alas, tinggi, hasil };
};

const buatSegitiga = ({ alas, tinggi, hasil }) => {
  const segitigaDiv = document.createElement("div");
  const alas1 = document.createElement("p");
  const tinggi1 = document.createElement("p");
  const hasilS = document.createElement("p");

  alas1.innerHTML = "Alas : " + alas;
  tinggi1.innerHTML = "Tinggi : " + tinggi;
  hasilS.innerHTML = "Luas Segitiga : " + hasil;

  segitigaDiv.append(alas1, tinggi1, hasilS);
  demoContainer.appendChild(segitigaDiv);
};
