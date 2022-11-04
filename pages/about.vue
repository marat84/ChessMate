<template>
  <section class="about-section g-container">
    <h2 class="inner-title">узнайте о турнире больше</h2>
    <p class="inner-desc mb-14">Равным образом сложившаяся структура организации
      <br>
      представляет собой интересный эксперимент проверки систем массового участия.
    </p>
    <div class="mb-70">
      <img class="about-img-center" src="/images/about-1.jpg" alt="Фото с турнира" width="1396" height="626">
    </div>
    <p class="sub-title-inner mb-12">
      Равным образом сложившаяся структура организации
      <br>
      представляет собой интересный эксперимент
      <br>
      проверки систем массового участия.
    </p>

    <p class="inner-text max-width-80 mb-16">
      Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки систем массового участия. С другой стороны постоянный количественный рост
      и сфера нашей активности в значительной степени обуславливает создание существенных финансовых и административных условий.
    </p>

    <div class="mb-75">
      <AboutList></AboutList>
    </div>

    <section class="section-partners g-container-wide">
      <h2 class="inner-title-mini">{{ $t('mainText4') }}</h2>
      <Partners :data="partners"></Partners>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    partners() {
      return this.$store.getters['partners/getData'];
    }
  }
}
</script>
