import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(store).use(router).mount('#app')
