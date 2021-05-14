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
h1,
p {
  text-align: center;

  margin: 0 auto;
}

h1 {
  text-shadow: 1px 2px var(--color-grey);
  margin-top: 150px;
  margin-bottom: 120px;
  width: 20%;
  border-radius: 15%;
  border-bottom: 2px solid black;
}

p {
  background-color: var(--color-grey);
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: 18px;
  width: 50%;
  padding: 50px;
  box-shadow: 1px 5px 5px var(--color-blue);
}

@media (max-width: 425px) {
  h1 {
    border-bottom: none;
  }
}
</style>
