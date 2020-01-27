<template>
  <div class="chat-block">
    <div class="blocked-wrap">
      <div style="position: relative">
        <div class="chat">
          <WithSpinner :condition="isLoading">
            <Message v-for="(message, index) in reversedMessages" :message="message" :key="index"/>
          </WithSpinner>
        </div>
      </div>
      <ChatInput @onSendMessage="onSendMessage"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { Socket } from 'vue-socket.io-extended';
import WithSpinner from '@/components/withSpinner/index.vue';

const Message = () => import('../Message/index.vue');
const ChatInput = () => import('../ChatInput/index.vue');

interface Message {
  message: string,
  timestamp: object,
  isBot: boolean
}

@Component({
  name: 'MessagingWindow',
  components: {
    Message,
    ChatInput,
    WithSpinner,
  },
})
export default class MessagingWindow extends Vue {
  messages: Message[] = [];

  isLoading = true;

  @Watch('$route.path')
  onRoutePathChanged() {
    this.isLoading = true;
  }

  get reversedMessages() {
    const messages = [...this.messages];
    return messages.reverse();
  }

  onSendMessage(message: Message) {
    this.messages.push(message);
  }

  @Socket('join_room')
  onJoinRoom(data: Message[]) {
    this.isLoading = true;
    this.messages = data;
    this.isLoading = false;
  }

  @Socket('message')
  onMessage(message: Message) {
    this.messages.push(message);
  }
}
</script>

<style scoped>

</style>
