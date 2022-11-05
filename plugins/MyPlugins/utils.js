import Vue from 'vue';

export default ({app, $base64}, inject) => {

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

  // Оборачивает каждую перенесенную строку в тег
  function splitLines(container, opentag, closingtag) {
    let spans = container.children,
      top = 0,
      tmp = '';

    container.innerHTML = container.textContent.replace(/\S+/g, '<n>$&</n>');

    for (let i = 0; i < spans.length; i++) {
      let rect = spans[i].getBoundingClientRect().top;
      if (top < rect) tmp += closingtag + opentag;
      top = rect;
      tmp += spans[i].textContent + ' ';
    }

    container.innerHTML = tmp += closingtag;
  }

  // Обработка даты для запроса по restAPI
  function dateForFetch(time) {
    let date = new Date(time);
    let month = date.getMonth() + 1;
    let day = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();

    return [year, month, day].join('-');
  }

  function formatPhone(phone) {
    let lenPhone = phone.length;
    let tt = phone.split('');
    if (lenPhone === 12) {
      tt.splice(2, "", "(");
      tt.splice(6, "", ")");
      tt.splice(10, "", "-");
      tt.splice(13, "", "-");
    } else if (lenPhone === 13) {
      tt.splice(4, "", " (");
      tt.splice(7, "", ") ");
      tt.splice(11, "", "-");
      tt.splice(14, "", "-");
    }
    return (tt.join(''));
  }

  inject("utils", Vue.observable({
    ENTER_KEY: 'Enter',
    ESCAPE_KEY: 'Escape',
    interval: null,
    FOCUSED_ELEMENT: 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]),button:not([disabled]), iframe, [tabindex="0"]',
    ERROR_TIMEOUT: 2500,
    dateForFetch,
    formatPhone,
    splitLines,
    isBetween(date, min, max) {
      return (date.getTime() >= min.getTime() && date.getTime() <= max.getTime())
    },
    reLang() {
      switch (app.i18n.locale) {
        case 'rus':
          return 'ru';
        case 'uz':
          return 'oz';
      }
    }
  }))
}
