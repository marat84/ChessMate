export default ({$message, $getStatusError}, inject) => {
  inject('errorHandler', function (error) {
    if (Number.isFinite(error)) {
      $message($getStatusError(error));
    }

    if (Object.keys(error).length) {
      if (error.status) {
        if (error.statusText) {
          $message({title: error.statusText});
        } else {
          if (Number.isFinite(error.status)) {
            $message($getStatusError(error.status));
          } else {
            $message($getStatusError('noConnect'));
          }
        }
      } else {
        let errorThrow = (error.message?.includes('timeout')) ?
          $getStatusError('timeout') :
          $getStatusError('noConnect');

        $message(errorThrow);
      }
    }
  })
}
