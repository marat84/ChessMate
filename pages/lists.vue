<template>
  <div>
    <div class="member-tabs-wrap g-container-wide">
      <p class="inner-title-mini mb-0 mr-8 member-tabs-wrap__title" :class="{'gray-color' : isPro}">{{ $t('memberList17') }}</p>
      <nuxt-link :to="localePath('/lists' + tab.link)" v-for="tab in tabsName" :key="tab.id" class="inner-title-mini tab-link-emulate" active-class="tab-link-emulate--active" :exact="tab.link === '/'">{{ tab.name }}</nuxt-link>
      <!--      <v-tabs
                v-model="tab"
                background-color="transparent"
                slider-color="var(&#45;&#45;yellow)"
                height="100%"
                :vertical="$vuetify.breakpoint.smAndDown"
            >
              <v-tab
                  v-for="item in tabsName"
                  :key="item.id"
                  :to="localePath('/lists' + item.link)"
                  exact-active-class="tabs-active"
              >
                <div class="inner-title-mini mb-0">
                  {{ item.name }}
                </div>
              </v-tab>
            </v-tabs>-->
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      update: false,

      tabsName: [
        {id: 1, name: this.$t('memberList11'), link: '/'},
        // {id: 2, name: this.$t('memberList11'), link: '/qualifying/'},
        {id: 3, name: this.$t('memberList12'), link: '/pro'},
      ]
    }
  },

  async fetch() {
    if (this.$store.getters['regions/getData']?.length === 0)
      await this.$store.dispatch('regions/fetch');

    if (this.$store.getters['country/getData']?.length === 0)
      await this.$store.dispatch('country/fetch');

    if (this.$store.getters['degree/getData']?.length === 0)
      await this.$store.dispatch('degree/fetch');
  },

  computed: {
    isPro() {
      return this.$route.name?.includes('lists-pro___')
    }
  },

  created() {
    this.$nuxt.$on('updateTab', (e) => {
      this.tab = e;
    })
  },

  destroyed() {
    this.$nuxt.$off('updateTab');
  }
}
</script>

<style lang="scss">
.gray-color {
  opacity: 0.4;
}
</style>
