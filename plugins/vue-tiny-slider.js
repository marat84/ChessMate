import Vue from 'vue'
import vTinySlider from 'vue-tiny-slider'
const VueTinySlider = {
  install(Vue, options) {
    Vue.component('VueTinySlider', vTinySlider)
  }
};
import 'tiny-slider/dist/tiny-slider.css';

Vue.use(VueTinySlider);
