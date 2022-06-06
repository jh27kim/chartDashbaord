import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import { store } from './store/index'

createApp(App).use(store).mount('#app')


// new Vue({
//     store: store
// }).$mount('#app')