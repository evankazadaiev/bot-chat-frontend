<template>
  <div class="contact-user" :class="{ active: isActive }">
    <div class="contact-user-foto">
      <a href=""><img src="" alt=""></a>
    </div>
    <div class="contact-user-info">
      <div class="contact-user-top">
        <a href="" class="contact-user-name">
          {{ botId }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUser',
  data: () => ({
    rooms: [],
  }),
  props: {
    botId: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    isActive() {
      return this.$route.params.roomId === this.botId;
    },
  },
};
</script>

<style scoped>

</style>
