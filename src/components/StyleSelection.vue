<template>
<section>
  <a-tabs tab-position="left" default-active-key="1" @change="select">
    <a-tab-pane key="0" tab="Kein Stil" force-render>
      <a-row :gutter="24">
        <a-col span="14">
          <img style="max-width: 100%" src="../assets/areas/9qm.png" alt="">
        </a-col>
        <a-col span="10">
          <h2>Kein Style</h2>

          <a-button @click="process" type="primary">ohne Stil fortsetzen</a-button>
        </a-col>
      </a-row>
    </a-tab-pane>
    <a-tab-pane key="1" tab="New York">
      <a-row :gutter="24">
        <a-col span="14">
          <img style="max-width: 100%" src="../assets/style/new_york.png" alt="">
        </a-col>
        <a-col span="10">
          <h2>New York</h2>
          <ul>
            <li class="font-md" v-for="item in area.style1List">{{item}}</li>
          </ul>
          <a-button @click="process" type="primary">Style für €{{area.style1}} hinzubuchen</a-button>
        </a-col>
      </a-row>

    </a-tab-pane>
    <a-tab-pane key="2" tab="Mailand" force-render>
      <a-row :gutter="24">
        <a-col span="14">
          <img style="max-width: 100%" src="../assets/style/milano.png" alt="">
        </a-col>
        <a-col span="10">
          <h2>Mailand</h2>
          <ul>
            <li class="font-md" v-for="item in area.style2List">{{item}}</li>
          </ul>
          <a-button @click="process" type="primary">Style für €{{area.style2}} hinzubuchen</a-button>
        </a-col>
      </a-row>

    </a-tab-pane>
    <a-tab-pane key="3" tab="Berlin" force-render>
      <a-row :gutter="24">
        <a-col span="14">
          <img style="max-width: 100%" src="../assets/style/berlin.png" alt="">
        </a-col>
        <a-col span="10">
          <h2>Berlin</h2>
          <ul>
            <li class="font-md" v-for="item in area.style3List">{{item}}</li>
          </ul>
          <a-button @click="process" type="primary">Style für €{{area.style3}} hinzubuchen</a-button>
        </a-col>
      </a-row>
    </a-tab-pane>
  </a-tabs>
</section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Area} from "@/types";
@Component({})
export default class StyleSelection extends Vue{
  @Prop() private area!: Area;
  private selectedStyle: number = 1;
  select(key:number){
    this.selectedStyle = key;
  }
  process(){
    this.$emit('selected',{...this.area, selectedStyle:this.selectedStyle})
  }
}
</script>
