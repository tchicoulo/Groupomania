<template>
  <div class="Login">
    <HeaderHome />
    <h1>Connexion</h1>
    <div class="content">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";
import LoginForm from "@/components/LoginForm";

export default {
  name: "Login",
  components: {
    HeaderHome,
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  height: 600px;
  background-image: url("../images/icon.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}
h1 {
  text-align: center;
  color: var(--color-blue);
}
</style>
