<template>
  <chat-container>
    <template v-slot:sidebar>
      <contacts-sidebar/>
    </template>
    <template v-slot:messages>
      <router-view></router-view>
    </template>
  </chat-container>
</template>

<script>
const ChatContainer = () => import('../components/ChatContainer');
const ContactsSidebar = () => import('../components/ContactsSidebar');

export default {
  name: 'home',
  components: {
    ChatContainer,
    ContactsSidebar,
  },
};
</script>
