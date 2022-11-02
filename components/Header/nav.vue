<template>
  <nav class="nav">
    <ul class="dlist pl-0 nav-list" :class="{'nav-list--footer' : isFooter}">
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/about')" tabindex="0">
          О турнире
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/list')" tabindex="0">
          Список участников
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/rules')" tabindex="0">
          Правила
        </nuxt-link>
      </li>
      <li :class="{'mr-0' : !isFooter}">
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/prize')" tabindex="0">
          Призовой фонд
        </nuxt-link>
      </li>

      <li class="nav-list__logo-wrap" v-if="!isFooter">
        <HeaderLogo></HeaderLogo>
      </li>

      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/winners')" tabindex="0">
          Победители
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/news')" tabindex="0">
          Новости
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/feedback')" tabindex="0">
          Обратная связь
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isFooter: Boolean,
  }
}
</script>

<style lang="scss">
.nav {
  flex-grow: 1;
}

.nav-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > li {
    margin-right: vw(24);

    &.nav-list__logo-wrap {
      margin-right: auto;
    }
  }

  &--footer {
    width: vw(1000);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: rem(24);
    & > li {
      margin-right: 0;
    }
  }
}

.nav-list__link {
  &:hover {
    opacity: 0.6;
  }
}

.nav-list__logo-wrap {
  margin: 0 auto;
}
</style>
