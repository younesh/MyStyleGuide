<template>
  <div class="layout page  page-styleguide">
     <Header Title="Style guide" />
       <main class="main">
    <div class="container">
       <section class="sg-content">
          <h2> test d'un components   </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus consequuntur, porro doloribus explicabo, sit quisquam fugit vel quod dolore consectetur, sint magnam quos error eius minus. Quis, blanditiis maxime.</p>
       </section>

       <section class="sg-content">
          <h2> increpenter ... </h2>
          <Incrmenter />
       </section>

             <section class="sg-content">
                  <h2> ImagePlaceholder by TDD !!  </h2>
                  <ImagePlaceholder width="500" height="200" images="newyork"  />
             </section>
    </div>
  </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/organismes/Header/Header.vue";
import Incrmenter from "@/components/atoms/incrementer/Incrementer.vue";
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder/ImagePlaceholder.vue';


@Component({
  components: {
    Header, Incrmenter, ImagePlaceholder
  }
})
export default class StyleGuide extends Vue {}
</script>

<style lang="scss">
.page-styleguide {
    code {
        em {
            color: $color-green-meduim;
        }
    }
    .filter {
        position: fixed;
        bottom: 0px;
        nav {
            a {
                display: block;
                position: relative;
                &:before {
                    content: "";
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-color: white;
                    margin-right: 5px;
                    position: relative;
                    top: -2px;
                    border-radius: 50%;
                }
            }
        }
    }
    section {
        border: $border-default;
        padding: $gutter-half;
        margin-bottom: $gutter-half;
        &.sg-content {
            .input-checkbox,
            .input-radio {
                margin: $gutter-half 0px;
            }
        }
    }
    // icones 
    .doc-icones {
        width: 160px;
        display: inline-block !important;
        border: 1px solid $color-gray-meduim;
        padding: $gutter-half;
        margin: $gutter-half;
        text-align: center;
        @include Y-center;
        &.dark {
            background-color: $color-blue-dark;
        }
        .doc-icones_display {}
        i {
            font-size: 70px;
        }
        code {
            display: block;
        }
    }
}
</style>