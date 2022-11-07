// Убирает фокус с элементов если активна мышка
(function () {
  // Даёт понять документу что используется мышь
  document.body.addEventListener('mousedown', function () {
    document.body.classList.add('using-mouse');
  });

  // Добавляет класс для фокуса если нажат TAB
  document.body.addEventListener('keydown', function (event) {
    if (event.keyCode === 9) {
      document.body.classList.remove('using-mouse');
    }
  });
})();
