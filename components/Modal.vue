<template>
  <div class="wrap-modal">
    <h4 class="modal-title" v-if="title">{{ title }}</h4>
    <div class="g-container inner-modal-content" :class="{'loading-active':loading}">
      <transition name="fadeHeight" mode="out-in">
        <div class="loading-wrap" v-if="loading">
          <Loading></Loading>
        </div>
      </transition>
      <div class="modal-body-wrap" :class="{'loading-active':loading, 'remove-loading':remove}">
        <slot></slot>
      </div>
    </div>
    <button type="button" @click="$nuxt.$emit(eventName)" class="close-modal" :title="$t('close')">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--white)" aria-hidden="true" focusable="false"><path d="M.94.94a1.5 1.5 0 012.12 0L10 7.878l6.94-6.94a1.5 1.5 0 012.12 2.122L12.122 10l6.94 6.94a1.5 1.5 0 01-2.122 2.12L10 12.122l-6.94 6.94a1.5 1.5 0 01-2.12-2.122L7.878 10 .939 3.06a1.5 1.5 0 010-2.12z"/></svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    eventName: {
      type: String,
      required: true,
    },
    loading: Boolean,
    remove: Boolean,
    fetching: Boolean
  }
}
</script>

<style lang="scss">
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all ease-in-out 0.6s;
  max-height: 80vh;
}

.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0;
}

.inner-modal-content {
  transition: all 0.6s ease-in-out 0.55s;

  &.loading-active {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.modal-body-wrap {
  overflow: hidden;
  max-height: 80vh;
  transition: all 0.7s ease-in-out 0.6s;

  &.loading-active {
    max-height: 0;
  }

  &.remove-loading {
    max-height: none;
    overflow: inherit;
  }

  @media #{$smAndDown} {
    padding-top: 20px;
  }
}

.loading-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap-modal {
  position: relative;
  background-color: rgba(57, 57, 57, 0.8);
  color: var(--white);
  padding: vw(32);

  @media #{$xsOnly} {
    padding: 15px;
  }
}

.close-modal {
  position: absolute;
  right: rem(18);
  top: rem(18);
  opacity: 0.6;
  line-height: 0;
  padding: 0;
  transition: all var(--animation);

  &:hover {
    transform: rotateZ(180deg) scale(1.2);
    opacity: 1;
  }

  &--position {
    top: 8px;
    right: 8px;
  }
}

.modal-title {
  font-weight: 500;
  font-size: rem(24);
  line-height: 1.33;
  color: var(--white);
}

.modal-hr {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.24);
  margin-top: vh(16);
  margin-bottom: vh(16);
}
</style>
