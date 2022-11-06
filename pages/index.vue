<template>
  <div class="main-page-wrap">
    <div class="video-wrap">
      <video class="video" id="main-video" width="1920" height="1080" muted loop playsinline autoplay aria-hidden="true" data-id="part-0" ref="video">
        <source src="/video/main.webm" type="video/webm">
        <source src="/video/main.mp4" type="video/mp4">
        {{ $t('mainText1') }}
      </video>
      <p class="main-video-text" v-html="$t('mainText2')">
      </p>
      <div class="main-marquee-text-wrap">
        <marquee-text :repeat="5">
          {{ $t('mainText3') + '\xa0' }}
        </marquee-text>
      </div>
    </div>

    <MainPageSeason class="mb-95"></MainPageSeason>

    <section class="section-news news-slider-main g-container-wideLeft" v-if="news && news.length">
      <h2 class="main-section-title">{{ $t('nav6') }}</h2>

      <MainTinySlider
          :options="{...options, controlsContainer: '.js-slider-control-container' + 1}"
          :addClass="'js-slider-control-container' + 1"
          :contents="news"
      >
        <template v-slot:default="slotProps">
          <NewsItem :data="slotProps.item"></NewsItem>
        </template>
      </MainTinySlider>

    </section>

    <section class="section-partners g-container-wide mb-95" v-if="partners && partners.length">
      <h2 class="main-section-title">{{ $t('mainText4') }}</h2>
      <Partners :data="partners"></Partners>
    </section>

    <section class="section-news g-container-wideLeft" v-if="gallery && gallery.length">
      <h2 class="main-section-title">{{ $t('mainText5') }}</h2>

      <MainTinySlider
          :options="{...optionsGallery, controlsContainer: '.js-slider-control-container' + 2}"
          :addClass="'js-slider-control-container' + 2"
          :contents="gallery"
      >
        <template v-slot:default="slotProps">
          <article>
            <h3 class="visually-hidden">gallery-{{ slotProps.item.id }}</h3>
            <FancyBox
                :href="slotProps.item.image"
                className="gallery-image-box"
                :dataFancybox="'gallery-image-box'"
            >
              <img :src="slotProps.item.image" :alt="'gallery-' + slotProps.item.id">
            </FancyBox>
          </article>
        </template>
      </MainTinySlider>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        items: 3,
        fixedWidth: 686,
        rewind: true,
        nav: false,
        responsive: {
          2300: {
            items: 2,
            fixedWidth: false,
            gutter: 50
          },
          1300: {
            items: 3,
            fixedWidth: 686,
          },
          700: {
            items: 2,
            fixedWidth: 400,
          },
          320: {
            items: 1,
            fixedWidth: false,
          },
        }
      },
      optionsGallery: {
        items: 3,
        fixedWidth: 686,
        rewind: true,
        nav: false,
        responsive: {
          2400: {
            items: 4,
            fixedWidth: false,
            gutter: 50
          },
          2000: {
            items: 3,
            fixedWidth: false,
            gutter: 50
          },
          1300: {
            items: 3,
            fixedWidth: 686,
          },
          700: {
            items: 2,
            fixedWidth: 300,
          },
          320: {
            items: 2,
            fixedWidth: 200,
          },
        }
      },
    }
  },

  async fetch() {
    if (this.$store.getters['news/getData']?.length === 0)
      await this.$store.dispatch('news/fetch');

    if (this.$store.getters['partners/getData']?.length === 0)
      await this.$store.dispatch('partners/fetch');

    if (this.$store.getters['gallery/getData']?.length === 0)
      await this.$store.dispatch('gallery/fetch');
  },

  computed: {
    partners() {
      return this.$store.getters['partners/getData'];
    },

    news() {
      return this.$store.getters['news/getData'];
    },

    gallery() {
      return this.$store.getters['gallery/getData'];
    },

    newsError() {
      return this.$store.getters['news/getError']
    }
  },

  watch: {
    newsError(e) {
      this.$errorHandler(e);
    }
  },

  mounted() {
    this.$refs.video.play();
  }
}
</script>

<style lang="scss">

</style>
