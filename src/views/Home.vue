<template>
  <div class="background">
    <a-row :gutter="12" style="margin: 12px">
      <a-col :span="24">

      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  test: string = 'testing';
  change(){
    this.test = 'another'
  }

}
</script>
<style>
.background{
  background-image: url("../assets/img0.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 90vh;
}
</style>
