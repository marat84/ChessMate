export default ({$utils}, inject) => {
  inject('message', function (message, isSuccess) {
    // Вывод сообщения о событии
    const ERROR_COLOR = 'orangeRed';
    const SUCCESS_COLOR = '#1cb34d';
    let ERROR_SHOW_TIME = (isSuccess) ? $utils.ERROR_TIMEOUT : 9990000;
    const TRANSITION_DURATION = 0.5;
    const MAIN_CLASS = 'show-popup-message';

    // Немедленное закрытие окна
    let closeMessage = function (block, isSuccess) {
      let blocksOnPage = document.querySelectorAll('.' + MAIN_CLASS);
      if (blocksOnPage.length > 1 && !isSuccess)
        blocksOnPage[0].remove();

      let
        colorSvg = (isSuccess) ? SUCCESS_COLOR : ERROR_COLOR,
        closeButton = document.createElement('button');

      closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="' + colorSvg + '"><path d="M512 60.3L451.7 0 256 195.7 60.3 0 0 60.3 195.7 256 0 451.7 60.3 512 256 316.3 451.7 512l60.3-60.3L316.3 256 512 60.3z"/></svg>';
      closeButton.classList.add('close-message-popup');

      let closeButtonHandler = function (evt) {
        evt.preventDefault();

        hideMessage(block);

        closeButton.removeEventListener('click', closeButtonHandler);
      };

      closeButton.addEventListener('click', closeButtonHandler);

      block.appendChild(closeButton);
    };

    // Анимация закрытия окна в одельной функции
    let hideMessage = function (block) {
      block.style.top = '-50%';

      setTimeout(function () {
        block.remove();
      }, TRANSITION_DURATION * 1000);
    };

    // Закрытие окна с задержкой
    let hideTimeoutMessage = function (block, isSuccess) {
      let colorTimerBlock = (isSuccess) ? SUCCESS_COLOR : ERROR_COLOR;
      let timerBlock = document.createElement('div');
      let pointOfStart = 100; // Длина визуальной линии с которой начинается остчёт

      timerBlock.setAttribute('style', 'position:absolute; left:0; top:0; height:4px; width:100%; background-color: ' + colorTimerBlock + ';transition: width 0.1s linear');

      let interval = setInterval(function () {
        pointOfStart--;

        timerBlock.style.width = pointOfStart + '%';
      }, (ERROR_SHOW_TIME - 200) / pointOfStart);

      setTimeout(function () {
        clearInterval(interval);

        hideMessage(block);

      }, ERROR_SHOW_TIME);

      block.appendChild(timerBlock);
    };

    // Основная функция показа окна с сообщением
    // let showMessage = function (message, isSuccess) {
    let color = (isSuccess) ? SUCCESS_COLOR : ERROR_COLOR;
    let wrapBlockError = document.createElement('section');
    let titleErrorMessage = document.createElement('h2');
    let textErrorMessage = document.createElement('div');

    wrapBlockError.classList.add(MAIN_CLASS);

    wrapBlockError.setAttribute('style', 'top: -50%; transition: all ' + TRANSITION_DURATION + 's cubic-bezier(.25,-0.5,0,1.25);');
    titleErrorMessage.setAttribute('style', `color: ${color}`);

    // titleErrorMessage.setAttribute('style', 'text-shadow: none;');
    // textErrorMessage.setAttribute('style', 'margin-bottom: 0;');

    titleErrorMessage.innerHTML = message.title;
    textErrorMessage.innerHTML = message.text;

    if (message.title) {
      wrapBlockError.appendChild(titleErrorMessage);
    }

    if (message.text) {
      wrapBlockError.appendChild(textErrorMessage);
    }

    document.body.appendChild(wrapBlockError);

    setTimeout(function () {
      wrapBlockError.style.top = '60px';
    }, 100);

    hideTimeoutMessage(wrapBlockError, isSuccess);
    closeMessage(wrapBlockError, isSuccess);
    // };
  })
}
