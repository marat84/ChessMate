<template>
  <div>
    <div class="member-tabs-wrap g-container-wide">
      <p class="inner-title-mini mb-0 mr-8" :class="{'gray-color' : isPro}">{{ $t('memberList17') }}</p>
      <v-tabs
          v-model="tab"
          background-color="transparent"
          slider-color="var(--yellow)"
          height="100%"
      >
        <v-tab
            v-for="item in tabsName"
            :key="item.id"
            :to="localePath('/lists' + item.link)"
            exact-active-class="tabs-member-active"
        >
          <div class="inner-title-mini mb-0">
            {{ item.name }}
          </div>
        </v-tab>
      </v-tabs>
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
        {id: 1, name: this.$t('memberList10'), link: '/'},
        {id: 2, name: this.$t('memberList11'), link: '/qualifying'},
        {id: 3, name: this.$t('memberList12'), link: '/pro'},
      ]
    }
  },

  computed: {
    isPro() {
      return this.$route.name?.includes('lists-pro___')
    }
  }
}
</script>

<style lang="scss">
.gray-color {
  opacity: 0.4;
}
</style>
