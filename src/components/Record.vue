<template>
  <div>
    <div class="record flex flex-row" :id="record._id">
      <div class="flex flex-column col col-2 formattedDate">
        {{ formattedDateWeekday }} <br/> {{ formattedDate }}
      </div>
      <div class="flex flex-column col col-10">
        <!-- <textarea v-model="record.content"></textarea> -->
        <medium-editor :text='record.content' :options='{ disableReturn: false }' custom-tag='h2' v-on:edit='applyTextEdit' :reuse-medium-editor-instance="false" class='medium-editor'>
        </medium-editor>
      </div>
    </div>
    <hr>
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
    formattedDateWeekday () {
      return format(this.record.createdAt, 'dddd')
    },
    formattedDate () {
      return format(this.record.createdAt, 'MMM Do, YYYY')
    }
  },
  methods: {
    applyTextEdit (operation) {
      let event = operation.event
      let target = event.target || event.srcElement
      this.patchRecord([this.record._id, { ...this.record, content: target.innerHTML }])
    }
  },
  components: {
    'medium-editor': editor
  }
}
</script>

<style scoped>

.formattedDate {
  font-family: 'Pacifico';
  font-size: 25px;
  padding: 16px;
  line-height: 40px;
}

.record {
  margin: 8px auto;
}

.medium-editor {
  font-size: 20px;
  line-height: 4px;
}

</style>
