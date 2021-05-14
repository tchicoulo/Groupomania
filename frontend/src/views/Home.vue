<template>
  <div class="home">
    <HeaderHome />
    <div class="content">
      <div class="content content_text">
        <h1>Bienvenue !</h1>
        <h2>Veuillez vous inscrire ou vous connecter</h2>
      </div>
      <div class="content content-img">
        <img src="@/images/icon-above-font.png" alt="Logo Groupomania" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderHome from "../components/HeaderHome";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    HeaderHome,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  color: var(--color-blue);
  text-align: center;
}
.content {
  display: flex;
  justify-content: space-around;
}

.content_text {
  margin-top: 50px;
  height: 60%;
  flex-direction: column;
  align-items: flex-end;
}
img {
  width: 65%;
}
@media (max-width: 768px) {
  h1,
  h2 {
    display: none;
  }
}
</style>
