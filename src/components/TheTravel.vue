<template>
  <div class="hero">
    <div class="text">
      <h1 class="text__title">DISTINCTIONS</h1>
      <ul class="text__description">
        <li>Shake it up Dance Talent” (Disney Channel - 2012)</li>
        <li>Finaliste du battle “Doyobe International “(Salzbourg - 2015)</li>
        <li>3eme au “Battle of The Year” (Montpellier - 2016)</li>
        <li>Finaliste national de la création étudiante (Poitiers - 2018)</li>
        <li>Finaliste du concours “Balance ton Talent” (Fédération ALMA - 2018)</li>
        <li>Vainqueur au “Campeonato navarro de hip hop” (Tudela - 2018)</li>
        <li>Phases finales “The Floor is Flava” (Bruxelles - 2019)</li>
        <li>Finaliste “Legits Blast 7 To Drink “(Prague - 2020)</li>
      </ul>

      <h1 class="text__title">REPRÉSENTATIONS</h1>
      <ul class="text__description">
        <li>Apollo theater (Harlem)</li>
        <li>Adrienne Arsht Center (Miami), Sadler wells (London),</li>
        <li>La Place (Paris), Palace of Fine Arts (San Francisco)</li>
        <li>Belk Theater (Charlotte), Belco Theater (Denver)</li>
        <li>Bibliotheca Alexandrina (Alexandrie)</li>
        <li>Theater Bremen (Brême), Die Buhne im Hof (St Polten)...</li>
      </ul>
    </div>

    <div class="grid__container">
      <div class="grid__item one"></div>
      <div class="grid__item two"></div>
      <div class="grid__item three"></div>
      <div class="grid__item four"></div>
      <div class="grid__item five"></div>
      <div class="grid__item six"></div>
      <div class="grid__item seven"></div>
      <div class="grid__item eight"></div>
      <div class="grid__item nine"></div>
      <div class="grid__item ten"></div>
      <div class="grid__item eleven"></div>
      <div class="grid__item twelve"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTravel",
};
</script>

<style scoped>
.hero {
  display: flex;
  max-width: 1440px;
  gap: 2em;
  justify-content: space-between;
  margin: 5em 2em;
}

.text {
  color: white;
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
}

.text__short {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #479a7e;
}

.text__title {
  font-family: "JetBrains Mono", sans-serif;
  font-size: 25px;
  line-height: 1.1;
  margin: 0;
}

.text__description {
  margin-top: 1rem;
  line-height: 145%;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 1em;
}

.text__button {
  max-width: 120px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: red;
  padding: 1rem;
  border-radius: 0.5em;
  margin-left: auto;
  margin-right: auto;
}

.grid__container {
  min-width: 60%;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(8, 1fr);
}

.grid__item {
  background-color: grey;
  border-radius: 0.5em;
}

.one {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-image: url(//unsplash.it/400/400);
  background-position: center;
  background-size: cover;
}

.two {
  grid-column: 2 / 5;
  grid-row: 1 / 4;
  background-image: url(//unsplash.it/900/900);
  background-position: center;
  background-size: cover;
}

.three {
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  background-image: url(//unsplash.it/500/400);
  background-position: center;
  background-size: cover;
}

.four {
  grid-column: 6 / 7;
  grid-row: 1 / 2;
  background-color: #fdf5dd;
  border-radius: 0 0 100px 0;
  -moz-border-radius: 0 0 100px 0;
  -webkit-border-radius: 0 0 100px 0;
}

.five {
  grid-column: 5 / 7;
  grid-row: 2 / 4;
  background-image: url(//unsplash.it/400/500);
  background-position: center;
  background-size: cover;
}

.six {
  grid-column: 7 / 8;
  grid-row: 2 / 3;
  background-color: #d3f0ee;
  border-radius: 0 100px 0 0;
  -moz-border-radius: 0 100px 0 0;
  -webkit-border-radius: 0 100px 0 0;
}

.seven {
  grid-column: 7 / 8;
  grid-row: 3 / 4;
  background-image: url(//unsplash.it/500/500);
  background-position: center;
  background-size: cover;
}

.eight {
  grid-column: 8 / 9;
  grid-row: 3 / 4;
  border-radius: 50%;
  background-color: #ced7ed;
}

.nine {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  background-color: #fadee0;
  border-radius: 100px 0 0 0;
  -moz-border-radius: 100px 0 0 0;
  -webkit-border-radius: 100px 0 0 0;
}

.ten {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  background-image: url(//unsplash.it/300/300);
  background-position: center;
  background-size: cover;
}

.eleven {
  grid-column: 3 / 5;
  grid-row: 4 / 6;
  background-image: url(//unsplash.it/700/700);
  background-position: center;
  background-size: cover;
}

.twelve {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
  background-image: url(//unsplash.it/300/500);
  background-position: center;
  background-size: cover;
}

@media (max-width: 900px) {
  .grid__container {
    min-width: 50%;
    height: 400px;
    margin-top: 50px;
  }

  @media (max-width: 780px) {
    .hero {
      flex-direction: column-reverse;
      margin: 2em 2em;
    }

    .text {
      width: 100%;
    }
  }
}
</style>
