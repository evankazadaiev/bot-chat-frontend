<template>
  <ChatContainer>
    <template v-slot:sidebar>
      <ContactsSidebar/>
    </template>
    <template v-slot:messages>
      <router-view></router-view>
    </template>
  </ChatContainer>
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
