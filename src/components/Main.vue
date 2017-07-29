<template>
  <main id="container" class="flex flex-column">
    <header class="title-bar flex flex-row flex-center">
      <div class="title-wrapper block center-element">
        <h1>Infinite Days</h1> 
      </div>
    </header>
      <div class="flex flex-row flex-1 clear" v-if="user" >  
        <record-list :records="records.data"
          :findRecords="findRecords"
          :createRecord="createRecord"
          :patchRecord="patchRecord"/>
      </div>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import RecordList from './records'

export default {
  name: 'days-app',
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    ...mapGetters('records', {
      findRecordsInStore: 'find'
    }),
    records () {
      return this.findRecordsInStore({query: { $sort: {createdAt: 1} }})
    }
  },
  methods: {
    ...mapActions('records', {
      findRecords: 'find',
      createRecord: 'create',
      patchRecord: 'patch'
    }),
    ...mapActions('auth', [
      'logout'
    ])
  },
  created () {
    if (!this.user) {
      return this.$router.replace({name: 'Login'})
    }
    // Query Records from Feathers
    this.findRecords({
      query: {
        $sort: {createdAt: -1},
        $limit: 25
      }
    })
  },
  components: {
    RecordList
  }
}
</script>
