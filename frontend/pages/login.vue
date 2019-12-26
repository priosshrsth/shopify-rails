<template>
  <v-app>
    <v-layout row wrap>
      <v-flex fill-height d-flex xs12 justify-center align-center :style="'background-image: url(' + asset('images/outside_tech.png') + ')'">
        <v-card shaped height="400" width="500" color="blue-grey" dark flat class="login-container">
          <v-card-title>Login</v-card-title>
          <v-card-subtitle>Please enter your credentials!</v-card-subtitle>
          <v-container>
            <v-form>
              <v-text-field outlined v-model="email" name="email" type="email" append-icon="email" label="Email" placeholder="example@example.com"></v-text-field>
              <v-text-field outlined v-model="password" name="password" type="password" label="Password" placeholder="password" :append-icon="showPassword ? 'visibility_off' : 'visibility'" @click:append="showPassword = !showPassword">
              </v-text-field>
              <v-card-actions>
                <v-btn @click.prevent="submit()">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
    name: "Login",
    props: {

    },
    data() {
      return {
        showPassword: false,
        email: '',
        password: '',
      }
    },
    methods: {
      async submit() {
        let self = this
        try {
          let response = await self.$axios.post('/admin/login', {
            email: self.email,
            password: self.password
          })
        } catch(e) {
          console.clear()
          console.log(e)
        }

      }
    }
  }
</script>

<style scoped>

</style>
