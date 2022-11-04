<template>
  <ul class="dlist pl-0 prize-list" :class="[
      {'prize-list--count-7' : data.length === 7},
      {'prize-list--count-3' : (data.length > 2 && data.length < 4)},
      {'prize-list--count-5' : data.length === 5},
    ]">
    <li v-for="(item, index) in data" :key="item.id">
      <div class="prize-list__content-wrap">
        <span class="prize-list__header">{{ (item.notice) ? 1 : ++index }} {{ $t('challengeNumber') }} {{ item.notice }}</span>
        <strong class="prize-list__body">
          <span class="prize-color">{{ item.prize }}</span>
        </strong>
      </div>
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
.prize-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: rem(50);
  margin-bottom: rem(90);

  & > li {
    &:nth-child(1) {
      width: 100%;

      .prize-list__body {
        font-size: rem(112);
        line-height: 1;
        padding: rem(10) rem(135);
      }
    }
  }

  &--count-7 > li {
    &:last-child {
      width: 100%;
    }
  }

  &--count-3 > li {
    &:nth-child(3),
    &:nth-child(2) {
      .prize-list__body {
        padding: rem(10) rem(105);
      }
    }
  }

  &--count-5 > li {
    &:nth-child(3),
    &:nth-child(2) {
      .prize-list__body {
        padding: rem(10) rem(105);
      }
    }
  }
}

.prize-list__content-wrap {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.prize-list__header {
  width: 100%;
  font-family: var(--f2);
  font-weight: 700;
  font-size: rem(32);
  line-height: 1;
  color: #0F1111;
  padding: rem(16);
  border-radius: 6px 6px 0 0;
  background-color: var(--yellow);
  z-index: 0;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 1px;
    bottom: 20px;
    z-index: -2;
    background-image: linear-gradient(to bottom, var(--yellow), rgba(30, 30, 30, 0.56));
  }

  &::after {
    left: auto;
    right: 0;
  }
}

.prize-list__body {
  padding: rem(18);
  font-family: var(--f2);
  font-size: rem(72);
  line-height: 1;
  border-radius: 0 0 6px 6px;
  background-color: rgba(30, 30, 30, 0.56);
}
</style>
