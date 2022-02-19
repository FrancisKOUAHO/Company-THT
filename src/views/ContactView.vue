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
  <section>
    <div class="container">
      <div class="container-title-contact"><h1>Nous contacter</h1></div>
      <div class="container-contact">
        <div class="container-contact-1">
          <h6>Envoyez-nous un message</h6>
          <p>
            Nous serions très heureux de vous entendre si vous avez des
            questions :<br />
            <a class="notice_link" href="mailto:contact@compagnie-tht.com"
              >contact@compagnie-tht.com</a
            >
          </p>
        </div>
        <div class="container-contact-1">
          <h6>Compagnie THT</h6>
          <p>
            119 rue saint sebastien<br />
            78300 POISSY<br />
            Tel.: (+45) 35 26 22 22<br />
            E-mail:
            <a class="notice_link" href="mailto:contact@compagnie-tht.com"
              >contact@compagnie-tht.com</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
  <the-footer />
</template>

<style lang="scss" scoped>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.container {
  margin-top: 15%;
  margin-left: 15%;
}

.container-title-contact {
  h1 {
    font-size: 5.833em;
    line-height: 1.03;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 20px;
  }
}
h6 {
  font-size: 1.083em;
  line-height: 1.23;
  margin-bottom: 10px;
}

.container-contact {
  display: flex;
  color: white;
  height: 62px;
  padding-top: 0px;
  opacity: 1;
  justify-content: center;
  align-items: center;
}

.container-contact > div {
  padding-left: 40px;
  height: 0;
  padding-top: 0;
  opacity: 1;
}

a.notice_link {
  color: #d51015;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
}

.container-contact-1 {
  width: 33.33%;
  font-size: 17px;
}
</style>
