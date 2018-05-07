import 'babel-polyfill'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import feathersVuex from 'feathers-vuex'
import store from '@/store/'
import rx from 'feathers-reactive'
import RxJS from 'rxjs'

const socket = io('https://infinitedays.life', {transports: ['websocket']})

const feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))
  .configure(rx(RxJS, {idField: '_id'}))
  .configure(feathersVuex(store, {
    idField: '_id',
    auth: {
      userService: '/users'
    }
  }))

feathersClient.service('/users')
feathersClient.service('/records')
