<template>
  <main id="app">
    <router-view></router-view>
  </main>
</template>

<script>
import '@/styles/base.css'
import '@/styles/days.css'
import '@/styles/medium-editor.min.css'
import '@/styles/flat.min.css'

export default {
  name: 'app',
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    user () {
      return this.$store.state.auth.user
    }
  },
  watch: {
    // When the user is set, redirect to the Records.
    user (newVal) {
      this.$router.replace({name: 'Main'})
    }
  },
  mounted () {
    this.$store.dispatch('auth/authenticate').catch(error => {
      if (!error.message.includes('Could not find stored JWT')) {
        console.error(error)
      }
    })
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
