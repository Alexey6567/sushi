// Добавляем прослушку на всем окне
window.addEventListener('click', function(event) {

let counter

    // проверяем клик строго по кнопкам плюс либо минус
if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
// Находим обертку счетчика
const counterWrapper = event.target.closest('.counter-wrapper');
// Находим див с числом счетчика
counter = counterWrapper.querySelector('[data-counter]');
}
// Проверяем является ли элемент по которому был совершон клик кнопкой Плюс
if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
}
// Проверяем является ли элемент по которому был совершон клик кнопкой Минус
if (event.target.dataset.action === "minus") {
    //проверяем что бы счетчик был больше 1
if (parseInt(counter.innerText)>1) {
    //изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
      // Проверка на товар который находится в карзине
    } else if (event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1) {
        // удаляем товар из корзины
        event.target.closest(".cart-item").remove();
// отображние статуса корзина пустая/полная
    toggleCartStatus();
 // пересчет общей стоимости корзины
 calcCartPriceAndDelivery ()

    }
  }

// проверяем клик  на + или - внутри корзины
if (event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper")) {
    // пересчет общей стоимости корзины
    calcCartPriceAndDelivery ()
}

});