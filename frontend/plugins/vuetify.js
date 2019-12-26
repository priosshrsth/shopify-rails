import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

import { icons as fontAwesomeIcons, fontAwesomeDom } from './fontawesome'
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
  customVariables: ['../../assets/stylesheets/variables.scss'],
  options: {
    customProperties: true,
  },
  iconfont: ['md', 'faSvg'],
  icons: fontAwesomeIcons,
})

fontAwesomeDom.watch()
