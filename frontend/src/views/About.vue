<template>
  <div class="about">
    <HeaderHome />
    <h1>À propos de nous</h1>
    <p>
      Notre entreprise, spécialisée dans la grande distribution, est en pleine
      expansion. <br />
      Nous avons actuellement plus de 600 collaborateurs et avons beaucoup
      recruté depuis quelques années. Nous étions uniquement 300 il y a 3 ans.
    </p>
  </div>
</template>

<script>
import HeaderHome from "../components/HeaderHome";

export default {
  name: "About",
  components: {
    HeaderHome,
  },
};
</script>

<style lang="scss" scoped>
$color-blue: rgb(9, 31, 67);
$color-grey: rgb(214, 214, 214);

h1,
p {
  font-family: "Mukta", sans-serif;
  text-align: center;
  color: $color-blue;
  background-color: $color-grey;

  margin: 0 auto;
}

h1 {
  margin-top: 150px;
  width: 20%;
  box-shadow: 1px 5px 5px $color-blue;
  border-radius: 15%;
}

p {
  margin-top: 80px;
  font-size: 18px;
  width: 50%;
  padding: 50px;
  box-shadow: 1px 5px 5px $color-blue;
}
</style>
