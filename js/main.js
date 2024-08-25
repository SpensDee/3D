const model3D = document.querySelector(".model-3D__img");
const startFrame = 0;
const endFrame = 150;

function updateFrame() {
    // Рассчитываем текущий кадр на основе прокрутки страницы
    let currentFrame = Math.floor(window.pageYOffset / 20);

    // Ограничиваем текущий кадр в пределах от startFrame до endFrame
    currentFrame = Math.max(startFrame, Math.min(currentFrame, endFrame));

    // Обновляем источник изображения с учётом паддинга
    model3D.src = `assets/render_${currentFrame.toString().padStart(5, '0')}.webp`;
}

// Добавляем обработчик события прокрутки
window.addEventListener("scroll", updateFrame);

// Вызываем функцию, чтобы установить начальный кадр
updateFrame();
