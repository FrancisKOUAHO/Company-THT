<script setup lang="ts"></script>

<template>
  <header class="header zIndex">
    <div>
      <span class="color-text fr">FR</span>
      <span class="color-text en">EN</span>
    </div>
    <div>
      <h1 class="color-text">LOGO</h1>
    </div>
    <label>
      <input type="checkbox"/>
      <span class="menu"> <span class="hamburger"></span> </span>
      <ul>
        <li><router-link :to="{ name: 'home' }">Accueil</router-link></li>
        <li><router-link :to="{ name: 'presentation' }">Présentation</router-link></li>
        <li><router-link :to="{ name: 'galeries' }">Galeries</router-link></li>
        <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
      </ul>
    </label>
  </header>

</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.zIndex {
  z-index: 200000;
  color: white;
}

.color-text {
  color: white;
}

.fr {
  margin-left: 1rem;
}

.en {
  margin-left: 1rem;
}

label .menu {
  position: absolute;
  right: -100px;
  top: -100px;
  z-index: 100;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50% 50% 50% 50%;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
  cursor: pointer;
}

label .hamburger {
  position: absolute;
  top: 135px;
  left: 50px;
  width: 30px;
  height: 2px;
  background:  #d51015;
  display: block;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

label .hamburger:after,
label .hamburger:before {
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #d51015;
}

label .hamburger:before {
  top: -10px;
}

label .hamburger:after {
  bottom: -10px;
}

label input {
  display: none;
}

label input:checked + .menu {
  box-shadow: 0 0 0 100vw #d51015, 0 0 0 100vh #d51015;
  border-radius: 0;
}

label input:checked + .menu .hamburger {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

label input:checked + .menu .hamburger:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  bottom: 0;
}

label input:checked + .menu .hamburger:before {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
}

label input:checked + .menu + ul {
  opacity: 1;
}

label ul {
  z-index: 200;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-transition: 0.25s 0s ease-in-out;
  transition: 0.25s 0s ease-in-out;
}

label ul li {
  list-style-type: none;
}

label a {
  margin-bottom: 1em;
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-size: 61px;
}

label a:hover {
  color: #300202;
}
</style>
