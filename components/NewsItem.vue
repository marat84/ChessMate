<template>
  <article class="news-item">
    <h3 class="news-item__title">
      <nuxt-link :to="'/'" class="news-item__link">
        Непомнящий остался на третьем месте в рейтинге FIDE
      </nuxt-link>
    </h3>
    <p class="news-item__desc">Узбекский шахматист Джавахир Синдаров остался на третьем месте в рейтинге ФИДЕ</p>
    <time class="news-item__date">08.11.2021</time>
    <img class="news-item__img" :src="data['image']" alt="news-1">
  </article>
</template>

<script>
export default {
  props: {
    data: Object,
  }
}
</script>

<style lang="scss">
.news-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: rem(32);
  border-top: 2px solid #3E4142;
}

.news-item__link {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }
}

.news-item__title {
  font-weight: 600;
  font-size: rem(32);
  line-height: 1.25;
  margin-bottom: rem(16);
  max-width: 80%;

  @media #{$lg-and-down} {
    max-width: none;
  }
}

.news-item__desc {
  font-weight: 400;
  font-size: rem(24);
  line-height: 1.33;
  color: #999999;
  max-width: 90%;

  @media #{$lg-and-down} {
    max-width: none;
  }
}

.news-item__date {
  font-weight: 400;
  font-size: rem(20);
  line-height: 1.2;
}

.news-item__img {
  display: block;
  margin-top: rem(32);
  opacity: 0.8;
  transition: opacity var(--animation);

  .news-item:hover & {
    opacity: 1;
  }
}
</style>
