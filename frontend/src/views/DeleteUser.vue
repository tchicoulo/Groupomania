<template>
  <div class="DeleteUser">
    <HeaderHome />
    <h1>Êtes vous sûrs de vouloir supprimer votre compte ?</h1>
    <div class="content">
      <button class="btn btn__yes" @click="DeleteUser()">
        Confirmer
      </button>
      <router-link class="btn btn__no" to="/posts">Annuler</router-link>
    </div>
    <br />
    <div class="message-confirm">{{ message }}</div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderHome from "../components/HeaderHome";

export default {
  name: "DeleteUser",
  components: {
    HeaderHome,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    //Supprimer l'utilisateur
    DeleteUser() {
      const userId = JSON.parse(localStorage.getItem("user")).userId;
      const token = JSON.parse(localStorage.getItem("user")).token;

      axios
        .delete(`http://localhost:3000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          this.message = "Compte supprimé !";
          localStorage.clear();
          setTimeout(function() {
            window.location = "/";
          }, 1500);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-bottom: 100px;
}

.content {
  display: flex;
  justify-content: center;
}

.btn {
  text-decoration: none;
  border: 3px solid var(--color-grey);
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
  background-color: var(--color-blue);
  &__yes:hover {
    background-color: green;
  }
  &__no:hover {
    background-color: var(--color-red);
  }
}

.message-confirm {
  color: red;
}
</style>
