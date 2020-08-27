<template>
  <div id="app">
    <a-layout id="components-layout-demo-top"  class="layout">
      <a-layout-header >
        <div class="logo" ></div>
        <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="[currentRoute]"
            :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="Home">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item key="Event">
            <router-link to="/event">Der Event</router-link>
          </a-menu-item>
          <a-menu-item key="Aussteller">
            <router-link to="/aussteller">Aussteller</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Beauty days</a-breadcrumb-item>
          <a-breadcrumb-item>{{ $route.name }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff',  minHeight: '280px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
         ©2020 MAXICO GmbH im Auftrag der Hubert Burda Medien Verlage
      </a-layout-footer>
    </a-layout>


  </div>
</template>
<script lang="ts">
import {Component, Watch, Vue} from 'vue-property-decorator';
import {Computed} from "vuex/types/helpers";

@Component
export default class App extends Vue{
  get currentRoute(){

    return this.$route.name ? this.$route.name.trim() : "";
  }
}
</script>

<style lang="scss">
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background-image: url("./assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;

  margin: 16px 24px 16px 0;
  float: left;
}
</style>
