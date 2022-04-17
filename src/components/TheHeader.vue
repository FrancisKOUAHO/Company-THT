<template>
  <div class="header">
    <div>
      <span class="fr">FR</span>
      <span class="en">EN</span>
    </div>
    <div>
      <img src="https://nuxtjs.org/design-kit/colored-logo.svg" alt="logo" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  padding: 0.93em 1.87em;
  border-radius: 5px;
  color: #fff;
  width: 100%;
}

.en {
  margin-left: 1rem;
}
</style>
