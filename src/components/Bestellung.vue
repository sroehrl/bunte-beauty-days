<template>
  <section v-if="steps.length>0">
    <a-steps :current="currentStep">
      <a-step v-for="(step,i) in steps" :key="i"
              :status="currentStep>i?'finish':(currentStep === i ? 'progress' : 'wait')">
        <a-icon slot="icon" :type="step.icon"/>
        <span slot="title">{{ step.title }}</span>
      </a-step>
    </a-steps>
    <div class="m-y-4">
      <AreaSelection @selected="process" v-if="currentStep===0"/>
      <Walls @selected="process" :area="areaSelection" v-if="currentStep===1"/>
      <StyleSelection @selected="process" :area="areaSelection" v-if="currentStep===2"/>
      <a-result
          v-if="currentStep===3"
          status="success"
          title="Geschafft!"
          sub-title="Ihre Anfrage wird schnellstmöglich verarbeitet. Bald werden Sie eine E-Mail erhalten!"
      >
        <template #extra>
          <a-button @click="step=0" key="console" type="primary">
            Auswahl ändern
          </a-button>
          <router-link to="/">
            <a-button key="buy">
              Homepage
            </a-button>
          </router-link>
        </template>
      </a-result>
    </div>

    <a-progress :percent="percentage" status="active" :show-info="false"/>
    <h1 v-if="step<3" class="font-xl">Schritt {{ currentStep + 1 }}/3</h1>
  </section>

</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import AreaSelection from '@/components/AreaSelection.vue';
import Walls from '@/components/Walls.vue';
import StyleSelection from "@/components/StyleSelection.vue";

interface step {
  icon: String,
  title: String
}

interface returnEvent {
  area?: object
}

@Component({
  components: {
    AreaSelection,
    Walls,
    StyleSelection
  }
})
export default class Bestellung extends Vue {
  private step: number = 0;

  private areaSelection: object = {};

  get currentStep() {
    return this.step || 0;
  }

  private steps: Array<step> = [
    {
      icon: 'border-inner',
      title: 'Fläche auswählen'
    },
    {
      icon: 'code-sandbox',
      title: 'Wand & Traversen'
    },
    {
      icon: 'shop',
      title: 'Choose your Style'
    },
  ];

  process(ev: returnEvent) {
    console.log(ev)
    if (typeof ev.area !== 'undefined') {
      this.areaSelection = ev.area;
    }
    this.step++;
  }

  get percentage() {
    return (this.currentStep + 1) / this.steps.length * 100
  }
}
</script>

<style scoped>

</style>
