<template>
  <div class="news-inner-wrap g-container-wide">
    <section class="news-inner-section">
      <h2 class="inner-title max-width-80 text-left">{{ news[`title_${$utils.reLang()}`] }}</h2>

      <div class="inner-content">
        <img :src="news.image" alt="Новости">
        <div v-html="news[`content_${$utils.reLang()}`]"></div>
      </div>
    </section>
    <aside class="news-aside">
      <h3 class="inner-title-mini">{{ $t('otherNews') }}</h3>

      <ul class="dlist pl-0 aside-news-list">
        <li v-for="item in others" :key="item.id">
          <NewsItem :data="item" :isInner="true" :isMini="true"></NewsItem>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id);
  },

  data() {
    return {
      /*asideNews: [
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
      ]*/
    }
  },

  async fetch({store, params}) {
    await store.dispatch('newsDetail/fetch', {id: params.id});
  },

  computed: {
    id() {
      return this.$route.params.id;
    },

    news() {
      return this.$store.getters['newsDetail/getData'].article;
    },

    others(){
      return this.$store.getters['newsDetail/getData'].other;
    }
  }
}
</script>
