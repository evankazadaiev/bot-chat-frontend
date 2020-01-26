<template>
  <div class="chat-message" :class="{ 'user-message': !message.isBot }">
    <div class="chat-message-foto">
      <a href=""><img src="" alt=""></a>
    </div>
    <div class="chat-message-text">
      {{ message.message }}
    </div>
    <div class="chat-message-time">{{ messageTime }}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Message',
  props: {
    message: Object,
  },
})
export default class Message extends Vue {
  get messageTime() {
    const fullDate = new Date(this.message.timestamp);
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const time = `${hours}:${minutes} ${amOrPm}`;
    return time;
  }
}
</script>

<style scoped>

</style>
