<template>
  <form class="flex flex-row flex-space-between" id="send-message" v-on:submit.prevent>
    <button class="button-primary" type="submit" @click="addRecord">Add Today</button>
  </form>
</template>

<script>
export default {
  name: 'RecordComposer',
  props: {
    createRecord: Function
  },
  methods: {
    addRecord () {
      this.createRecord({content: 'new day!', createdAt: new Date()})
    }
  }
}
</script>
