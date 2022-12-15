// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Отслеживаем клик на кнопку Минус
btnMinus.addEventListener('click', function() {
    
    // проверяем чтобы  счетчик был >1
if (parseInt(counter.innerText)>1) {
    // Изменяем текст в счетчике уменьшая его на 1
counter.innerText = --counter.innerText;
}

});

// Отслеживаем клик на кнопку Плюс
btnPlus.addEventListener('click', function() {
  // Изменяем текст в счетчике увеличивая его на 1
    counter.innerText = ++counter.innerText;
})

