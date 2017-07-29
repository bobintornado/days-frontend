<template>
  <div class="record flex flex-row" :id="record._id">
    <div class="flex flex-column col col-2">
      {{ formattedDate }}
    </div>
    <div class="flex flex-column col col-10">
      <!-- <textarea v-model="record.content"></textarea> -->
      <medium-editor :text='record.content' :options='{ disableReturn: false }' custom-tag='h2' v-on:edit='applyTextEdit' :reuse-medium-editor-instance="false">
      </medium-editor>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns/esm'
// import autosize from 'autosize'
import editor from 'vue2-medium-editor'

export default {
  props: {
    record: Object,
    patchRecord: Function
  },
  computed: {
    formattedDate () {
      return format(this.record.createdAt, 'MMM Do, YYYY')
    }
  },
  methods: {
    applyTextEdit (operation) {
      let content = operation.event.srcElement.innerHTML
      this.patchRecord([this.record._id, { ...this.record, content: content }])
    }
  },
  components: {
    'medium-editor': editor
  }
}
</script>
