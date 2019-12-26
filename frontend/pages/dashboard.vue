<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('images/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Shopify Market Place!
        </h1>
        <p class="subheading font-weight-regular">
          For managing the content in outside.tech
          <br />please visit out site @
          <a href="https://outside.tech" target="_blank">https://outside.tech</a>
        </p>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">User Info</h2>

        <v-layout justify-center>
          <span
              v-for="(value, attr, i) in user"
              :key="i"
              class="subheading mx-3 primary--text"
              target="_blank"
          >
            {{ attr }}: <span class="success--text">{{ value }}</span>
          </span>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
      }
    },
    data() {
      return {

      }
    },
  };
</script>
