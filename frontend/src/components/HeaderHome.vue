<template>
  <header>
    <div class="left-part">
      <router-link @click="isConnected()" :to="route">
        <img
          class="btn-logo"
          src="../images/icon-left-font-monochrome-white.png"
          alt="Logo Groupomania"
      /></router-link>
    </div>
    <nav>
      <router-link v-if="!isConnected()" to="/about">À propos</router-link> |
      <router-link v-if="!isConnected()" to="/sign-up">S'inscrire</router-link>|
      <router-link v-if="!isConnected()" to="/login">Se connecter</router-link>|
      <router-link v-if="isConnected()" to="/profile">Mon profil</router-link> |
      <button v-if="isConnected()" @click="disconnect()">
        Se déconnecter
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderHome",
  data() {
    return {
      redirectionHome: Boolean,
      route: String,
    };
  },
  methods: {
    isConnected() {
      if (localStorage.getItem("user") == (null || undefined)) {
        this.route = "/";
        return false;
      } else {
        this.route = "/posts";
        return true;
      }
    },
    disconnect() {
      localStorage.removeItem("user");
      window.location = "/";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");

$color-red: rgb(209, 81, 90);
$color-blue: rgb(9, 31, 67);
$color-grey: rgb(214, 214, 214);

header {
  font-family: "Mukta", sans-serif;
  background-color: $color-blue;
  border-bottom: 7px solid $color-red;
  border-radius: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-bottom: 60px;
}

.btn-logo {
  width: 30%;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.2s;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $color-grey;
    font-size: 18px;
    text-decoration: none;

    &.router-link-exact-active {
      color: $color-red;
      text-shadow: 3px 10px 25px white, 0px 1px 1px black;
      border-bottom: 1px solid $color-grey;
    }
  }
}
</style>
