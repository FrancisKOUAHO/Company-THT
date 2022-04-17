<template>
  <div class="description">
    <h1>LE SPECTACLE</h1>
    <p class="description-p">
      C’est en voulant discuter de la notion de l’éphémère et de la beauté que
      “Fleur” a vu le jour. Comme une fleur la beauté est une graine arrosée de
      nos désirs et de notre subjectivité. Subjective car dépendante de nos
      goûts et arrosée de nos désirs dont elle aime se nourrir. La beauté
      n’apparaît donc pas prête à être admirée, elle pousse et se développe
      jusqu’à se déployer et fleurir aux yeux de tous. Mais comme tout dans ce
      monde, la beauté est éphémère. Le temps et le manque d’entretien finissent
      par altérer ce que l'on admirait jadis. Que ce soit un visage
      vieillissant, une fresque en se ternissant ou une fleur en fanant,
      l’altération semble inévitable.
    </p>
    <p class="description-p">
      Fleur se veut donc un spectacle mêlant grâce et performance en utilisant
      le vocabulaire de la danse hip-hop. Le tout servant à s’émerveiller et se
      laisser emporter par le parcours de cette fleur interprétée par Ouili
      NANA.
    </p>
  </div>
  <video
    playsinline="playsinline"
    autoplay="autoplay"
    loop="loop"
    id="pageHomeVideo"
    muted="muted"
  >
    <source src="@/assets/video/page-home.mp4" type="video/mp4" />
  </video>
  <div class="description-interpretation">
    <br />
    <center>
      <h4>Direction artistique et interprétation</h4>
      <p>Ouili NANA</p>
    </center>
    <br />

    <center>
      <h5>Lumières</h5>
      <p>François KALEKA</p>
    </center>
    <br />

    <center>
      <h5>Durée: <span>40 minutes</span></h5>
      <h5>Registre: <span>Hip-Hop Tout public</span></h5>
    </center>
  </div>
</template>

<script>
export default {
  name: "TheFleur",
};
</script>

<style scoped>
.description {
  position: relative;
  top: 18rem;
  margin: 5rem;
}

h1 {
  text-align: center;
  margin-left: 10%;
  color: white;
  font-size: 40px;
  font-family: "JetBrains Mono", sans-serif;
}

.description-p {
  color: white;
  font-size: 23px;
  font-family: "JetBrains Mono", sans-serif;
  margin: 1rem;
  text-align: left;
}

.description-interpretation {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 1rem;
  color: white;
  position: relative;
  left: 24%;
  bottom: 50%;
}

.description-interpretation,
h4 {
  font-family: "JetBrains Mono", sans-serif;
  font-size: 23px;
}
</style>
