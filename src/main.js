import './assets/main.css'
import 'bootstrap'

import { createApp } from 'vue';
import App from './App.vue'; // Main app component
import router from './assets/router/index'; // Adjust path as needed

const app = createApp(App);
app.use(router); // Register the router
app.mount('#app'); // Mount the app to the DOM
