<template>
  <div v-show="total > 1">
    <span class="inner-current-slider">{{ current }} / {{ total }}</span>
  </div>
</template>

<script>
export default {
  props: {
    current: Number,
    total: Number,
  }
}
</script>
