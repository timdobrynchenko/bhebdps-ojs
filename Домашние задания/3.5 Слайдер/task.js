/* 
примерный план решения задачи

стартуем
    собираем слайды в массив
    ищем кнопку некс
    ищем кнопку превиоус
    задаем стартовый индекс 0

функция перехода к слайду
    у текущего индекса убираем класс active
    делаем текущий индекс равным новому 
    даем класс active новому слайду

обработчки на кнопки
    для левой — переход сладу с индексом -1 от текущего
    для правой +1

обработчики на точки
    перебираем массив и для текущего элемента добавляем слушатель клика
    передаем индекс точки в функцию перехода к слайду

??? что-то сделать с кольцеванием — остатком от деления решаем
*/

let slidesArr = Array.from(document.querySelectorAll('.slider__item'));
let dotsArr = Array.from(document.querySelectorAll('.slider__dot'));
let prevButton = document.querySelector('.slider__arrow_prev');
let nextButton = document.querySelector('.slider__arrow_next');
let slideIndex = 0;
let totalSlides = slidesArr.length;

function goToSlide(index) {
  slidesArr[slideIndex].classList.remove('slider__item_active');
  dotsArr[slideIndex].classList.remove('slider__dot_active');
  slideIndex = index;
  slidesArr[slideIndex].classList.add('slider__item_active');
  dotsArr[slideIndex].classList.add('slider__dot_active');
}

nextButton.addEventListener('click', function () {
  goToSlide((slideIndex + 1) % totalSlides);
});

prevButton.addEventListener('click', function () {
  goToSlide((slideIndex - 1 + totalSlides) % totalSlides);
});

dotsArr.forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    goToSlide(index);
  });
});