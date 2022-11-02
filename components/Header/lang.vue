<template>
  <div class="lang-wrap">
    <span class="lang-current">{{ currentLang }}</span>
    <ul class="dlist lang-list pl-0">
      <li v-if="this.$i18n.locale !== 'ru'">
        <nuxt-link :to="switchLocalePath('ru')" class="lang-list__link" lang="ru">русский</nuxt-link>
      </li>
      <li v-if="this.$i18n.locale !== 'uz'">
        <nuxt-link :to="switchLocalePath('uz')" class="lang-list__link" lang="uz">o‘zbekcha</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    currentLang() {
      let currentLang = 'русский';

      if (this.$i18n.locale === 'uz')
        currentLang = 'o‘zbekcha';

      return currentLang
    }
  },
}
</script>

<style lang="scss">
.lang-wrap {
  position: relative;
  z-index: 5;
  margin-left: auto;
  min-width: rem(92);
  text-align: right;

  &:hover .lang-current::after {
    transform: rotateX(180deg);
    margin-top: -8px;
  }

  @media #{$md-and-down} {
    order: -1;
    display: flex;
    align-items: center;
    margin-bottom: rem(30);
    border-bottom: 2px solid rgba(white, 0.3);
  }
}

.lang-list:focus-within,
.lang-wrap:hover .lang-list {
  pointer-events: all;
  opacity: 1;
  transform: translateY(0) translateX(-50%);
}

.lang-current {
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding-top: rem(18);
  padding-right: rem(20);
  padding-bottom: rem(18);
  cursor: default;
  text-decoration: none;
  font-weight: 400;
  font-size: rem(16);
  line-height: 1.33;
  z-index: 0;
  color: var(--white);
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    z-index: -2;
    width: 12px;
    height: 12px;
    margin-top: -3px;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.87998 1.29006L5.99998 5.17006L2.11998 1.29006C1.72998 0.900059 1.09998 0.900059 0.70998 1.29006C0.31998 1.68006 0.31998 2.31006 0.70998 2.70006L5.29998 7.29006C5.68998 7.68006 6.31998 7.68006 6.70998 7.29006L11.3 2.70006C11.69 2.31006 11.69 1.68006 11.3 1.29006C10.91 0.910059 10.27 0.900059 9.87998 1.29006Z' fill='white'/%3E%3C/svg%3E%0A");
    transition: all var(--animation);
  }

  @media #{$md-and-down} {
    font-size: 18px;
    padding: 20px;
    font-weight: 900;
    color: var(--orange);

    &::after {
      display: none;
    }
  }
}

.lang-list {
  position: absolute;
  top: 90%;
  left: 50%;
  background-color: var(--gray);
  border-radius: 8px;
  overflow: hidden;
  transform: translateY(#{rem(20)}) translateX(-50%);
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 0px 2px rgba(33, 33, 33, 0.16), 0px 16px 32px -4px rgba(33, 33, 33, 0.16);
  z-index: 100;
  transition: all 0.3s;

  & button,
  & a {
    color: var(--white);
    font-size: rem(14);
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 6px 12px;
    width: 100%;
    transition: all var(--animation);
    border: 2px solid #4D4D4D;
    border-bottom: 1px solid #4D4D4D;
    border-top: 1px solid #4D4D4D;

    body:not(.using-mouse) &:focus,
    &:hover,
    &[href]:hover {
      text-decoration: none;
      background-color: #4D4D4D;
    }

    body:not(.using-mouse) &:focus {
      outline: 5px auto #fff;
    }

    @media #{$md-and-down} {
      font-size: 18px;
      padding: 20px;
    }
  }

  & > li:first-child {
    & a {
      border-radius: 8px;
      border: 2px solid #4D4D4D;
    }
  }

  /*& > li:first-child {
    & a {
      border-radius: 8px 8px 0 0;
      border-top: 2px solid #4D4D4D;
    }
  }

  & > li:last-child {
    & a {
      border-radius: 0 0 8px 8px;
      border-bottom: 2px solid #4D4D4D;
    }
  }*/

  @media #{$md-and-down} {
    display: flex;
    align-items: center;
    position: static;
    opacity: 1;
    overflow: visible;
    pointer-events: all;
    transform: translateY(0) translateX(-50%);
    background: none;
    box-shadow: 0 0 0 1px rgba(black, 0.1);
  }
}

.mobile-lang-wrap {
  & .lang-current {
    color: var(--black);
    font-weight: 600;
  }
}
</style>
