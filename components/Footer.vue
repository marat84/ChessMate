<template>
  <footer class="footer">
    <div class="g-container-wide">
      <div class="footer__top-wrap">
        <HeaderNav :isFooter="true"></HeaderNav>

        <div class="footer-info-wrap">
          <Phone :phone="'+99897 000 00 00'"></Phone>
          <a href="mailto:help@chess-tashkent.uz">help@chess-tashkent.uz</a>
        </div>
      </div>
    </div>
    <div class="footer__mid-wrap g-container-wide">
      <a class="footer-hokimligi" href="https://www.tashkent.uz/" target="_blank">
        <img src="/images/hokimligi.png" :alt="$t('altHokimligi')" width="43" height="46" class="disabled-theme">
        <img src="/images/hokimligi.svg" aria-hidden="true" :alt="$t('hokimligiSite')" width="45" height="36">
      </a>
      <a class="footer-departament" href="https://digitaltashkent.uz/" target="_blank">
        <img src="/images/dep-logo.svg" :alt="$t('altDepartament')" width="53" height="46">
        <p class="footer-departament__text mb-0">
          <span>{{ $t("footerText4") }}</span>
          <span>{{ $t("footerText5") }}</span>
        </p>
      </a>
    </div>
    <p class="footer__bottom mb-0 g-container-wide">
      При полном или частичном использовании и цитировании материалов, опубликованных на сайте
      <a href="https:// сhess.tashkent.uz" target="_blank" rel="nofollow">сhess.tashkent.uz</a>
      , ссылка обязательна
    </p>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: rem(120);
  padding-top: rem(48);
}

.footer__top-wrap {
  display: flex;
  justify-content: space-between;
}

.footer-info-wrap {
  font-weight: 500;
  font-size: rem(18);
  display: grid;
  grid-gap: rem(24);

  & a {
    &:hover {
      opacity: 0.6;
    }
  }
}

.footer__bottom {
  margin-bottom: 0;
  font-weight: 400;
  font-size: rem(18);
  line-height: 1.33;
  color: #909197;
  background-color: #191919;
  text-align: center;
  padding-top: rem(8);
  padding-bottom: rem(8);
  margin-top: rem(48);

  & > a {
    border-bottom: 0.5px solid darken(white, 30%);
    padding-bottom: 1px;
    color: darken(white, 30%);

    &:hover {
      color: darken(white, 40%);
      border-bottom: 0.5px solid darken(white, 40%);
      text-decoration: none;
    }
  }
}

.footer__mid-wrap {
  display: flex;
  align-items: center;
  margin-top: rem(48);
}

.footer-hokimligi {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: rem(8);
  margin-right: var(--space-35);

  &:hover {
    opacity: 0.6;
  }
}

.footer-departament {
  font-weight: 600;
  font-size: rem(12);
  line-height: 1.33;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: rem(8);
  align-items: center;
  color: var(--white);

  &:hover {
    color: var(--white);
    text-decoration: none;
    opacity: 0.6;
  }
}


.footer-copyright,
.footer-departament__text {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  font-size: rem(12);
  line-height: 1.3;
  transition: all var(--animation);
  overflow: hidden;
  white-space: nowrap;
}
</style>
