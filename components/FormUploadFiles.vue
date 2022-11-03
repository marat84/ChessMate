<template>
  <div class="js-upload-list">
    <!--    <p class="file-list-title"></p>    -->
    <ul class="dlist file-list pl-0" ref="fileRemoveWrap">
      <li class="js-upload-files" v-for="item in count">
        <div class="document-add">
          <input
              class="visually-hidden js-file"
              type="file"
              :data-fancybox-name="inputFileName"
              :name="inputFileName + item"
              accept="image/*"
              @change="$nuxt.$emit(changeEvent, $event.target)"
              :id="inputFileName + item"
          />

          <label class="document-add__label" :for="inputFileName + item">
            <!--            {{ $t('fileUpload16') }}-->
            <svg viewBox="0 0 36 36" width="40" height="40" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 18h33M18 1.5v33" stroke="#424A55" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        </div>
        <slot :counter="item"></slot>
      </li>
    </ul>
    <!--    <span class="modal-form__notice">{{ $t("fileUpload11") }}</span>-->
    <div class="js-file-errors form-notice-text" ref="fileErrors"></div>
  </div>
</template>

<script>
export default {
  props: {
    inputFileName: String,
    count: Number,
    changeEvent: String,
  }
}
</script>

<style lang="scss">
.document-add {
  //margin-top: 0 !important;
  margin: auto;
}

.document-add__label {
  //max-width: calc(var(--size-file));
  height: rem(162);
  border: 1px dashed #9EA8AA;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #D8DBE2;
  font-weight: 400;
  font-size: rem(18);
  line-height: em(22, 18);;
  transition: all var(--animation);

  & svg {
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    & svg {
      transform: scale(1.4) rotateZ(180deg);
      transition: all 0.4s ease-in-out;
    }
  }
}

.file-list {
  --size-file: #{rem(162)};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--size-file), 1fr));
  //display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: rem(16);
  margin-bottom: 10px;

  & > li {
    position: relative;
  }

  @media (max-width: 768px) {
    //grid-gap: 15px;
  }
}

.file-item {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: rem(162);
  border: 2px dashed #b1b1b1;
  padding: 2px;
  pointer-events: none;

  & img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    max-width: none;
    display: block;
    margin: auto;
    object-fit: cover;
    border-radius: inherit;
  }
}

.file-list__link {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s;
  z-index: 5;
  pointer-events: all;

  &--left {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: rgba(black, 0.3);
  }

  &--right {
    padding: 0;
    right: 1px;
    top: 1px;
    cursor: pointer;
    opacity: 1;

    & svg {
      width: 28px;
      height: 28px;
      fill: var(--red);
    }
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
  }
}

.form-notice-text {
  & > * {
    color: red;
    font-size: rem(14);
    border-radius: 4px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-weight: 500;
  }
}

body:not(.using-mouse) input[type="file"]:focus + label {
  box-shadow: inset 0 0 0 2px #000, 0 0 0 2px #fff;
}

.modal-form__notice {
  //position: absolute;
  //top: 100%;
  display: inline-block;
  font-weight: normal;
  font-size: rem(14);
  font-style: italic;
  line-height: 1.5;
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;
  color: #B9B9B9;
}
</style>
