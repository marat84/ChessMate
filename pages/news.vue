<template>
  <section class="about-section g-container-wide">
    <h2 class="inner-title mb-80">Новости</h2>
    <ul class="dlist pl-0 news-inner-list">
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
      news: [
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
          id: 2,
          image: '/images/news-1.jpg',
        },
        {
          id: 3,
          image: '/images/news-2.jpg',
        },
      ]
    }
  }
}
</script>
