<template>
  <div class="text-container">
    <div class="title-container">
      <h1 class="title-h1">Lorem ipsum</h1>
    </div>
    <div>
      <p class="text-description">
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum. lorem ipsum est, en imprimerie, une
        suite de mots sans signification utilisée à titre provisoire pour
        calibrer une mise en page, le texte définitif venant remplacer le
        faux-texte dès qu'il est prêt ou que la mise en page est achevée.
        Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
        Lipsum.
      </p>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 500px;
  margin-left: 60%;
  margin-top: 5%;
  color: white;
}

.title-container {
  margin-left: auto;
  margin-right: auto;
}

.title-h1 {
  font-size: 75px;
  font-family: "JetBrains Mono", sans-serif;
}

.text-description {
  font-size: 16px;
  font-family: "JetBrains Mono", sans-serif;
}
</style>
