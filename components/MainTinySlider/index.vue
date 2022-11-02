<template>
  <div class="inner-slider-wrap">
    <transition name="fade">
      <div v-if="initialized">

        <!--        <InnerTinySliderNav
                    :navClass="navClass"
                    :height="imageHeight"
                    :total="contents.length"
                    v-if="options.nav"
                ></InnerTinySliderNav>-->

        <!--        <InnerTinySliderCounter :current="current" :total="contents.length"></InnerTinySliderCounter>-->

        <vue-tiny-slider v-bind="localOptions" ref="slider" @indexChanged="changeSlider" :onInit="init">
          <div
              v-for="(content, index) in contents"
              :key="content.id"
          >
            <slot :item="content">
              slider by {{ index }}
              <br>
              content:
              <pre>{{ content }}</pre>
            </slot>
          </div>
        </vue-tiny-slider>
        <MainTinySliderControls
            :addClass="addClass"
            :color="color"
            :height="imageHeight"
            :current="current"
            :total="contents.length"
        ></MainTinySliderControls>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
    contents: Array,
    addClass: {
      type: String,
      default: '.js-slider-control-container',
    },
    navClass: {
      type: String,
      default: '.js-slider-nav-container',
    },
    color: {
      type: String,
      default: 'black',
    }
  },
  data() {
    return {
      current: 1,
      imageHeight: 0,
      initialized: false,
    }
  },
  computed: {
    localOptions() {
      let addOptions = {
        loop: false,
        mouseDrag: true,
        autoHeight: true,
        speed: 800,
        gutter: 25,
        controls: true,
        controlsText: ['prefv', 'next']
      };

      return {...addOptions, ...this.options}
    }
  },

  methods: {
    init(e) {
      if (e.slideItems[e.index].querySelector('img'))
        this.imageHeight = e.slideItems[e.index].querySelector('img').clientHeight;
    },
    changeSlider(e) {
      this.current = e.displayIndex;

      this.init(e);
    },
  },
  mounted() {
    this.initialized = true;
  }
}
</script>

<style lang="scss">
.inner-slider-wrap {
  position: relative;
  margin-bottom: rem(90);
}
</style>
