<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TextHome from "@/components/TextHome.vue";
import TheFooter from "@/components/TheFooter.vue";

export default defineComponent({
  components: { TheFooter, TextHome, TheNav, TheHeader },
  data() {
    return {};
  },
});
</script>

<template>
  <the-header />
  <the-nav />
  <video
    playsinline="playsinline"
    autoplay="autoplay"
    loop="loop"
    id="pageHomeVideo"
    muted="muted"
  >
    <source src="@/assets/video/page-presentation.mp4" type="video/mp4" />
  </video>
  <text-home />
  <the-footer />
</template>

<style lang="scss" scoped>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  #pageHomeVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
}

video {
  z-index: -1;
}
</style>
