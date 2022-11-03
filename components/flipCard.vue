<template>
  <div class="flip-card">
    <div class="flip-card__content">
      <section class="flip-card__front">
        <slot name="front"></slot>
      </section>
      <section class="flip-card__back">
        <slot name="back"></slot>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.flip-card {
  width: 100%;
  height: rem(420);
  perspective: 1000px;

  &:hover {
    .flip-card__front {
      z-index: -5;
      backface-visibility: hidden;
    }

    .flip-card__content {
      transform: rotateY(180deg);
      transition: transform 0.5s;
    }
  }

}

.flip-card__content {
  position: absolute;
  width: 100%;
  height: 100%;

  transition: transform 1s;
  transform-style: preserve-3d;
}

.flip-card__front,
.flip-card__back {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.flip-card__back {
  transform: rotateY(180deg);
}
</style>
