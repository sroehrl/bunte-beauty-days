<template>
  <a-carousel :after-change="onChange" arrows>
    <div
        slot="prevArrow"
        slot-scope="props"
        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
    <div v-for="area in areas" class="m-b-4">
      <a-row :gutter="24">
        <a-col :span="12">
          <img :src="area.img" alt="9qm" style="max-width: 100%">
          <h3 class="font-lg">{{area.qm}}qm</h3>
          <a-button @click="select" type="primary">Weiter mit {{area.qm}}qm</a-button>
        </a-col>
        <a-col :span="12">
          <div>
            <h2 class="text-accent p-t-2 font-lg">{{area.title}}</h2>
            <a-timeline class="m-r-2">
              <a-timeline-item>Inklusive Stromversorgung & Verbrauch ohne Starkstrom</a-timeline-item>
              <a-timeline-item>Eintrag ins Online-Ausstellerverzeichnis auf www.bunte-beauty-days.de
                (Digitale Logointegration + Website-Verlinkung + Kurztext zur Marke
                + interaktiver  Hallenplan auf BBD-Website)</a-timeline-item>
              <a-timeline-item><strong>Storypost auf Instagram</strong> mit Logo @buntebeautydays</a-timeline-item>
              <a-timeline-item><strong>Logo-Integration</strong> in der BUNTE Beauty Days Ankündigungsanzeige in BUNTE</a-timeline-item>
              <a-timeline-item><strong>3 Ausstellerausweise für Ihr Standpersonal</strong></a-timeline-item>
            </a-timeline>
            <p class="font-xl text-primary">
              €{{area.price}}* <br>

            </p>
            <small class="font-sm">*PREIS PRO QUADRATMETER 195 €/qm1 (Standort unabhängig)
              Step 2. ist verbindlich zu buchen
              Step 3. ist optional</small>
          </div>

        </a-col>
      </a-row>

    </div>
  </a-carousel>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import one from "@/assets/areas/9qm.png";
import two from "@/assets/areas/12qm.png";
import three from "@/assets/areas/16qm.png";
import four from "@/assets/areas/24_5qm.png";

import {Area} from "@/types";

@Component({})
export default class AreaSelection extends Vue{
  private areas: Array<Area> = [
    {
      img: one,
      title: 'Standgröße XS',
      qm: '9',
      price: 1755,
      print1: 700,
      print2: 850,
      print3: 1050,
      style1: 500,
      style1List:['1 Wandregal', '1 Beistelltisch', '1 Hochtisch', '2 Hochstuhl'],
      style2: 725,
      style2List:['1 Wandregal', '1 Beistelltisch', '1 PVC Holzboden', '1 Hochtisch', '2 Hochstuhl'],
      style3: 500,
      style3List:['1 Wandregal', '1 Beistelltisch', '1 Counter', '2 Hochstuhl'],
      wall: 'Maße je Seite: 3,0m x 2,5m x 0,2m'
    },
    {
      img: two,
      title: 'Standgröße S',
      qm: '12',
      price: 2340,
      print1: 800,
      print2: 1000,
      print3: 1250,
      style1: 700,
      style1List:['2 Wandregal', '2 Beistelltisch', '1 Hochtisch', '2 Hochstuhl'],
      style2: 900,
      style2List:['2 Wandregal', '2 Beistelltisch', '1 PVC Holzboden', '1 Hochtisch', '2 Hochstuhl'],
      style3: 700,
      style3List:['2 Wandregal', '2 Beistelltisch', '1 Counter', '2 Hochstuhl'],
      wall: 'Maß: 4,0m x 2,5m x 0,2m | Maß: 3,0m x 2,5m x 0,2m'
    },
    {
      img: two,
      title: 'Standgröße M',
      qm: '16',
      price: 3120,
      print1: 1000,
      print2: 1300,
      print3: 1650,
      style1: 900,
      style1List:['3 Wandregal', '2 Beistelltisch', '2 Hochtisch', '4 Hochstuhl'],
      style2: 1300,
      style2List:['3 Wandregal', '2 Beistelltisch', '1 PVC Holzboden', '2 Hochtisch', '4 Hochstuhl'],
      style3: 900,
      style3List:['2 Wandregal', '2 Beistelltisch', '2 Counter', '4 Hochstuhl'],
      wall: 'Maße je Seite: 4,0m x 2,5m x 0,2m'
    }
  ];
  private selected:number = 0
  select(){
    this.$emit('selected', {area:this.areas[this.selected]})
  }
  onChange(a:any,b:any,c:any){
    console.log(a)
    this.selected = a;
  }
}

</script>
<style scoped>
.slick-dots li{
  /*background: #42b983 !important;*/
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  /*height: 160px;*/
  /*background: #42b983;*/
  /*line-height: 160px;*/
  overflow: hidden;
}
.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #000;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}
</style>
