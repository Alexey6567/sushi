function calcCartPriceAndDelivery () {
const cartWrapper = document.querySelector(".cart-wrapper");
const priceElements = cartWrapper.querySelectorAll(".price__currency");
const totalPraceEl = document.querySelector(".total-price");
const deliveryCost = document.querySelector(".delivery-cost");
const cartDelivery = document.querySelector("[data-cart-delivery]");

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
totalPraceEl.innerText = priceTotal;
// скрываем / показываем блок с стоимостью доставки
if (priceTotal > 0) {
    cartDelivery.classList.remove("none");
} else {
    cartDelivery.classList.add("none");
}
// указываем стоимость доставки
if (priceTotal >= 600) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "бесплатно"
} else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 ₽"
 }
}