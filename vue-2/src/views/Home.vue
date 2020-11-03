<template>

  <div class="layout page  page-home">
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons"
rel="stylesheet">

<!-- https://material.io/resources/icons/?style=outline -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"
rel="stylesheet">

<!-- https://material.io/resources/icons/?style=round -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round"
rel="stylesheet">

<!-- https://material.io/resources/icons/?style=sharp -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Sharp"
rel="stylesheet">
     <header class="header">
        <MainMenuTop />
            <div class="header__hero">
        <figure class="header__hero-video-bg">
            <video autoplay loop muted>
                <source src="~@/assets/data/video-hero-banner-2.mp4" type="video/mp4">
              </video>
        </figure>
        <div class="container header__hero-content">
            <h1>
              {{Titre}} 
            </h1>
            <AnimateAvatar />
              <!--  avatar -->
        </div>
    </div>
     </header>
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
import MainMenuTop from "@/components/molecules/MainMenuTop/MainMenuTop.vue"; // @ is an alias to /src
import AnimateAvatar from "@/components/molecules/AnimateAvatar/AnimateAvatar.vue";

@Component({
  components: {
    MainMenuTop, AnimateAvatar
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.page-home {

}
</style>