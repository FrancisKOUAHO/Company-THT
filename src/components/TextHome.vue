<script>
export default {
  props: {
    text_title: String,
    text_description: String,
    text_description_2: String,
  },
};
</script>

<template>
  <div class="text-container">
    <div class="title-container">
      <h1 class="title-h1">
        {{ text_title }}
      </h1>
    </div>
    <div>
      <p class="text-description">
        {{ text_description }}
      </p>

      <p class="text-description">{{ text_description_2 }}</p>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-right: auto;
  margin-top: -30%;
  width: 65%;
  color: white;
  text-align: left;
}

.title-container {
  margin: 1rem;
}

.title-h1 {
  text-align: left;
  font-size: 32px;
  font-family: "JetBrains Mono", sans-serif;
}

.text-description {
  font-size: 23px;
  font-family: "JetBrains Mono", sans-serif;
  margin: 1rem;
}
</style>
