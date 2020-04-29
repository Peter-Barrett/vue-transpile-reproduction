import Vue from 'vue'
import wrap from '@vue/web-component-wrapper';
import App from './App.vue'

Vue.config.productionTip = false

const WrappedElement = wrap(Vue, App);

window.customElements.define('test-player', WrappedElement);
