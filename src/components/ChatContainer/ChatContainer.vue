<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="chat-wrap">
            <slot name="sidebar"></slot>
            <slot name="messages"></slot>
          </div>
        </div>
        <Label/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Label = () => import('../Label/Label.vue');

@Component({
  name: 'ChatContainer',
  components: {
    Label,
  },
})
export default class ChatContainer extends Vue {

}
</script>

<style scoped>

</style>
