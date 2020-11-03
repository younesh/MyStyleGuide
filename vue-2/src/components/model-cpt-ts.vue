<!-- replace cpt-name and  CptName by new cpt name-->
<template>
  <div class="cpt-name">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import ChildCpt from "../../ChildCpt.vue"; /* to import a child component */
@Component({
    components: {
    // ChildCpt
  }
})
export default class CptName extends Vue {
   /* --- PROPOS ---*/
   @Prop() readonly props01!: string;
  /* --- DATA VARIABLES ---*/
   private var01: string = "welcome to my app"
   /* private datalist: Array<object> = [
      {
        name: 'dupon',
        age: '50'
      },
      {
        name: 'John',
        age: '45'
      }
    ]
    */ 
/* --- LIFE CYCLE ---*/
 created() {
   console.log("LIFE-CYCLE / created  ");
 }
  mounted() {
     console.log("LIFE-CYCLE / mounted  ");
  }
  beforeUpdate() {
     console.log("LIFE-CYCLE / beforeUpdate  ");
  }
  /*----- COMPUTED PROPERTIES -----*/
  get format(): string {
    return  "<[" + this.var01 + "]>"; 
  }
  /* --- METHODES ---*/
   public doSimthing(): void {
      console.log('doSimthing methode !! ')
   }
}
</script>

<style lang="scss" scoped>
 @import "@/components/config/scss/_variables.scss";
 .cpt-name {
 }
</style>