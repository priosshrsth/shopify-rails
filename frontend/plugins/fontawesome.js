import Vue from 'vue'
import { library as fontAwesomeLibrary, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* eslint-disable prettier/prettier */
import {
  faAddressBook,
  faAd,
} from '@fortawesome/free-solid-svg-icons';

fontAwesomeLibrary.add(faAddressBook, faAd)

Vue.component('fa-icon', FontAwesomeIcon)

export const icons = {
  addressbook: 'fas fa-address-book',
}

export const fontAwesomeDom = dom
