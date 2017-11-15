<style scoped>

.formattedDate {
  font-family: 'Pacifico';
  font-size: 25px;
  line-height: 40px;
}

.record {
  margin: 8px auto;
}

</style>

<template>
  <div>
    <div class="record flex flex-row" :id="record._id">
      <div class="flex flex-column col col-2 formattedDate">
        {{ formattedDateWeekday }} <br/> {{ formattedDate }}
      </div>
      <div class="flex flex-column col col-10">
        <medium-editor :text='text' :options='editoptions' v-on:edit='applyTextEdit' :reuse-medium-editor-instance="false" class='medium-editor'>
        </medium-editor>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { format } from 'date-fns/esm'
import editor from 'vue2-medium-editor'

const options = {
  toolbar: {
    buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'quote', 'orderedlist', 'unorderedlist']
  }
}

export default {
  props: {
    record: Object,
    patchRecord: Function
  },
  data () {
    return {
      text: this.record.content,
      editoptions: options
    }
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
