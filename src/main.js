import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Pastikan file router sudah ada dan dikonfigurasi dengan benar
import { Quasar } from 'quasar'; // Import Quasar secara langsung dari paketnya
import '@quasar/extras/material-icons/material-icons.css'; // Import stylesheet untuk material icons
import 'quasar/dist/quasar.css'; // Import stylesheet Quasar

createApp(App)
  .use(router)
  .use(Quasar)
  .mount('#app');
