/*

старт
    ищем текстовое поле
    при загрузке страницы если в локале есть инфо — тащим данные из локала в текстовое поле

инпут
    добавляем eventListener на текстовое поле на input (каждое изменение содержимого)
        при каждом изменении сохраняем значение текстового поля в локал

удаление
    создаем кнопку — вставка html и css
    добавляем eventListener на click по кнопке 
        при клике значение текстового поля и локала стираем

*/

let textArea = document.getElementById('editor');

let cached = localStorage.getItem('text-data');
if (cached) {
  textArea.value = cached;
}

textArea.addEventListener('input', function () {
  localStorage.setItem('text-data', textArea.value);
});

let button = document.createElement('button');
button.classList.add('button-clear');
button.textContent = 'Очистить содержимое';
let parent = textArea.parentElement;
parent.append(button);
button.addEventListener('click', function () {
  textArea.value = '';
  localStorage.removeItem('text-data');
});