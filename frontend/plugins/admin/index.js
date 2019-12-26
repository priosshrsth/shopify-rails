import axios from '../axios'
import '../turbolink'
import Vue from 'vue'

Vue.$axios = axios;
window.axios = axios;
Vue.prototype.$axios = axios
