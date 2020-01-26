import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/index.scss';


const socket = io('http://localhost:3000/bot-chat');

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
