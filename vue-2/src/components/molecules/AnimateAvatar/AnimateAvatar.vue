<template>
    <div class="animate-avatar" @mouseover="hoverAvatar">
    <div class="animate-avatar__photo">
        <figure>
            <img src="~@/assets/img/photo-profil.jpg" alt="">
        </figure>
    </div>
    <div class="animate-avatar__html"><span>HTML</span></div>
    <div class="animate-avatar__css"> <span>CSS</span></div>
    <div class="animate-avatar__js"> <span>Js</span></div>
</div>
</template>

<script lang="ts"> // AnimateAvatar
import { Component, Vue } from "vue-property-decorator";
export default class AnimateAvatar extends Vue {
  public hoverAvatar (evt :any): void  {
     const XcenterAvatar = window.innerWidth / 2;
     /* WIP migration from js */
  };
}
</script>

<style lang="scss" scoped>
@import "animate-avatar";
</style>