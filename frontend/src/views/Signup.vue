<template>
  <div class="Sign-up">
    <HeaderHome />
    <h1>Inscription</h1>
    <div class="content">
      <SignupForm submitClass="sub-sign-up" />
    </div>
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";
import SignupForm from "@/components/SignupForm";

export default {
  name: "Sign-up",
  components: {
    HeaderHome,
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 600px;
  background-image: url("../images/icon.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
}
h1 {
  text-align: center;
  color: var(--color-blue);
}
</style>
