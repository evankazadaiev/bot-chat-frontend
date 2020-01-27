import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'chat',
    component: () => import('@/views/Chat.vue'),
    children: [
      {
        path: '/chat/:roomId',
        name: 'ChatMessagesWindow',
        component: () => import('@/components/MessagingWindow/MessagingWindow.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
