const model3D = document.querySelector(".model-3D__img");
const startFrame = 0;
const endFrame = 150;
const images = [];

// Функция предварительной загрузки всех изображений
function preloadImages() {
    for (let i = startFrame; i <= endFrame; i++) {
        const img = new Image();
        img.src = `assets/render_${i.toString().padStart(5, '0')}.webp`;
        images.push(img);
    }
}

// Функция обновления кадра
function updateFrame() {
    let currentFrame = Math.floor(window.pageYOffset / 20);
    currentFrame = Math.max(startFrame, Math.min(currentFrame, endFrame));
    model3D.src = images[currentFrame].src;  // Используем предварительно загруженные изображения
}

// Предварительно загружаем все изображения перед инициализацией скролл-обработчика
preloadImages();

// Добавляем обработчик события прокрутки
window.addEventListener("scroll", updateFrame);

// Вызываем функцию, чтобы установить начальный кадр
updateFrame();
