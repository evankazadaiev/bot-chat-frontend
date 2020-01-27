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

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component({
    name: 'ContactUser',
  })

export default class ContactUser extends Vue {
  @Prop({ required: true })
  botId!: string;


  get isActive() {
    return this.$route.params.roomId === this.botId;
  }
}
</script>

<style scoped>

</style>
