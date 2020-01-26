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

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const Label = () => import('@/components/Label');

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
