<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-blue);
}
html {
  height: 100%;
}

body {
  margin: 0;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}

:root {
  font-family: "Mukta", sans-serif;
  --color-red: rgb(209, 81, 90);
  --color-blue: rgb(9, 31, 67);
  --color-grey: rgb(214, 214, 214);
}
</style>
