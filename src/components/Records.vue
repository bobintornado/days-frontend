<template>
  <div class="flex flex-column col col-9">
    <!-- <ComposeMessage :createRecord="createRecord" /> -->
    <main class="chat flex flex-column flex-1 clear">
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
      placeholder: 'PLACEHOLDER'
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
  }
}
</script>
