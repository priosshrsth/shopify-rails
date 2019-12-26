const { environment } = require('@rails/webpacker');
const { VueLoaderPlugin } = require('vue-loader');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const vueLoader = require('./loaders/vueLoader');
const sassLoader = require('./loaders/sassLoader');

environment.loaders.prepend('sass', sassLoader);

environment.loaders.prepend('vue', vueLoader);

environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin());

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin());

const resolver = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};

environment.config.merge(resolver);

module.exports = environment;
