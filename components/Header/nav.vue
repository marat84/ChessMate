<template>
  <nav class="nav">
    <ul class="dlist pl-0 nav-list" :class="{'nav-list--footer' : isFooter}">
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/about')" tabindex="0">
          {{ $t('nav1') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/lists/qualifying')" tabindex="0">
          {{ $t('nav2') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/rules')" tabindex="0">
          {{ $t('nav3') }}
        </nuxt-link>
      </li>
      <li :class="{'mr-0' : !isFooter}">
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/prize')" tabindex="0">
          {{ $t('nav4') }}
        </nuxt-link>
      </li>

      <li class="nav-list__logo-wrap" v-if="!isFooter && !$vuetify.breakpoint.smAndDown">
        <HeaderLogo></HeaderLogo>
      </li>

      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/winners')" tabindex="0">
          {{ $t('nav5') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/news')" tabindex="0">
          {{ $t('nav6') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list__link" active-class="nav-list__link--active" :to="localePath('/feedback')" tabindex="0">
          {{ $t('nav7') }}
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

  @media #{$smAndDown} {
    width: 100%;
    flex-grow: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding-top: 24px;
    padding-bottom: 32px;
  }
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
    //width: vw(1000);
    display: grid;
    grid-auto-flow: column;
    /*grid-template-columns: repeat(4, 1fr);*/
    grid-gap: rem(10);

    & > li {
      margin-right: 0;
    }
  }

  @media #{$smAndDown} {
    flex-direction: column;
    align-items: flex-start;

    & > li {
      margin-right: 0;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
}

.nav-list__link {
  font-weight: 500;
  font-size: rem(18);
  line-height: 1.33;

  &:hover {
    opacity: 0.6;
  }

  &--active {
    padding-bottom: 4px;
    border-bottom: 1px solid var(--yellow);

    &:hover {
      opacity: 1;
    }
  }

  @media #{$smAndDown} {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
}

.nav-list__logo-wrap {
  margin: 0 auto;
}
</style>
