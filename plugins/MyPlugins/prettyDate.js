export default ({app, $utils}, inject) => {
  inject('prettyDate', function (value) {
    let date = new Date(value);
    let month = app.i18n.messages[app.i18n.locale].dateMonths[date.getMonth()].toLowerCase();
    let day = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();

    return [month, day + ',', year].join(' ')
  })
}
