<template>
  <div class="chat-form">
    <form action="">
      <div class="textarea-wrap">
        <textarea v-model="text" placeholder="Text"></textarea>
      </div>
      <div class="textarea-count-wrap">
        <div class="checkbox-wrap">
          <label @click="sendMessage"><span>Press Enter to send</span></label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChatInput',
  data: () => ({
    text: '',
  }),
  methods: {
    sendMessage() {
      const timestamp = new Date().toUTCString();
      const message = {
        message: this.text,
        timestamp,
        isBot: false,
      };
      const { roomId } = this.$route.params;
      // const roomId = 'ivan';
      this.$emit('onSendMessage', message);
      this.$socket.client.emit('message', { roomId, message });
      this.text = '';
    },
  },
};
</script>

<style scoped>

</style>
