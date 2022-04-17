<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: true,
    };
  },
});
</script>

<template>
  <div class="side_page_navigation">
    <router-link to="#" :class="{ current: isActive }"
      ><span></span
    ></router-link>
    <router-link to="#"><span></span></router-link>
    <router-link to="#"><span></span></router-link>
    <router-link to="#"><span></span></router-link>
    <router-link to="#"><span></span></router-link>
  </div>
</template>

<style scoped>
.side_page_navigation {
  z-index: 10;
  position: fixed;
  left: 18px;
  top: 40%;
  color: white;
}

.side_page_navigation a {
  display: block;
  padding: 5px;
  margin: 12px 6px;
}

.side_page_navigation a.current span {
  width: 6px;
  height: 6px;
  margin-left: 0;
}

.side_page_navigation a span {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: block;
  width: 2px;
  height: 2px;
  margin-left: 2px;
  background-color: #fff;
  -webkit-transition: width 0.3s, height 0.3s, margin 0.3s;
  transition: width 0.3s, height 0.3s, margin 0.3s;
}

a,
a:active,
a:focus {
  outline: 0;
  color: #000000;
  cursor: pointer;
}
</style>
