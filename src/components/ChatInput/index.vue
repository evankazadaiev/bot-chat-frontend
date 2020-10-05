<template>
  <div class="chat-form">
    <form action="">
      <div class="textarea-wrap">
        <textarea v-model="text" placeholder="Text"></textarea>
      </div>
      <span class="field-error" v-if="!isValid">Text should include 3 or more characters!</span>
      <div class="textarea-count-wrap">
        <div class="checkbox-wrap">
          <button @click="sendMessage">Press Enter to send</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'ChatInput',
})

export default class ChatInput extends Vue {
    text = '';

    isValid = true;

    sendMessage(e: UIEvent) {
      e.preventDefault();
      if (this.text.length >= 3) {
        this.isValid = true;
        const timestamp = new Date().toUTCString();
        const message = {
          message: this.text,
          timestamp,
          isBot: false,
        };
        const { roomId } = this.$route.params;
        this.$emit('onSendMessage', message);
        this.$socket.client.emit('message', { roomId, message });
        this.text = '';
      } else {
        this.isValid = false;
      }
    }
}
</script>

<style lang="scss" scoped>
  .textarea-count-wrap {
    button {
      outline: 0;
      background: transparent;
      border: 0.5px solid #ccc;
      padding: 5px;
    }
  }
  .field-error {
    font-size: 12px;
    color: red;
    display: block;
    text-align: left;
    margin: 5px 5px;
  }
</style>
