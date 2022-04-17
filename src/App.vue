<script setup lang="ts">
import { RouterView } from "vue-router";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <RouterView />
  <the-footer />
</template>

<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

table {
  border-spacing: 0;
}

fieldset,
img {
  border: 0;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-weight: normal;
  font-style: normal;
}

strong {
  font-weight: bold;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

caption,
th {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
  margin: 0;
  padding: 0;
}

q:before,
q:after {
  content: "";
}

abbr,
acronym {
  border: 0;
}

* {
  -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
  -moz-box-sizing: border-box; /* <=28 */
  box-sizing: border-box;
}

.section {
  overflow-x: hidden;
  overflow-y: hidden;
  background: black;
  position: relative;
  text-align: center;
}

#section-1 h2 {
  color: #fff;
  font-size: 10em;
  font-weight: 900;
}

#section-1 h1 {
  font-size: 2em;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  margin: 1.5em auto 1em auto;
  color: #35495e;
  padding-right: 30px;
  padding-left: 30px;
}

#section-1 li {
  display: inline-block;
  margin: 1.25em 0.3em;
}

.section6{
  height: 100vh;
}

h3 {
  font-size: 5em;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
</style>
