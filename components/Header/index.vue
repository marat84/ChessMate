<template>
  <header class="header g-container">
    <HeaderLogo v-if="$vuetify.breakpoint.smAndDown"></HeaderLogo>
    <button @click.prevent="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown" class="mobile-menu-nav ml-4">
      <transition name="fade-scale" mode="out-in">
        <svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!drawer" :key="1">
          <path d="M1 1h16M1 7h16M1 13h16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="#fff" aria-hidden="true" focusable="false" v-else :key="2">
          <path d="M.94.94a1.5 1.5 0 012.12 0L10 7.878l6.94-6.94a1.5 1.5 0 012.12 2.122L12.122 10l6.94 6.94a1.5 1.5 0 01-2.122 2.12L10 12.122l-6.94 6.94a1.5 1.5 0 01-2.12-2.122L7.878 10 .939 3.06a1.5 1.5 0 010-2.12z"/>
        </svg>
      </transition>
    </button>
    <v-navigation-drawer
        v-model="drawer"
        :fixed="$vuetify.breakpoint.smAndDown"
        :permanent="!$vuetify.breakpoint.smAndDown"
        :width="'100vw'"
        right
        hide-overlay
        tag="div"
        height="calc(100% - var(--header-height))"
    >
      <h1 class="visually-hidden">{{ $t('title') }}</h1>
      <HeaderNav></HeaderNav>
      <HeaderLang></HeaderLang>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  height: var(--header-height);
  display: flex;
  align-items: center;
  z-index: 5;

  @media #{$smAndDown} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    background-color: #0f1111;
  }
}
</style>
