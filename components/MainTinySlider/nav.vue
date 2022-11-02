<template>
  <ul :class="'dlist inner-tiny-slider-container pl-0' + ' ' + navClass" :style="{'height':height + 'px'}" v-show="loading">
    <li v-for="item in total" :key="item">
      <button type="button" class="inner-tiny-slider-container__btn">
        <span class="visually-hidden">Go to slider number {{ item }}</span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navClass: String,
    height: {
      type: Number,
      default: 0,
    },
    total: Number,
  },
  data() {
    return {
      loading: false,
    }
  },
  watch: {
    height(e) {
      if (e)
        this.loading = true;
    }
  }
}
</script>

<style lang="scss">
.inner-tiny-slider-container {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 6;
  pointer-events: none;
  transition: all var(--animation);

  & > li {
    flex-shrink: 0;
    margin: rem(24) rem(8);
    pointer-events: all;
  }
}

.inner-tiny-slider-container__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: rem(12);
  height: rem(12);
  border-radius: rem(12);
  transition: all var(--animation);

  &:hover {
    box-shadow: 0 0 0 rem(4) rgba(white, 0.2);
  }

  &:active {
    transform: scale(0.85);
  }

  .tns-nav-active & {
    box-shadow: 0 0 0 rem(6) rgba(white, 0.2);
  }
}
</style>
