<template>
              <div class="animate-avatar">
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
export default class AnimateAvatar extends Vue {}
</script>

<style lang="scss">
@import "animate-avatar";
</style>