<template>
  <div class="contacts-wrap">
    <div class="contact">
      <button class="contact_link" v-for="room in rooms" :key="room" @click="joinRoom(room)">
        <ContactUser :bot-id="room"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

const ContactUser = () => import('../ContactUser/index.vue');

@Component({
  name: 'ContactsSidebar',
  components: {
    ContactUser,
  },
})
export default class ContactsSidebar extends Vue {
  rooms: string[] = [];

  currentRoom = '';


  created() {
    this.$socket.client.emit('rooms');
  }

  joinRoom(roomId: string) {
    if (this.currentRoom) {
      this.$socket.client.emit('leave', this.currentRoom);
      this.$socket.client.removeAllListeners();
    }
    this.currentRoom = roomId;
    this.$socket.client.emit('join_room', roomId);
    this.$router.push({ path: `/chat/${roomId}` });
  }

  @Socket('rooms')
  onRooms(rooms: string[]) {
    this.rooms = rooms;
    this.$socket.client.emit('join_room', this.rooms[0]);
    this.$router.push({ path: `/chat/${this.rooms[0]}` });
  }
}
</script>

<style lang="scss" scoped>
  .contact_link {
    width: 100%;
    height: auto;
    padding: 0;
    border: 0;
    outline: 0;
  }
</style>
