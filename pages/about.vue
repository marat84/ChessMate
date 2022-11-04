<template>
  <section class="about-section g-container">
    <div v-html="$t('aboutContent')">

    </div>

    <!--    <div class="mb-75">
          <AboutList></AboutList>
        </div>-->

    <section class="section-partners g-container-wide" v-if="partners && partners.length">
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

  async fetch() {
    if (this.$store.getters['partners/getData']?.length === 0)
      await this.$store.dispatch('partners/fetch');
  },

  computed: {
    partners() {
      return this.$store.getters['partners/getData'];
    }
  }
}
</script>
