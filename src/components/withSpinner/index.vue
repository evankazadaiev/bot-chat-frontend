<template>
  <div class="content-wrapper">
    <slot v-if="!condition"/>
    <Spinner v-else></Spinner>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Spinner from '../Spinner/index.vue';

@Component({
  name: 'WithSpinner',
  components: {
    Spinner,
  },
})

export default class WithSpinner extends Vue {
    @Prop({ required: true })
    condition!: boolean;
}

</script>
<style lang="scss" scoped>
  .content-wrapper {
    margin: 0;
    background: linear-gradient(0.08deg, #607D8B 0.09%, #90A4AE 99.95%);
    overflow-x: hidden;
    overflow-y: auto;
    height: 656px;
    width: 100%;
    max-width: 100%;
    padding: 36px 24px 24px 24px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    border-bottom: 2px solid #F2F2F2;
    border-top: 2px solid #F2F2F2;
  }
</style>
