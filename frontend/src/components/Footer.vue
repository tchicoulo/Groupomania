<template>
  <footer>
    <small>Final project DevWeb OpenClassrooms</small>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");

$color-red: rgb(209, 81, 90);
$color-blue: rgb(9, 31, 67);
$color-grey: rgb(214, 214, 214);

footer {
  font-family: "Mukta", sans-serif;
  width: 100%;
  height: 100px;
  background-color: $color-grey;
  border-top: 8px solid $color-blue;
  border-radius: 5%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
small {
  color: white;
  font-size: 20px;
  padding: 15px 25px 0 0;
  text-shadow: 2px 2px 2px $color-blue;
}
</style>
