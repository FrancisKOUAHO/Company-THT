<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";

export default defineComponent({
  components: { TheFooter, TheNav, TheHeader },
  data() {
    return {};
  },
});
</script>

<template>
  <the-header />
  <the-nav />

  <the-footer />
</template>

<style lang="scss" scoped>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
