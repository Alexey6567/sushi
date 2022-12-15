function calcCartPrise () {
const cartWrapper = document.querySelector(".cart-wrapper");
const priceElements = cartWrapper.querySelectorAll(".price__currency");
const totalPraceEl = document.querySelector(".total-price");

// общая стоимость товара
let priceTotal = 0
// обходим все блоки  с ценами в корзине
priceElements.forEach(function (item) {

// находим количество товара    
const amountEl = item.closest(".cart-item").querySelector("[data-counter]");

//добавляем стоимость товара в общюю стоимость(кол-во, цену)
//const priseEl = item.querySelector(".prise__currency");

priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)
//totalPrase = totalPrase + currentPrise;
//priceTotal += currentPrise;

});
// отображаем цену на странице
totalPraceEl.innerText = priceTotal

}