<template>
  <div id='list' class="flex flex-column col col-12">
    <record-composer :createRecord="createRecord"/>
    <main class="chat flex-1 clear">
      <single-record v-for="record in records" :key="record._id" :record="record" :patchRecord="patchRecord" v-cloak />
    </main>
  </div>
  
</template>

<script>
import SingleRecord from './Record.vue'
import RecordComposer from './Composer.vue'

export default {
  name: 'record-list',
  props: {
    records: Array,
    findRecords: Function,
    createRecord: Function,
    patchRecord: Function
  },
  components: {
    RecordComposer,
    SingleRecord
  }
}
</script>
