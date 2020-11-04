<template>
  <div class="layout page  page-home">
     <Header Title="la home !! " />
       <main class="main">
    <div class="container">
        <div class="jumbotron">
            <H1> Kit starter twig-Js </H1> 
            <p> c'est un kit starter basé sur du twig js , avec une architecture front déja préconfigurer et construite a base de gulp, sass, twig-js, et plusieurs extentions et package npm ..., et surtout un systeme atomic de composant twig ( bouttons ,element de formulaire, slaiders ....... , regarder la doc de ce kit dans ce styleGuide </p>
            <div>
             <a href="styleguide.html" class="button button--style01"> <span> styleguide.html   </span> </a>
            </div>
        </div>
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
export default class Home extends Vue {}
</script>

<style lang="scss">
.page-home {

}
</style>