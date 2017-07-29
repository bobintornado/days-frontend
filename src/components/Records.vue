<template>
  <div id='list' class="flex flex-column col col-10">
    <main class="chat flex-1 clear">
      <single-record v-for="record in records" :key="record._id" :record="record" :patchRecord="patchRecord" v-cloak />
    </main>
  </div>
</template>

<script>
import SingleRecord from './Record.vue'
import ComposeMessage from './Composer.vue'

export default {
  name: 'record-list',
  data () {
    return {
      // TODO: Fix the placeholder
      placeholder: 'PLACEHOLDER',
      first_load: true
    }
  },
  props: {
    records: Array,
    findRecords: Function,
    createRecord: Function,
    patchRecord: Function
  },
  components: {
    ComposeMessage,
    SingleRecord
  },
  updated () {
    if (this.first_load) {
      document.body.scrollTop = document.body.scrollHeight
      this.first_load = false
    }
  }
}
</script>
