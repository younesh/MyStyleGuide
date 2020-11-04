<template>
  <div class="layout page  page-styleguide">
     <Header Title="Style guide" />
       <main class="main">
    <div class="container">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas libero praesentium laborum voluptatum aperiam distinctio aspernatur velit aut dolor animi at quod quasi eveniet, odio vel sit autem consequatur ullam. </p>
    </div>
  </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/organismes/Header/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class StyleGuide extends Vue {}
</script>

<style lang="scss">
.page-styleguide {

}
</style>