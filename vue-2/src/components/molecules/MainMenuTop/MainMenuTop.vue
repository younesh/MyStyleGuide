<template>
   <div class="maintopmenu">
    <div class="container maintopmenu__wrapper">
        <nav class="maintopmenu__navigation d-none d-md-flex">
            <!-- 
            <a href="./"> <span>Home</span> </a>
            <a href="styleguide"> <span> StyleGuide</span> </a>
            <a href="" id=""> <span> Références / travaux ( WIP ) </span> </a> 
            -->
            <router-link to="./"><span>Home</span></router-link> 
            <router-link to="./style-guide"><span> StyleGuide</span></router-link> 
             <router-link to="./Tests"><span> Tests </span></router-link>
        </nav>
        <a class="maintopmenu__mobile  d-flex d-md-none" @click="openCloseMenu"><i class="material-icons fz-40">menu</i></a>
        <div class="maintopmenu__tag-mode">
            <i class="material-icons mr-2">error</i><span> version Vue 2.x : under construction </span>
        </div>
    </div>
    <div class="maintopmenu__slide-mobile" :class="{'maintopmenu__slide-mobile--open' : isMenuMobileOpen }">
            <router-link to="./"><span>Home</span></router-link> 
            <router-link to="./style-guide"><span> StyleGuide</span></router-link> 
            <router-link to="./tests"><span> Tests </span></router-link>
    </div>
     <router-view />
</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    
  }
})
export default class MainMenuTop extends Vue {

 /* --- DATA VARIABLES ---*/
    private isMenuMobileOpen = false;

/* --- METHODES ---*/
    public openCloseMenu(): void {
        this.isMenuMobileOpen = !this.isMenuMobileOpen;
    }
}
</script>

<style lang="scss" scoped>
@import "main-top-menu"
</style>