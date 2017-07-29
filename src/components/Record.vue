<template>
  <div class="record flex flex-row">
    <div class="flex flex-column col col-2">
      {{ formattedDate }}
    </div>
    <div class="flex flex-column col col-10">
      <textarea v-model="record.content"></textarea>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns/esm'
import autosize from 'autosize'

export default {
  props: {
    record: Object,
    patchRecord: Function
  },
  computed: {
    formattedDate () {
      return format(this.record.createdAt, 'MMM Do')
    }
  },
  mounted () {
    autosize(this.$el.querySelector('textarea'))
  },
  watch: {
    'record.content': function (content) {
      this.patchRecord([this.record._id, {content: content}])
      autosize(this.$el.querySelector('textarea'))
    }
  }
}
</script>
