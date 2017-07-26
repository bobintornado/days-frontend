<template>
  <div class="flex flex-column col col-9">
    <main class="chat flex flex-column flex-1 clear">
      <single-record v-for="record in records" key="record._id" :record="record" v-cloak />
    </main>
  </div>
</template>

<script>
import SingleRecord from './Record.vue'
export default {
  name: 'Record-list',
  data () {
  },
  props: {
    records: Array,
    findRecords: Function,
    createRecords: Function
  },
  components: {
    SingleRecord
  }
}
</script>
