<template>
  <div class="chat-block">
    <div class="blocked-wrap">
      <div style="position: relative">
        <div class="chat">
          <Message v-for="(message, index) in reversedMessages" :message="message" :key="index"/>
        </div>
      </div>
      <ChatInput @onSendMessage="onSendMessage"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

const Message = () => import('./Message');
const ChatInput = () => import('./ChatInput');

@Component({
  name: 'MessagingWindow',
  components: {
    Message,
    ChatInput,
  },
})
export default class MessagingWindow extends Vue {
  messages = [];

  get reversedMessages() {
    const messages = [...this.messages];
    return messages.reverse();
  }

  onSendMessage(message) {
    this.messages.push(message);
  }

  @Socket('join_room')
  onJoinRoom(data) {
    this.messages = data;
  }

  @Socket('message')
  onMessage(message) {
    this.messages.push(message);
  }
}
</script>

<style scoped>

</style>
