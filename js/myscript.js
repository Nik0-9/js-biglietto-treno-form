let elNomeCognome = document.getElementById('NomeCognome');
let elKm = document.getElementById('km');
let elAge = document.getElementById('age');
let elBtnCalcola = document.getElementById('calc');
let elBtnAnnull = document.getElementById('anull');
let elNome = document.getElementById('nome');
let elOfferta = document.getElementById('sconto');
let elPrezzo = document.getElementById('prezzo');
const tarifBase = 0.21;
let elVagone = document.getElementById('vagone');
let elTicket = document.querySelector('.ticket');

elBtnCalcola.addEventListener('click', function () {
    const nome = elNomeCognome.value;
    //  console.log(nome);
    const km = elKm.value;
    //  console.log(km);
    const age = elAge.value;
    //  console.log(age);
    let priceBase = km * tarifBase;
    let price;
    let offerta;
    let vagone = getRndInteger(1 ,20);
    

    if (parseInt(age) < 18) {
        price = priceBase - (priceBase * 20 / 100);
        offerta = `Sconto del 20%`;
    } else if (parseInt(age) >= 65) {
        price = priceBase - (priceBase * 40 / 100);
        offerta = `Sconto del 40%`;
    } else {
        price = priceBase;
        offerta = `Nessuno sconto`;
    }
    elTicket.className = 'ticket';
    elNome.innerText = nome;
    elOfferta.innerText = offerta
    elPrezzo.innerText = price.toFixed(2);
    elVagone.innerText = vagone;
});

elBtnAnnull.addEventListener('click', function () {
    //console.log('hai annullato');
    elTicket.className = `${'ticket'} ${'d-none'}`;
    document.getElementById('NomeCognome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('nome').innerHTML = '';
    document.getElementById('sconto').innerHTML = '';
    document.getElementById('prezzo').innerHTML = '';
});