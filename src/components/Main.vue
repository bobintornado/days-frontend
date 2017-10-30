<template>
  <main id="container" class="">
    <header class="flex flex-row flex-1 clear">
      <div class="flex flex-column col col-2 text-left">
        <button class="button-primary" type="submit" @click="addTodayRecord">Record Today</button>
      </div>
      <div class="flex flex-column col col-8 text-center">
        <h1>INFINITE DAYS</h1>
      </div>
      <div class="flex flex-column col col-2 text-right">
        <button class="button-primary" type="submit" @click="logout">Log out</button>
      </div>
    </header>
    <hr/>
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
import RecordList from './Records.vue'
import moment from 'moment'

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
      return this.findRecordsInStore({query: { $sort: {createdAt: -1} }})
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
    ]),
    addTodayRecord () {
      const today = moment(new Date()).startOf('day')
      this.createRecord({content: 'new day!', createdAt: today})
    }
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

<style scoped>

#container {
  margin: 16px;
}

h1 {
  font-size: 3em;
}
</style>
