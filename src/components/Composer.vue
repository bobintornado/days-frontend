<template>
  <form class="flex flex-row flex-space-between" id="send-message" v-on:submit.prevent>
    <button class="button-primary" type="submit" @click="addMessage">load early days</button>
  </form>
</template>

<script>
export default {
  name: 'MessageComposer',
  data () {
    return {
      newMessage: ''
    }
  },
  props: {
    createRecord: Function
  },
  methods: {
    addMessage () {
      this.$store.dispatch('records/find', {
        query: {
          $sort: {createdAt: -1},
          $limit: 25,
          $skip: this.$store.state.records.ids.length
        }
      })
    }
  }
}
</script>
