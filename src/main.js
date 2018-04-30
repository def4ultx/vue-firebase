// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDuasdPmdLIwwSOA5iBQOxLCwT2-OOxuGU',
  authDomain: 'egco427-lecture-b7d52.firebaseapp.com',
  databaseURL: 'https://egco427-lecture-b7d52.firebaseio.com',
  projectId: 'egco427-lecture-b7d52',
  storageBucket: 'egco427-lecture-b7d52.appspot.com',
  messagingSenderId: '1026394021714'
}
firebase.initializeApp(config)
window.firebase = firebase
let app

/* eslint-disable no-new */

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
