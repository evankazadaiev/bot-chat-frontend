<template>
  <div class="chat-form">
    <form action="">
      <div class="textarea-wrap">
        <textarea v-model="text" placeholder="Text"></textarea>
      </div>
      <div class="textarea-count-wrap">
        <div class="checkbox-wrap">
          <button @click="sendMessage">Press Enter to send</button>
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
      if (this.text.length > 4) {
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .textarea-count-wrap {
    button {
      outline: 0;
      border: 0;
      background: transparent;
    }
  }
</style>
