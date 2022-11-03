<template>
  <div class="main-page-wrap">
    <div class="video-wrap">
      <video class="video" id="main-video" width="1920" height="1080" muted loop playsinline autoplay aria-hidden="true" data-id="part-0">
        <source src="/video/main.webm" type="video/webm">
        <source src="/video/main.mp4" type="video/mp4">
        К сожалению, ваш браузер не поддерживает встроенные видео.
      </video>
      <p class="main-video-text">
        <span>TASHKENT OPEN</span>
        <br>
        международный шахматный турнир
      </p>
      <div class="main-marquee-text-wrap">
        <marquee-text :repeat="5">
          6-7 ноября гостиница hilton&nbsp;
        </marquee-text>
      </div>
    </div>

    <MainPageSeason class="mb-95"></MainPageSeason>

    <section class="section-news g-container-wideLeft">
      <h2 class="main-section-title">Новости</h2>

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

    <section class="section-partners g-container-wide mb-95">
      <h2 class="main-section-title">НАШИ партнеры</h2>
      <Partners :data="partners"></Partners>
    </section>

    <section class="section-news g-container-wideLeft">
      <h2 class="main-section-title">Фотогалерея</h2>

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
      },
      optionsGallery: {
        items: 3,
        fixedWidth: 686,
        rewind: true,
        nav: false,
      },

      news: [
        {
          id: 1,
          image: '/images/news-1.jpg',
        },
        {
          id: 2,
          image: '/images/news-2.jpg',
        },
        {
          id: 3,
          image: '/images/news-1.jpg',
        },
        {
          id: 4,
          image: '/images/news-2.jpg',
        },
      ],

      gallery: [
        {
          id: 1,
          image: '/images/gallery-1.png',
        },
        {
          id: 2,
          image: '/images/gallery-2.png',
        },
        {
          id: 3,
          image: '/images/gallery-1.png',
        },
        {
          id: 4,
          image: '/images/gallery-2.png',
        },
        {
          id: 5,
          image: '/images/gallery-1.png',
        },
      ]
    }
  },

  computed: {
    partners() {
      return this.$store.getters['partners/getData'];
    }
  }
}
</script>

<style lang="scss">

</style>
