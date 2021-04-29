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
      <router-link v-if="!isConnected()" to="/about">À propos</router-link>
      <router-link v-if="!isConnected()" to="/sign-up">S'inscrire</router-link>
      <router-link v-if="!isConnected()" to="/login">Se connecter</router-link>
      <router-link v-if="isConnected()" to="/profile">Mon profil</router-link>
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

<style lang="scss" scoped>
header {
  background-color: var(--color-blue);
  border-bottom: 7px solid var(--color-red);
  border-radius: 0 0 5% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-bottom: 60px;
}

.btn-logo {
  width: 40%;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.2s;
  }
}

.left-part {
  width: 40%;
}

img {
  padding-left: 35px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
  width: 20%;
  a {
    font-weight: bold;
    color: var(--color-grey);
    font-size: 18px;
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--color-red);
      text-shadow: 3px 10px 25px white, 0px 1px 1px black;
      border-bottom: 1px solid var(--color-grey);
    }
  }
}
</style>
