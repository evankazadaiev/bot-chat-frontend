<template>
  <div class="contacts-wrap">
    <div class="contact">
      <a class="contact_link" v-for="room in rooms" :key="room" @click="joinRoom(room)">
        <ContactUser :bot-id="room"/>
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

const ContactUser = () => import('@/components/ContactUser/');

@Component({
  name: 'ContactsSidebar',
  components: {
    ContactUser,
  },
})
export default class ContactsSidebar extends Vue {
  rooms = [];

  currentRoom = null;


  created() {
    this.$socket.client.emit('rooms');
  }

  joinRoom(roomId) {
    if (this.currentRoom) {
      this.$socket.client.emit('leave', this.currentRoom);
      this.$socket.client.removeAllListeners();
    }
    this.currentRoom = roomId;
    this.$socket.client.emit('join_room', roomId);
    this.$router.push({ path: `/chat/${roomId}` });
  }

  @Socket('rooms')
  onRooms(rooms) {
    this.rooms = rooms;
    this.$socket.client.emit('join_room', this.rooms[0]);
    this.$router.push({ path: `/chat/${this.rooms[0]}` });
  }
}
</script>

<style lang="scss" scoped>
</style>
