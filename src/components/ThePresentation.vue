<script lang="ts">
import { defineComponent } from "vue";
import TextHome from "@/components/TextHome.vue";

export default defineComponent({
  components: { TextHome },
  data() {
    return {
      text_title: "CHORÉGRAPHE - DIRECTEUR ARTISTIQUE - INTERPRÈTE",
      text_description: `Découvrant la danse en 2011, Ouili va d’abord s’aguerrir par la
        compétition et les “battles”, puis à l'âge de 17 ans il donne ses
        premiers cours de danse et construit ses premières chorégraphie à la MJC
        de Sartrouville. En 2014, il intègre la compagnie Black Blanc Beur et
        participe à la création des spectacles “Paradox” et “A bout de souffle”.
        C’est au contact des chorégraphes Mathieu Raguel et Christine Coudun que
        Ouili se forme aux arts de la scène. C’est aussi l’occasion pour lui de
        réaliser ses premières tournées à l'international notamment en Allemagne
        (2015) et en autriche (2016). Il intègre ensuite la compagnie Yeah
        Yellow en tant que danseur pour le show “Yeah Yellow Sunshine”. C’est
        avec ce spectacle que Ouili participe à la tournée américaine de
        “Breakin’ Convention” (2017) qui fut l’occasion pour lui de se produire
        dans les plus prestigieuses scènes américaines.`,
      text_description_2: ` En avril 2018 il
        présente pour la première fois “Fleur” dans sa version courte à la
        finale nationale du concours “Danse avec ton crous”. L’année suivante il
        remporte son premier prix en tant que chorégraphe au festival égyptien
        “Theater Without Fund “ à Alexandrie (2019).`,
    };
  },
});
</script>

<template>
  <video
    playsinline="playsinline"
    autoplay="autoplay"
    loop="loop"
    id="pageHomeVideo"
    muted="muted"
  >
    <source src="@/assets/video/page-presentation.mp4" type="video/mp4" />
  </video>
  <text-home
    :text_title="this.text_title"
    :text_description="this.text_description"
    :text_description_2="this.text_description_2"
  />
</template>

<style lang="scss" scoped></style>
