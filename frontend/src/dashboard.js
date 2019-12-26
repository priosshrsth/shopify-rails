// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import './application'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import '../plugins/admin'

import router from '../routes/route.js'
import store from "../stores";
import vuetify from "../plugins/vuetify";

// import { icons as fontAwesomeIcons, fontAwesomeDom } from '../plugins/fontawesome'
// import "vuetify/dist/vuetify.min.css"
// import '@mdi/font/css/materialdesignicons.css';
//
// Vue.use(Vuetify)

import App from '../App.vue';

Vue.prototype.$csrfToken = function() {
  return document.querySelector("meta[name='csrf-token']").getAttribute('content')
};

document.addEventListener('turbolinks:load', () => {
  var app = new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    components: {
      App,
    },
  })
});

Vue.mixin({
  asset(path) {
    try {
      return require(path);
    } catch (e) {

    }
  }
});


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
