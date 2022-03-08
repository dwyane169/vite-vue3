import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue'
import { Button, Col, Row } from 'vant';
import { usePlugins } from './plugins';
const app = createApp(App)

usePlugins(app);
app.use(createPinia());
app.use(router)
app.mount('#app')