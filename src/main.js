// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import '@/api/feathers-client'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  methods: {
    handleScroll (e) {
      let body = document.querySelector('body')
      let bottomDistance = body.scrollHeight - body.scrollTop - body.clientHeight

      if (bottomDistance < 25) {
        this.$store.dispatch('records/find', {
          query: {
            $sort: {createdAt: -1},
            $limit: 25,
            $skip: this.$store.state.records.ids.length
          }
        })
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
})
