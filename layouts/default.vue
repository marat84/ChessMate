<template>
  <v-app class="main-wrap">
    <div class="content-wrap" :class="{'content-wrap--lights' : forLights}" v-if="mountPage">
      <Header></Header>
      <article class="main-article">
        <Nuxt></Nuxt>
      </article>
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      mountPage: false,
    }
  },
  computed: {
    mainPage() {
      return (this.$route.name?.includes('index___') && !this.$nuxt.nuxt?.err);
    },
    forLights() {
      return (
          this.$route.path.indexOf('feedback') > 0 && !this.$nuxt.nuxt?.err
      );
    },
    noFooter() {
      return (
          (this.$route.name?.includes('index___') || this.$route.path.indexOf('contact') > 0) && !this.$nuxt.nuxt?.err
      );
    }
  },
  /*async fetch() {
    if (Object.keys(this.$store.getters.getData).length === 0) {
      await this.$store.dispatch('fetch');
    }
  },*/
  methods: {
    fancyLoad() {
      window.fancybox.Fancybox.defaults.placeFocusBack = false;
      // window.fancybox.Fancybox.defaults.Hash = false;
      window.fancybox.Fancybox.defaults.Thumbs = false;
      window.fancybox.Fancybox.defaults.l10n = {
        CLOSE: this.$t('fancyBox.CLOSE'),
        NEXT: this.$t('fancyBox.NEXT'),
        PREV: this.$t('fancyBox.PREV'),
        MODAL: this.$t('fancyBox.MODAL'),
        ERROR: this.$t('fancyBox.ERROR'),
        IMAGE_ERROR: this.$t('fancyBox.IMAGE_ERROR'),
        TOGGLE_THUMBS: this.$t('fancyBox.TOGGLE_THUMBS'),
        TOGGLE_FULLSCREEN: this.$t('fancyBox.TOGGLE_FULLSCREEN'),
        TOGGLE_SLIDESHOW: this.$t('fancyBox.TOGGLE_SLIDESHOW'),
        TOGGLE_ZOOM: this.$t('fancyBox.TOGGLE_ZOOM'),
        ELEMENT_NOT_FOUND: this.$t('fancyBox.ELEMENT_NOT_FOUND'),
        AJAX_NOT_FOUND: this.$t('fancyBox.AJAX_NOT_FOUND'),
        AJAX_FORBIDDEN: this.$t('fancyBox.AJAX_FORBIDDEN'),
        IFRAME_ERROR: this.$t('fancyBox.IFRAME_ERROR'),
      };
    },
  },
  mounted() {
    this.mountPage = true;
    this.fancyLoad();
  },
  watch: {
    '$i18n.locale'() {
      this.fancyLoad();
    }
  }
}
</script>

<style lang="scss">
.content-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;

  &--lights::after,
  &--lights::before {
    content: "";
    position: fixed;
    top: 20%;
    right: rem(-120);
    width: rem(240);
    height: rem(240);
    border-radius: rem(240);
    background-color: #A6875B;
    z-index: -2;
    filter: blur(144px);

    @media #{$smAndDown} {
      display: none;
    }
  }

   &--lights::after {
     top: 70%;
     right: auto;
     left: rem(-120);
   }
}

.main-article {
  flex-grow: 1;
}
</style>
