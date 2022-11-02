<template>
  <ul :class="'dlist inners-sliders-controls pl-0' + ' ' + addClass">
    <li class="prev">
      <button class="inners-sliders-controls__btn" type="button">
        <span class="visually-hidden">Previously</span>
        <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.17996 15.68C0.851677 15.3521 0.667034 14.9073 0.666626 14.4433V13.5566C0.672002 13.0937 0.855897 12.6507 1.17996 12.32L13.1733 0.349981C13.3924 0.129116 13.6905 0.00488281 14.0016 0.00488281C14.3127 0.00488281 14.6109 0.129116 14.83 0.349981L16.4866 2.00665C16.7061 2.2217 16.8298 2.51604 16.8298 2.82331C16.8298 3.13059 16.7061 3.42493 16.4866 3.63998L6.10329 14L16.4866 24.36C16.7075 24.579 16.8317 24.8772 16.8317 25.1883C16.8317 25.4994 16.7075 25.7976 16.4866 26.0167L14.83 27.65C14.6109 27.8708 14.3127 27.9951 14.0016 27.9951C13.6905 27.9951 13.3924 27.8708 13.1733 27.65L1.17996 15.68Z" fill="#0D0D0D"/>
        </svg>
      </button>
    </li>
    <li class="next">
      <button class="inners-sliders-controls__btn" type="button">
        <span class="visually-hidden">Next</span>
        <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.82 15.68C16.1483 15.3521 16.333 14.9073 16.3334 14.4433V13.5566C16.328 13.0937 16.1441 12.6507 15.82 12.32L3.82671 0.349981C3.60765 0.129116 3.30945 0.00488281 2.99837 0.00488281C2.6873 0.00488281 2.3891 0.129116 2.17004 0.349981L0.513374 2.00665C0.293891 2.2217 0.170208 2.51604 0.170208 2.82331C0.170208 3.13059 0.293891 3.42493 0.513374 3.63998L10.8967 14L0.513374 24.36C0.292509 24.579 0.168276 24.8772 0.168276 25.1883C0.168276 25.4994 0.292509 25.7976 0.513374 26.0167L2.17004 27.65C2.3891 27.8708 2.6873 27.9951 2.99837 27.9951C3.30945 27.9951 3.60765 27.8708 3.82671 27.65L15.82 15.68Z" fill="#0D0D0D"/>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    addClass: String,
    color: String,
    height: {
      type: Number,
      default: 0,
    },
    current: Number,
    total: Number,
  }
}
</script>

<style lang="scss">
.inners-sliders-controls {
  position: relative;
  width: 100%;
  margin-top: rem(80);
  display: flex;
  align-items: center;
  transition: all var(--animation);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: rem(200);
    width: 100%;
    height: 2px;
    background-color: #3E4142;
  }

  & > li {
    flex-shrink: 0;
    margin: 0 rem(8);
    pointer-events: all;

    &:first-child {
      margin-left: 0;
    }
  }
}

.inners-sliders-controls__btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  width: rem(96);
  height: rem(96);
  transition: all var(--animation);

  &:hover {
    background-color: darken(white, 20%);
  }

  &:active {
    transform: scale(0.85);
  }
}
</style>
