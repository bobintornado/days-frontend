<template>
  <div class='footerActions'>
    <form class="flex flex-row" id="send-message" v-on:submit.prevent>
      <button class="button-primary" type="submit" @click="pickDate">Pick A Day</button>
      <button class="button-primary" type="submit" @click="addTodayRecord">Record Today!</button>
      <button class="button-primary" type="submit" @click="logout">Log out</button>
      <caption> Current User {{ user.email }} </caption>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

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
    addTodayRecord () {
      const today = moment(new Date()).startOf('day')
      this.createRecord({content: 'new day!', createdAt: today})
    },
    ...mapActions('auth', [
      'logout'
    ]),
    pickDate () {
      console.log('this')
    }
  }
}
</script>

<style scoped>

.footerActions {
  margin-bottom: 20px;
}
</style>
