// Список изображений для слайдера (использован сервис picsum.photos)
const images = [
    'https://picsum.photos/id/10/600/350',
    'https://picsum.photos/id/20/600/350',
    'https://picsum.photos/id/30/600/350',
    'https://picsum.photos/id/40/600/350',
    'https://picsum.photos/id/50/600/350'
];

// Индекс текущего изображения
let currentIndex = 0;

// Получаем DOM-элементы
const imageElement = document.getElementById('image');
const counterElement = document.getElementById('counter');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Обновляет изображение и текст счётчика
function updateSlider() {
    imageElement.src = images[currentIndex];
    counterElement.textContent =
        'Изображение ' + (currentIndex + 1) + ' из ' + images.length;
}

// Показать следующее изображение (с зацикливанием)
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

// Показать предыдущее изображение (с зацикливанием)
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

// Подключаем слушатели событий
nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

// Инициализация: показать первое изображение при загрузке
updateSlider();
