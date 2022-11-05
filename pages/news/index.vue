<template>
  <section class="about-section g-container-wide">
    <h2 class="inner-title mb-80">{{ $t('nav6') }}</h2>
    <ul class="dlist pl-0 news-inner-list" v-if="news">
      <li v-for="(item, index) in news" :key="item.id">
        <NewsItem :data="item" :isInner="true" :isFirst="index === 0"></NewsItem>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      /*news: [
        {
          id: 1,
          image: '/images/inner-news-1.jpg'
        },
        {
          id: 2,
          image: '/images/news-1.jpg',
        },
        {
          id: 3,
          image: '/images/news-2.jpg',
        },
        {
          id: 4,
          image: '/images/news-1.jpg',
        },
        {
          id: 5,
          image: '/images/news-2.jpg',
        },
      ]*/
    }
  },

  async fetch() {
    if (this.$store.getters['news/getData']?.length === 0)
      await this.$store.dispatch('news/fetch');
  },

  computed: {
    news() {
      return this.$store.getters['news/getData'];
    },

    error() {
      return this.$store.getters['news/getError'];
    }
  },

  watch: {
    error(e) {
      this.$errorHandler(e);
    }
  }
}
</script>
