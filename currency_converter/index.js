// let api_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('button');
const fromcurr = document.querySelector('.from select');
const tocurr = document.querySelector('.To select');

for (let select of dropdown) {
    for (currencycodes in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currencycodes;
        newOption.value = currencycodes;

        if (select.name === 'from' && currencycodes === "USD") {
            newOption.selected = 'selected';
        }
        else if (select.name === 'To' && currencycodes === "PKR") {
            newOption.selected = 'selected';
        }

        select.append(newOption);
    }

    select.addEventListener('change', (evt) => {
        updateflag(evt.target);
    });
}

const updateflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newsrc;
}

btn.addEventListener('click',(evt) => {
    evt.preventDefault();
    let input = document.querySelector('.amount input');
    let amount = input.value;
    if (amount <= 0) {
        input.value = "";
    }
    


});