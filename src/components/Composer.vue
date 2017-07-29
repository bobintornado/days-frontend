<template>
  <form class="flex flex-row flex-space-between" id="send-message" v-on:submit.prevent>
    <button class="button-primary" type="submit" @click="addRecord">Record Today!</button>
    <button class="button-primary" type="submit" @click="logout">Log out</button>
    <span>Login in as: {{ user.email }} </span>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'RecordComposer',
  props: {
    createRecord: Function
  },
  computed: {
    ...mapState('auth', [
      'user'
    ])
  },
  methods: {
    addRecord () {
      this.createRecord({content: 'new day!', createdAt: new Date()})
    },
    ...mapActions('auth', [
      'logout'
    ])
  }
}
</script>
