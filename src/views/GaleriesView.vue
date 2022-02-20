<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";
import TweenMax from "gsap";

export default defineComponent({
  components: { TheFooter, TheNav, TheHeader },
  data() {
    return {};
  },
  created() {
    TweenMax.from(".gallery-image", {
      duration: 2,
      delay: 1,
      opacity: 0,
      stagger: {
        amount: 0.4,
      },
    });
    const centerWidth = window.innerWidth / 2;
    const centerHeight = window.innerHeight / 2;

    let galleryImages: any = document.querySelector("div.gallery-container")!==null;
    console.log(`galleryImages: ${galleryImages}`);
    let posX = 0;
    let mouseX = 0;
    let posY = 0;
    let mouseY = 0;

    TweenMax.to({}, 0.0016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 30;
        posY += (mouseY - posY) / 20;

        TweenMax.set(galleryImages, {
          css: {
            left: posX - centerWidth,
            top: posY - (centerHeight + 200),
          },
        });
      },
    });

    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  },
});
</script>

<template>
  <the-header />
  <the-nav />
  <div class="gallery-container">
    <div class="gallery">
      <img
        src="@/assets/image/blanc.png"
        alt=""
        style="width: 400px; height: 800px"
        class="gallery-image"
      />
      <img
        src="@/assets/image/IMG_B52A7D0E9D6D-1.jpeg"
        alt=""
        style="width: 400px"
        class="postion-margin gallery-image"
      />
      <img
        src="@/assets/image/bleu.png"
        alt=""
        style="width: 400px; height: 600px"
        class="postion-margin gallery-image"
      />
      <img
        src="@/assets/image/IMG_684F1EA80856.jpeg"
        style="width: 400px"
        alt=""
        class="gallery-image"
      />
      <img
        src="@/assets/image/IMG_D20CD0DFE62F.jpeg"
        style="width: 400px"
        alt=""
        class="gallery-image"
      />
      <img
        src="@/assets/image/fleur.png"
        alt=""
        style="width: 600px; height: 800px"
        class="postion-margin gallery-image"
      />
      <img
        src="@/assets/image/IMG_9740B30EEF43.jpeg"
        alt=""
        style="width: 300px; height: 300px"
        class="postion-margin gallery-image"
      />
      <img
        src="@/assets/image/IMG_55C77E1671FB.jpeg"
        alt=""
        style="width: 360px"
        class="postion-margin gallery-image"
      />
      <img
        src="@/assets/image/IMG_55C77E1671FB.jpeg"
        alt=""
        style="width: 360px"
        class="postion-margin gallery-image"
      />
      <img
        src="@/assets/image/IMG_55C77E1671FB.jpeg"
        alt=""
        style="width: 360px"
        class="postion-margin gallery-image"
      />
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        style="width: 533px; height: 300px"
        class="postion-margin gallery-image"
      >
        <source src="@/assets/video/duo.mp4" type="video/mp4" />
      </video>
      <img
        src="@/assets/image/IMG_D20CD0DFE62F.jpeg"
        alt=""
        style="height: 724px"
        class="postion-margin gallery-image"
      />
      <img
        class="gallery-image"
        src="@/assets/image/IMG_D20CD0DFE62F.jpeg"
        alt=""
        style="width: 200px; height: 200px"
      />
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        style="width: 533px; height: 300px"
        class="postion-margin gallery-image"
      >
        <source src="@/assets/video/page-home.mp4" type="video/mp4" />
      </video>
      <img
        src="@/assets/image/IMG_2516.jpg"
        alt=""
        style="width: 600px; height: 536px"
        class="postion-margin gallery-image"
      />
      <img
        class="gallery-image postion-margin"
        src="@/assets/image/contact.png"
        alt=""
        style="width: 400px"
      />
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        style="width: 533px; height: 300px"
        class="postion-margin gallery-image"
      >
        <source src="@/assets/video/page-presentation.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
  <the-footer />
</template>
∑
<style lang="scss" scoped>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.gallery-container {
  position: absolute;
  user-select: none;
  pointer-events: none;
  transform: translate(-25%, -25%);
  width: 150vw;
  height: 150vh;
}

.gallery {
  height: 100%;
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-image {
  width: 500px;
  height: 500px;
  margin: 50px 100px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #d41115;
  filter: grayscale(0.5);
}

.postion-margin {
  margin: 11px;
}
</style>
