<template>
  <ul class="dlist pl-0 partners-list">
    <li v-for="item in data" :key="item.id">
      <article class="partner-item">
        <h3 class="visually-hidden">Хокимият города ташкент</h3>
        <img :src="item['icon']" :alt="'partner-' + item.id">
      </article>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array,
  }
}
</script>

<style lang="scss">
.partners-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: rem(45);

  & > li {

  }
}

.partner-item {
  border: 2px solid #3E4142;
  min-height: rem(280);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  filter: grayscale(100);
}
</style>
