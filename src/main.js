import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index'
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")

// createApp(App).use(store).mount('#app')

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app');
