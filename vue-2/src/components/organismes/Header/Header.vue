<template>
     <header class="header">
         <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
<!-- https://material.io/resources/icons/?style=outline -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
<!-- https://material.io/resources/icons/?style=round -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet">
<!-- https://material.io/resources/icons/?style=sharp -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Sharp" rel="stylesheet">
        <MainMenuTop />
        <div class="header__hero">
            <figure class="header__hero-video-bg">
                <video autoplay loop muted>
                    <source src="~@/assets/data/video-hero-banner-2.mp4" type="video/mp4">
                </video>
            </figure>
            <div class="container header__hero-content">
                <h1> {{Title}} </h1>
                <AnimateAvatar />
            </div>
        </div>
     </header>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import MainMenuTop from "@/components/molecules/MainMenuTop/MainMenuTop.vue";
    import AnimateAvatar from "@/components/molecules/AnimateAvatar/AnimateAvatar.vue";

    @Component({
        components: {
            MainMenuTop, AnimateAvatar
    }
    })
    export default class Header extends Vue {
        @Prop() readonly Title!: string;
    }
</script>

<style lang="scss" scoped>
   @import "header";
</style>