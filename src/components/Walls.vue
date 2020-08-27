<template>
  <a-row :gutter="24">
    <a-col span="12">
      <div>
        <img style="max-width: 80%" :src="prints[selectedPrint].img">
      </div>
      <a-icon type="arrow-down"/>
      Print Auswahl mit dem Slider
      <a-slider v-model="slider" :step="50" :tip-formatter="steps"/>
      <div style="min-height: 200px">
        <a-descriptions :title="prints[selectedPrint].title" layout="vertical">
          <a-descriptions-item label="Beschreibung">
            {{ prints[selectedPrint].description }}
          </a-descriptions-item>
          <a-descriptions-item label="Maße">
            {{ prints[selectedPrint].dimensions }}
          </a-descriptions-item>
          <a-descriptions-item label="Preis">
            + <strong>€{{ prints[selectedPrint].price }}</strong>
          </a-descriptions-item>
        </a-descriptions>
      </div>

    </a-col>
    <a-col span="12">
      <h3>Traverse?</h3>
      <p>
        4-Punkt Traversensystem (z.B. Global oder Eurotruss F34) geständert und 6 vormontierten Leuchtmittel installiert
        in der Traverse
      </p>
      <div>

        <a-switch v-model="traverse">
          <a-icon slot="checkedChildren" type="check"/>
          <a-icon slot="unCheckedChildren" type="close"/>
        </a-switch>
        <img style="max-width: 80%" :src="traverseImage" alt="mit">
        <div>
          <span v-if="traverse">mit Traverse + <strong>€{{ traversePrice }}</strong></span>
          <span v-if="!traverse">ohne Traverse</span>
        </div>
      </div>
      <div class="grid-10-2">

        <a-button class="place-x-end" type="primary" @click="next">weiter</a-button>
      </div>
    </a-col>
  </a-row>

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import mit from '@/assets/traverse/with.png';
import ohne from '@/assets/traverse/without.png';

import print1 from '@/assets/print/black_white.png';
import print2 from '@/assets/print/one_wall.png';
import print3 from '@/assets/print/two_walls.png';

interface Print {
  title: String,
  dimensions: String,
  price: Number,
  img: String,
  description: String
}
import {Area} from "@/types";
@Component({})
export default class Walls extends Vue {
  @Prop({required: true}) private area!: Area
  private slider: number = 50;
  private traverse: boolean = false;
  private selectedPrint: number = 0;
  private prints: Array<Print> = [
    {
      title: 'Print 1',
      dimensions: this.area.wall,
      price: this.area.print1,
      description: '2 Digitaldruck - Einfarbig pro Wand',
      img: print1
    },
    {
      title: 'Print 2',
      dimensions: this.area.wall,
      price: this.area.print2,
      description: '1 Digitaldruck - Einfarbig pro Wand & 1 Digitaldruck 4C auf Stoff',
      img: print2
    },
    {
      title: 'Print 3',
      dimensions: this.area.wall,
      price: this.area.print3,
      description: '2 Digitaldruck 4C auf Stoff',
      img: print3
    }

  ]

  next() {
    let obj = {...this.area, selectedPrint: this.selectedPrint, traverse: this.traverse};
    this.$emit('selected', obj);
  }

  get traverseImage() {
    return this.traverse ? mit : ohne;
  }

  get traversePrice() {
    console.log(this.area)
    switch (this.area.qm) {
      case '9':
        return 1000;
        break;
      case '12':
        return 1300;
        break;
      case '16':
        return 1600;
        break;
      default:
        return null;
    }
  }

  steps(val:number) {
    this.selectedPrint = val < 50 ? 0 : (val < 100 ? 1 : 2)
    return this.prints[this.selectedPrint].title
  }
}
</script>

<style scoped>

</style>
