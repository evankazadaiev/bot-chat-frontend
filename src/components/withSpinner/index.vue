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
    height: 100%;
  }
</style>
