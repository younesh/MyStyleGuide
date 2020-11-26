<template>
    <div class="animate-avatar" @mousemove="hoverAvatar" ref="animateAvatar">
        <div class="animate-avatar__photo">
        <figure>
            <img src="~@/assets/img/photo-profil.jpg" alt="">
        </figure>
        </div>
        <div class="animate-avatar__html"  :style="styleHtml"><span>HTML</span></div>
        <div class="animate-avatar__css" :style="styleCss"> <span>CSS</span></div>
        <div class="animate-avatar__js" :style="styleJs"> <span>Js</span></div>
     </div>
</template>

<script lang="ts"> // AnimateAvatar
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class AnimateAvatar extends Vue {
   /* --- PROPOS ---*/
   // @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
  private  delta = 1;
 
  /* --- METHODES ---*/
  public hoverAvatar (evt :any)  {
        const animAvatar = this.$refs.animateAvatar;
        const xCenterAvatar = window.innerWidth / 2;
        const yCenterAvatar = this.offset(animAvatar).top + 150;
        this.delta = Math.abs(evt.pageY - yCenterAvatar) * Math.abs(evt.pageX - xCenterAvatar) / 10000;
  };

  /*----- COMPUTED PROPERTIES -----*/
    get styleHtml(): any {
        return  {
            animationDuration :  this.delta * 18 + "s"
        }
    }

      get styleCss(): any {
        return  {
            animationDuration :  this.delta * 12 + "s"
        }
    }

      get styleJs(): any {
        return  {
            animationDuration :  this.delta * 8 + "s"
        }
    }

  /* --- LIFE CYCLE ---*/
 created() {
        return 1 
 }



  /* --- METHODES ---*/
   public offset(el : any ): any {
         const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

 

}
</script>

<style lang="scss" scoped>
@import "animate-avatar";
</style>