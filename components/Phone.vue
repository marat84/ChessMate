<template>
  <a :href="'tel:'+removeSpace(phone)">{{ this.$utils.formatPhone(phone) }}</a>
</template>

<script>
export default {
  props: {
    phone: String,
  },

  methods: {
    removeSpace(v) {
      return v.replace(/\s/g, '');
    }
  }
}
</script>
