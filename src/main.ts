import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import App from './App.vue';
import router from './router';

import '@/assets/styles/index.scss';

import CONFIG from './config/index';

const socket = io(CONFIG.VUE_APP_BOT_CHAT_URL);

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
