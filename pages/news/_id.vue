<template>
  <div class="news-inner-wrap g-container-wide">
    <section class="news-inner-section">
      <h2 class="inner-title max-width-80 text-left">Непомнящий остался на третьем месте в рейтинге FIDE</h2>

      <div class="inner-content">
        <img src="/images/inner-news-content-1.jpg" alt="Новости" width="1112" height="683">
        <p>
          Равным образом реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности способствует подготовки и реализации форм развития. Равным образом рамки и место обучения кадров позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.
        </p>

        <p>
          Товарищи! рамки и место обучения кадров в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.
        </p>

        <img src="/images/inner-news-content-2.jpg" alt="Новости" width="1112" height="683">
      </div>
    </section>
    <aside class="news-aside">
      <h3 class="inner-title-mini">{{ $t('otherNews') }}</h3>

      <ul class="dlist pl-0 aside-news-list">
        <li v-for="item in asideNews" :key="item.id">
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
      asideNews: [
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
      ]
    }
  },

  computed: {
    id() {
      return this.$route.params.id;
    }
  }
}
</script>
