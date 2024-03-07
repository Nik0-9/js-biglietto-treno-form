let elNomeCognome = document.getElementById('NomeCognome');
let elKm = document.getElementById('km');
let elAge = document.getElementById('age');
let elBtnCalcola = document.getElementById('calc');
let elBtnAnnull = document.getElementById('annull');

let elNome = document.getElementById('nome');
let elOfferta = document.getElementById('offerta');
let elPrezzo = document.getElementById('prezzo');
const tarifBase = 0.21;


elBtnCalcola.addEventListener('click', function
(){
const nome = elNomeCognome.value;
 console.log(nome);
const km = elKm.value;
 console.log(km);
const age = elAge.value;
 console.log(age);
let priceBase = km * tarifBase;
let price;
let offerta;

if(age < 18){
    price = priceBase - (priceBase * 20 / 100);
    offerta = `Sconto del 20%`;
} else if(age >= 65){
    price = priceBase - (priceBase * 40 / 100);
    offerta = `Sconto del 40%`;
} else{
    price = priceBase;
    offerta = `Nessuno sconto`;
}

elNome.innerText = nome;
elOfferta.innerText = offerta
elPrezzo.innerText = price.toFixed(2);
});