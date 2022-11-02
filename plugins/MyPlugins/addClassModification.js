export default ({app, $utils}, inject) => {
  /**
   * Добавляет модификаторы классов
   * @param  {className} String — Оригинальное название класса, к которому будет добавлен класс
   * @param  {string} String — Название модификатора (без '--')
   * @return {String}
   */
  inject('addClassModification', function (className, string) {
    if (string) {
      let names = string.split(' ');
      let result = [];

      for (let name of names) {
        result.push(`${className}--${name}`);
      }

      return result.join(' ');
    }

    return null;
  })
}
