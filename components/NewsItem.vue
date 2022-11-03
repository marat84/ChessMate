<template>
  <article :class="['news-item', {'news-item--inner' : isInner}, {'news-item--first' : isFirst}, {'news-item--mini' : isMini}]">
    <span class="news-item__inner-hr" v-show="isInner && !isFirst"></span>
    <div>
      <h3 class="news-item__title">
        <nuxt-link :to="localePath('/news' + '/' + data.id)" class="news-item__link">
          Непомнящий остался на третьем месте в рейтинге FIDE
        </nuxt-link>
      </h3>
      <p class="news-item__desc">Узбекский шахматист Джавахир Синдаров остался на третьем месте в рейтинге ФИДЕ</p>
      <time class="news-item__date">08.11.2021</time>
    </div>
    <img class="news-item__img" :src="data['image']" alt="news-1">
  </article>
</template>

<script>
export default {
  props: {
    data: Object,
    isInner: Boolean,
    isFirst: Boolean,
    isMini: Boolean,
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

  &--inner {
    border-top: none;
    padding-top: 0;

    & .news-item__img {
      order: -1;
      margin-top: 0;
      margin-bottom: rem(32);
    }

    .news-item__title {
      margin-top: rem(24);
    }
  }

  &--mini {
    .news-item__title {
      font-weight: 600;
      font-size: rem(24);
      line-height: 1.33;
      max-width: none;
    }

    .news-item__date,
    .news-item__desc {
      font-size: rem(18);
      line-height: 1.33;
      max-width: none;
    }
  }

  &--first {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: rem(72);

    .news-item__title {
      margin-top: 0;
    }

    & > div {
      width: 50%;
    }

    .news-item__img {
      flex-grow: 1;
      width: 50%;
      object-fit: cover;
      margin-right: rem(24);
      margin-bottom: 0;
    }

    .news-item__title {
      max-width: none;
      font-weight: 700;
      font-size: rem(56);
      line-height: 1.29;
      margin-bottom: rem(24);
    }

    .news-item__desc {
      font-size: rem(32);
      line-height: 1.25;
    }
  }
}

.news-item__inner-hr {
  display: block;
  width: 100%;
  height: 1px;
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
  width: 100%;
  object-fit: cover;
  margin-top: rem(32);
  opacity: 0.8;
  transition: opacity var(--animation);

  .news-item:hover & {
    opacity: 1;
  }
}
</style>
