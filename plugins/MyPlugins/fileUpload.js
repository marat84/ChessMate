export default ({$utils}, inject) => {
  inject('fileUpload', function (activeElement) {
    // Работа с загрузкой картинок через input[type="file"]
    // console.log(this.$i18n.locale);
    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, {type: contentType});
      return blob;
    };

    let fileUploadSettings = {
      additionalClass: `file-item`,
      fileTypeError: `<p>${this.$t('feedbackText100')}</p>`,
      fileSizeError: `<p>${this.$t('feedbackText101')}</p>`,
      filePopup: {
        text: this.$t('feedbackText102'),
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 512 512"><path d="M256 186.2c-38.5 0-69.8 31.3-69.8 69.8s31.3 69.8 69.8 69.8 69.8-31.3 69.8-69.8-31.3-69.8-69.8-69.8z"/><path d="M256 81.5C139.6 81.5 40.3 153.8 0 256c40.3 102.2 139.6 174.5 256 174.5 116.5 0 215.7-72.4 256-174.5C471.7 153.8 372.5 81.5 256 81.5zm0 290.9c-64.2 0-116.4-52.1-116.4-116.4S191.8 139.6 256 139.6 372.4 191.8 372.4 256 320.2 372.4 256 372.4z"/></svg>`,
      },
      fileRemove: {
        text: this.$t('feedbackText103'),
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="red"><path d="M18 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3z"/><path fill="white" d="M14.812 16.215L7.785 9.188a.985.985 0 010-1.392l.011-.011a.985.985 0 011.392 0l7.027 7.027a.985.985 0 010 1.392l-.011.011a.985.985 0 01-1.392 0z"/><path d="M7.785 14.812l7.027-7.027a.985.985 0 011.392 0l.011.011a.985.985 0 010 1.392l-7.027 7.027a.985.985 0 01-1.392 0l-.011-.011a.985.985 0 010-1.392z" fill="white"/></svg>`,
        // svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000" viewBox="0 0 26 26"><path d="M21.125 0H4.875A4.874 4.874 0 000 4.875v16.25A4.874 4.874 0 004.875 26h16.25A4.874 4.874 0 0026 21.125V4.875A4.874 4.874 0 0021.125 0zM18.78 17.394l-1.388 1.387a.654.654 0 01-.924 0L13 15.313 9.533 18.78a.653.653 0 01-.925-.002L7.22 17.394a.66.66 0 010-.926l3.468-3.467-3.467-3.467a.657.657 0 010-.925l1.388-1.388a.651.651 0 01.925 0L13 10.689l3.468-3.468a.65.65 0 01.924 0l1.388 1.386a.66.66 0 01.001.927l-3.468 3.467 3.468 3.467a.66.66 0 01-.001.926z"/></svg>`,
      },
    };
    // let fileUploadParent = document.querySelectorAll(activeParent + ' .js-upload-list');

    // console.log(fileUploadParent);

    let documentFiles = activeElement.closest('.js-upload-files');

    // console.log(documentFiles);

    const FILE_UPLOAD_EXT = ['jpg', 'png'];
    const LINK_CLASSES = ['file-list__link', 'file-list__link--left'];
    const ADDITIONAL_CLASS = fileUploadSettings.additionalClass;
    const fiveMegabytes = 15728640; // 15 мегабайт
    // const fiveMegabytes = 5242880; // 5 мегабайт

    // let randomNumber = (1000 * Math.random()).toFixed(0);
    let randomNumber = activeElement.dataset.fancyboxName;
    let fileError = documentFiles.closest('.js-upload-list').querySelector(`.js-file-errors`);



    /*window.addEventListener("DOMContentLoaded", function () {
      if (documentFiles.querySelectorAll('.' + ADDITIONAL_CLASS).length) {
        clearFiles(document);
      }
    });*/

    function clearFiles(e) {
      if (e.querySelectorAll('.' + ADDITIONAL_CLASS)) {
        e.querySelectorAll('.' + ADDITIONAL_CLASS).forEach((c) => {
          c.remove();
        });
      }

      e.querySelector(`input`).value = "";
      e.querySelector(`input`).dispatchEvent(new Event('change'));
    }

    let
      isFileImage = false,
      files = activeElement.files;

    for (let f of Array.from(files)) {
      // Валидация на тип файла
      if (f) {
        let fileName = f.name.toLowerCase();

        isFileImage = FILE_UPLOAD_EXT.some(function (current) {
          return fileName.endsWith(current);
        });
      }

      // Подготовка шаблона для загружаемых картинок
      let fileInner = `
                <button type="button" onclick="removeFile(this)" data-name="${activeElement}" class="file-list__link file-list__link--right js-file-remove" title="${fileUploadSettings.fileRemove.text}">
                  ${fileUploadSettings.fileRemove.svg}
                </button>`;

      if (isFileImage && f.size <= fiveMegabytes && f) {

        let fileWrap = document.createElement(`div`);
        fileWrap.classList.add(ADDITIONAL_CLASS);

        fileWrap.innerHTML = (fileInner);
        // console.log(fileError);
        if (fileError.children[0])
          fileError.children[0].remove();

        let imgElement = new Image();
        imgElement.setAttribute(`alt`, f.name);

        let blob = new Blob([f], {type: f.type});

        let linkElement = document.createElement(`a`);
        linkElement.setAttribute(`href`, URL.createObjectURL(f));
        linkElement.setAttribute(`target`, `_blank`);
        linkElement.dataset.fancybox = `fileUpload-${randomNumber}`;
        linkElement.title = fileUploadSettings.filePopup.text;
        linkElement.innerHTML = fileUploadSettings.filePopup.svg;
        linkElement.classList.add(...LINK_CLASSES);

        if (blob.type.includes('text'))
          blob = b64toBlob(this.$base64('text'), blob.type);
        if (blob.type.includes('officedocument.wordprocessingml.document'))
          blob = b64toBlob(this.$base64('officedocument.wordprocessingml.document'), blob.type);
        if (blob.type.includes('msword'))
          blob = b64toBlob(this.$base64('msword'), blob.type);
        if (blob.type.includes('ms-excel') || blob.type.includes('spreadsheetml.sheet'))
          blob = b64toBlob(this.$base64('ms-excel'), blob.type);
        if (blob.type.includes('pdf'))
          blob = b64toBlob(this.$base64('pdf'), blob.type);

        imgElement.src = URL.createObjectURL(blob);

        imgElement.addEventListener(`load`, () => {
          URL.revokeObjectURL(imgElement.src);
          documentFiles.prepend(fileWrap);
        });

        fileWrap.prepend(imgElement);
        fileWrap.prepend(linkElement);

        // console.log(documentFiles, linkElement, imgElement);

        // newFile.push(f);
      } else {
        clearFiles(documentFiles);

        fileError.innerHTML = (fileUploadSettings.fileTypeError);

        if (f.size >= fiveMegabytes) {
          fileError.innerHTML = (fileUploadSettings.fileSizeError)
        }
      }
    }

    window.removeFile = function (file) {
      file.parentNode.parentNode.querySelector(`.js-file`).value = "";
      file.parentNode.parentNode.querySelector(`.js-file`).dispatchEvent(new Event('change'));
      file.parentNode.remove();
    };
  });
}
