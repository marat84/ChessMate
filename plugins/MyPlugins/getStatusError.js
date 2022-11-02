export default ({app, $utils}, inject) => {
  inject('getStatusError', function (status) {
    let local = app.i18n.messages[app.i18n.locale];
    switch (status) {
      case 500:
        return {
          title: local.fetchError.title500,
          text: local.fetchError.text500,
        };
      case 400:
      case 404:
      case 410:
        return {
          title: local.fetchError.title400,
          text: local.fetchError.text400,
        };
      case 401:
      case 403:
      case 407:
        return {
          title: local.fetchError.title403,
          text: local.fetchError.text403,
        };
      case 405:
      case 411:
      case 412:
      case 413:
      case 414:
      case 415:
      case 416:
      case 417:
      case 501:
        return {
          title: local.fetchError.title501,
          text: local.fetchError.text501,
        };
      case 503:
        return {
          title: local.fetchError.title503,
          text: local.fetchError.text503,
        };
      case 419:
      case 504:
        return {
          title: local.fetchError.title504,
          text: local.fetchError.text504,
        };
      case 422:
        return {
          title: local.fetchError.title422,
          text: local.fetchError.text422,
        };
      case "timeout":
        return {
          title: local.fetchError.titleTimeout,
          text: local.fetchError.textTimeout,
        };
      case "noConnect":
        return {
          title: local.fetchError.titleConnect,
          text: local.fetchError.textConnect,
        };
      default:
        return {
          title: local.fetchError.titleDefault + ' ' + status,
          text: local.fetchError.textDefault,
        };
    }
  })
}
