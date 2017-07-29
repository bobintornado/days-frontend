<template>
  <div class='footerActions'>
    <form class="flex flex-row" id="send-message" v-on:submit.prevent>
      <button class="button-primary" type="submit" @click="addRecord">Pick A Day</button>
      <button class="button-primary" type="submit" @click="addRecord">Record Today!</button>
      <button class="button-primary" type="submit" @click="logout">Log out</button>
      <caption> Current User {{ user.email }} </caption>
    </form>
  </div>
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

<style scoped>

.footerActions {
  margin-bottom: 20px;
}
</style>
