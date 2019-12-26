<template>
  <v-app v-bind="theme">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>{{ drawer ? 'menu_open' : 'menu' }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web_asset</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>{{ rightDrawer ? 'menu_open' : 'menu' }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <slot>
          <router-view ref="content" v-bind="{...pageData, ...flashData}" :key="$route.fullPath"/>
        </slot>
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right" class="cursor-pointer">
          <v-list-item-action>
            <v-icon light>
              repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-switch color="primary" v-model="dark"/>
          </v-list-item-action>
          <v-list-item-title>{{ dark ? 'Dark Theme' : 'Light Theme' }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Layout',
    props: {
    },
    data() {
      return {
        dark: false,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          {
            icon: 'apps',
            title: 'Welcome',
            to: '/admin',
          },
          {
            icon: 'bubble_chart',
            title: 'Inspire',
            to: '/admin/about'
          },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
      }
    },
    watch: {
      dark(isDark) {
        this.$vuetify.theme.dark = isDark
      }
    },
    computed: {
      title() {
        return this.$route.meta.title
      },
      theme() {
        return this.dark ? {dark: true, light: false} : {light: true, dark: false}
      },
      pageData() {
        try {
          return JSON.parse(this.$attrs.data)
        } catch (e) {
          return {}
        }
      },
      flashData() {
        try {
          return JSON.parse(this.$attrs.flash)
        } catch (e) {
          return {}
        }
      }
    },
    methods: {
      changeTheme(isDark) {
        this.dark = isDark
        this.$vuetify.theme.dark = isDark
      },
    }
  }
</script>

<style lang="scss">
  .cursor-pointer {
    cursor: pointer;
  }
</style>
