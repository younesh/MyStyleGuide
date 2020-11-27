<template>
  
<!-- data-config="{animate : true}" data-step="{{step|default(1)}}" data-min="{{min|default(0)}}" data-max="{{max|default(10)}}" -->
 
 <div class="input-incrementer">
    <div class="input-incrementer__btn input-incrementer__btn--decrement" @click="decrement">
        -
    </div>
    <div class="input-incrementer__value">
        <input type="text" name="input-incrementer" class="input-incrementer__field" :data-val="currentValue"  :value="currentValue">
    </div>
    <div class=" input-incrementer__btn input-incrementer__btn--increment" @click="increment">
        +
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class Incrementer extends Vue {

   /* ---  PROPOS  ---*/

    @Prop({required: false, default: 0 }) readonly startCompte!: number;
    @Prop({required: false, default: 1 }) readonly step!: number;
    @Prop({required: false, default: Infinity }) readonly max!: number;

  /* --- DATA VARIABLES ---*/
    private  currentValue = this.startCompte;

   /* --- METHODES ---*/
    public  increment ()  {
        const step = Number(this.step) > 1 ?  Number(this.step) : 1;
        this.currentValue += step;
    }

 public  decrement ()  {
      const step = Number(this.step) > 1 ?  Number(this.step) : 1;
       this.currentValue -= step;
 }
}

</script>

<style lang="scss">
//@import "main-top-menu"
@import "inputIncrementer"
</style>