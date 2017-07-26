<template>
  <div class="record flex flex-row">
    <div class="record-wrapper">
      <p class="record-header">
        <span class="sent-date font-300">{{ formattedDate }}</span>
      </p>
      <p class="record-content font-300">{{ record.content }}</p>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns/esm'
export default {
  props: ['record', 'index'],
  computed: {
    formattedDate () {
      return format(this.record.date, 'MM/DD/YYYY')
    }
  }
}
</script>
