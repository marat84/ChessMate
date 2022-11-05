<template>
  <ol class="dlist pl-0 winners-list">
    <li v-for="(item, index) in data" :key="item.id" :class="{'gold-li' : item.notice}">
      <article class="winner-item">
        <div :class="['winner-item__number']">
          <span>{{ (item.notice) ? 1 : ++index }}</span>
        </div>
        <div class="winner-item__title-wrap">
          <h3 class="winner-item__title">{{ item.name }}</h3>
          <p class="winner-item__status mb-0">{{ item.notice }}</p>
        </div>
                <div class="winner-item__prize-wrap" v-if="$vuetify.breakpoint.mdAndUp">
                  <span class="winner-item__text">{{ $t('prizeText') }}</span>
                  <strong class="winner-item__prize">{{ item.prize }}</strong>
                </div>
      </article>
      <div class="winner-item__prize-wrap" v-if="$vuetify.breakpoint.smAndDown">
        <span class="winner-item__text">{{ $t('prizeText') }}</span>
        <strong class="winner-item__prize">{{ item.prize }}</strong>
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    data: Array,
  }
}
</script>

<style lang="scss">
.winners-list {
  & > li {
    margin-bottom: rem(24);

    &:last-child {
      margin-bottom: 0;
    }

    &.gold-li,
    &:nth-child(1) {
      .winner-item__number {
        color: #57462D;
        background: linear-gradient(0deg, #A6875B 0%, #FFEFA9 54.4%, #B08E4E 100%), #2E2E34;
      }
    }

    &:not(.gold-li):nth-child(2) {
      .winner-item__number {
        color: #162036;
        background: linear-gradient(360deg, #50596C 0%, #9EA7B8 54.4%, #4C5569 100%), #2E2E34;
      }
    }

    &:not(.gold-li):nth-child(3) {
      .winner-item__number {
        color: #311D2C;
        background: linear-gradient(360deg, #5C4548 0%, #C1A393 54.4%, #5A4447 100%), #2E2E34;
      }
    }
  }
}

.winner-item {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: rem(200);
  background-color: #181818;

  @media #{$smAndDown} {
    height: 80px;
  }
}

.winner-item__number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: rem(200);
  margin-left: rem(-80);
  height: rem(300);
  background-color: #2E2E34;
  color: var(--white);
  font-family: var(--f2);
  font-weight: 700;
  font-size: rem(80);
  line-height: 1;
  transform: rotateZ(18deg);
  flex-shrink: 0;
  margin-right: rem(35);

  & > span {
    display: inline-block;
    transform: rotateZ(-18deg);
    padding-left: rem(70);
  }

  @media #{$smAndDown} {
    font-size: 24px;
    width: 120px;
    margin-left: -65px;
    margin-right: 15px;
  }
}

.winner-item__title-wrap {
  margin-right: auto;
  margin-left: rem(50);

  @media #{$smAndDown} {
    margin-left: 15px;
  }
}

.winner-item__title {
  font-family: var(--f2);
  font-weight: 700;
  font-size: rem(48);
  line-height: 1;
  margin-bottom: rem(8);

  @media #{$smAndDown} {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 0;
    letter-spacing: 0.01em;
  }
}

.winner-item__status {
  @media #{$smAndDown} {
    font-size: 14px;
  }
}

.winner-item__prize-wrap {
  position: relative;
  font-family: var(--f2);
  font-weight: 700;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin-left: rem(100);
  width: rem(400);
  background-color: #2E2E34;
  z-index: 0;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: rem(-70);
    width: rem(140);
    height: 200%;
    z-index: -2;
    background-color: #2E2E34;
    transform: rotateZ(18deg);
  }

  @media #{$smAndDown} {
    height: 80px;
    margin-left: 0;
    width: 100%;
    padding-left: 85px;

    &::before {
      display: none;
    }
  }
}

.winner-item__text {
  font-size: rem(32);
  line-height: 1.5;

  @media #{$smAndDown} {
    font-size: 16px;
  }
}

.winner-item__prize {
  font-size: rem(64);
  line-height: 1;

  @media #{$smAndDown} {
    font-size: 24px;
  }
}
</style>
