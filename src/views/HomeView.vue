<script lang="ts">
import { defineComponent } from "vue";
import TheContact from "@/components/TheContact.vue";
import TheFleur from "@/components/TheFleur.vue";
import TheNav from "@/components/TheNav.vue";
import ThePresentation from "@/components/ThePresentation.vue";
import TheGalerie from "@/components/TheGalerie.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheTravel from "@/components/TheTravel.vue";

export default defineComponent({
  components: {TheTravel, TheHeader, TheGalerie, ThePresentation, TheNav, TheFleur, TheContact },
  data() {
    return {
      options: {
        bigSectionsDestination: "top",
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ["page1", "page2", "page3"],
      },
    };
  },
});
</script>

<template>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section section1">
      <the-header />
      <the-nav />
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        loop="loop"
        id="pageHomeVideo"
        muted="muted"
      >
        <source src="@/assets/video/page-home.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="section section2">
      <the-presentation/>
    </div>
    <div class="section section3">
      <the-fleur />
    </div>
    <div class="section section5">
      <the-galerie />
    </div>
    <div class="section section4">
      <the-travel />
    </div>
    <div class="section section6">
      <the-contact />
    </div>
  </full-page>
</template>

<style scoped>
</style>
