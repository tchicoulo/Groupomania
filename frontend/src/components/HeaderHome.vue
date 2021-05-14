<template>
  <header>
    <div class="left-part">
      <router-link aria-label="Home button" @click="isConnected()" :to="route">
        <img
          class="btn-logo"
          src="../images/icon-left-font-monochrome-white.png"
          alt="Logo Groupomania"
      /></router-link>
    </div>
    <nav>
      <router-link v-if="!isConnected()" to="/about">À propos</router-link>
      <router-link v-if="!isConnected()" to="/sign-up">Inscription</router-link>
      <router-link v-if="!isConnected()" to="/login">Connexion</router-link>
      <router-link v-if="isConnected()" to="/profile">Mon profil</router-link>
      <div class="btn-deco" v-if="isConnected()" @click="disconnect()">
        Déconnexion
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderHome",
  data() {
    return {
      redirectionHome: Boolean,
      route: [String, null],
    };
  },
  methods: {
    // utilisateur identifié/connecté ou non
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
      localStorage.clear();
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
  width: 45%;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.2s;
  }
}

.btn-deco {
  width: 60%;
  color: white;
  font-size: 17px;
  font-weight: bold;
  &:hover {
    color: var(--color-red);
    text-shadow: 3px 10px 25px white, 0px 1px 1px black;
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
  align-items: center;
  text-align: center;
  padding: 15px 15px;
  width: 40%;
  a {
    font-weight: bold;
    color: var(--color-grey);
    font-size: 18px;
    text-decoration: none;
    margin: 5px;

    &.router-link-exact-active {
      color: white;
      text-shadow: 3px 10px 25px white, 0px 1px 1px black;
      border-bottom: 1px solid var(--color-grey);
    }
  }
}
@media (max-width: 1024px) {
  .btn-logo {
    min-width: 150px;
  }
  nav {
    flex-direction: column;
  }
}
@media (max-width: 375px) {
  .btn-deco {
    font-size: 15px;
  }
}
</style>
