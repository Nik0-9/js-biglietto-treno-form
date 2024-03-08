let elNomeCognome = document.getElementById('NomeCognome');
let elKm = document.getElementById('km');
let elAge = document.getElementById('age');
let elBtnCalcola = document.getElementById('calc');
let elBtnReset = document.getElementById('reset');
let elNome = document.getElementById('nome');
let elOfferta = document.getElementById('sconto');
let elPrezzo = document.getElementById('prezzo');
const tarifBase = 0.21;
let elVagone = document.getElementById('vagone');
let elTicket = document.querySelector('.ticket');
let elCPcode = document.getElementById('cp-code');

elBtnCalcola.addEventListener('click', function () {
    const nome = elNomeCognome.value;
    //  console.log(nome);
    const km = parseInt(elKm.value);
    //  console.log(km);
    let age = parseInt(elAge.value);
      console.log(age);
    let priceBase = km * tarifBase;
    let price;
    let offerta;
    let vagone = getRndInteger(1 ,20);
    let code = getRndInteger(1000, 9000);
    

    if (age < 18) {
        price = priceBase - (priceBase * 20 / 100);
        offerta = `Sconto del 20%`;
    } else if (age >= 65) {
        price = priceBase - (priceBase * 40 / 100);
        offerta = `Sconto del 40%`;
    } else {
        price = priceBase;
        offerta = `Nessuno sconto applicabile`;
    }
    elTicket.className = 'ticket';
    elNome.innerText = nome;
    elOfferta.innerText = offerta
    elPrezzo.innerText = price.toFixed(2) + '€';
    elVagone.innerText = vagone;
    elCPcode.innerText = code;
});

elBtnReset.addEventListener('click', function () {
    //console.log('hai annullato');
    elTicket.className = `${'ticket'} ${'d-none'}`;
    document.getElementById('NomeCognome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';
});