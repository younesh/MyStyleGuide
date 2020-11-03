<template>
   <div class="maintopmenu">
    <div class="container maintopmenu__wrapper">
        <nav class="maintopmenu__navigation d-none d-md-flex">
            <a href="./"> <span>Home</span> </a>
            <a href="styleguide.html"> <span> StyleGuide</span> </a>
        <a href="#" id=""> <span> Références / travaux ( WIP ) </span> </a>
        </nav>
        <a class="maintopmenu__mobile  d-flex d-md-none" @click="openCloseMenu"><i class="material-icons fz-40">menu</i></a>
        <div class="maintopmenu__tag-mode">
            <i class="material-icons mr-2">error</i><span> version Vue 2.x : under construction </span>
        </div>
    </div>
    <div class="maintopmenu__slide-mobile" :class="{'maintopmenu__slide-mobile--open' : isMenuMobileOpen }">
        <a href="index.html"> <span>Home</span> </a>
        <a href="styleguide.html"> <span> StyleGuide</span> </a>
        <a href="#"> <span> Références / travaux ( WIP ) </span> </a>
    </div>
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

<style lang="scss">
@import "main-top-menu"
</style>