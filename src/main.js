import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index'
import router from "./router";

import "bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";


const app = createApp(App)
app.component()
app.use(router)
app.use(store)
app.mount("#app")
