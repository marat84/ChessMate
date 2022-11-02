<template>
  <a :data-src="href" :class="className" :data-fancybox="dataFancybox" :data-caption="dataCaption">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    className: String,
    dataFancybox: String,
    dataCaption: String,
  }
}
</script>
