<template>
  <form class="flex flex-row flex-space-between" id="send-message" v-on:submit.prevent>
    <input type="text" name="content" class="flex flex-1" v-model="newMessage">
    <button class="button-primary" type="submit" @click="addMessage">Send</button>
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
      // Create a new message and then clear the input field
      this.createRecord({content: this.newMessage}).then(this.clearMessage)
    },
    clearMessage () {
      this.newMessage = ''
    }
  }
}
</script>
