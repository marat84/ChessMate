export default ({app, $utils}, inject) => {
  inject('prettyDate2', function (value) {
    let date = new Date(value);
    // let month = app.i18n.messages[app.i18n.locale].dateMonths[date.getMonth()].toLowerCase();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();

    let hour = date.getHours();
    let minutes = date.getMinutes();

    let time = [hour, minutes].join(':');


    return [day, month, year].join('.') + ', ' + time;
  })
}
