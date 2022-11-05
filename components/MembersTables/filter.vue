<template>
  <div>
    <div class="filter-wrap g-container-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="form-item-wrap filter-wrap__search">

        <slot name="search"></slot>

        <button type="button" class="form-item-in-button">
          <span class="visually-hidden">{{ $t('searchButton') }}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="filter-wrap__right">
        <slot name="select-1"></slot>
        <slot name="select-2"></slot>
        <slot name="select-3"></slot>
      </div>
    </div>

    <div v-else>

      <div class="mobile-filter-wrap">
        <div class="form-item-wrap filter-wrap__search">

          <slot name="search"></slot>

          <button type="button" class="form-item-in-button">
            <span class="visually-hidden">{{ $t('searchButton') }}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <button class="mobile-filter-button" type="button" @click="filterDialog = true">
          <span class="visually-hidden">Открыть фильтр</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_70_23718)">
              <path d="M3.00065 14.3335L6.33398 14.3335" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.33398 12.3335L6.33398 16.3335" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.99935 3.6665L7.66602 3.6665" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.66602 1.6665L7.66602 5.6665" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 9L9 9" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.667 7L11.667 11" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 14.3335L15 14.3335" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.6667 9L15 9" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.3333 3.6665L15 3.6665" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_70_23718">
                <rect width="18" height="18" fill="white" transform="translate(18) rotate(90)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <v-dialog
          v-model="filterDialog"
      >
        <Modal :eventName="filterEventName">
          <div class="filter-wrap">
            <div class="filter-wrap__right">
              <slot name="select-1"></slot>
              <slot name="select-2"></slot>
              <slot name="select-3"></slot>
            </div>
          </div>
        </Modal>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterDialog: false,
      filterEventName: 'closeDialog',
    }
  },

  created() {
    this.$nuxt.$on(this.filterEventName, () => {
      this.filterDialog = false;
    })
  },

  destroyed() {
    this.$nuxt.$off(this.filterEventName);
  }
}
</script>
