<template>
  <div id='list' class="flex flex-column col col-10">
    <main class="chat flex-1 clear">
      <single-record v-for="record in records" :key="record._id" :record="record" :patchRecord="patchRecord" v-cloak />
    </main>
    <record-composer :createRecord="createRecord"/>
  </div>
  
</template>

<script>
import SingleRecord from './Record.vue'
import RecordComposer from './Composer.vue'

export default {
  name: 'record-list',
  data () {
    return {
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
    RecordComposer,
    SingleRecord
  },
  updated () {
    // scroll down once only
    if (this.first_load) {
      // work with chrome first
      // firefox second
      // document.documentElement.scrollTop = document.documentElement.scrollHeight
      document.body.scrollTop = document.body.scrollHeight
      this.first_load = false
    }
  }
}
</script>
