<template>
  
<!-- data-config="{animate : true}" data-step="{{step|default(1)}}" data-min="{{min|default(0)}}" data-max="{{max|default(10)}}" -->
 
 <div class="input-incrementer">
    <div class="input-incrementer__btn input-incrementer__btn--decrement" @click="decrement">
        -
    </div>
    <div class="input-incrementer__value">
        <input type="text" name="input-incrementer" class="input-incrementer__field"  :value="currentValue">
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
  /* --- DATA VARIABLES ---*/
    private  currentValue = 0;

   /* --- METHODES ---*/
    public  increment ()  {
      //  console.log('increment ...' + this.currentValue);
        this.currentValue++;
    }

    public  decrement ()  {
        this.currentValue--;
    }
}

</script>

<style lang="scss">
//@import "main-top-menu"
@import "inputIncrementer"
</style>