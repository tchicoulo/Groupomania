<template>
  <div class="Profile">
    <HeaderHome />
    <h1>Page Profile</h1>
    <h2>Informations du compte</h2>
    <h3>Compte: {{ pseudo }}</h3>
    <h3 v-if="id != 26">Id: {{ id }}</h3>
    <div class="content">
      <router-link v-if="admin == 0" class="btn-delete" to="/deleteuser"
        >Supprimer mon compte</router-link
      >
      <h2 v-if="admin == 1">
        Voulez-vous supprimer definitivement un utilisateur ?
      </h2>
      <div v-if="admin == 1">
        <div v-for="user in users" :key="user.id">
          <!-- 26 est l'id du compte admin -->
          <div class="container-user" v-if="user.id != 26">
            <h3>Id: {{ user.id }}</h3>
            <h3>Compte: {{ user.pseudo }}</h3>
            <button
              v-if="user.id != 26"
              @click="deleteUser(user.id)"
              class="delete-user"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from "../components/HeaderHome";
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      users: null,
      pseudo: JSON.parse(localStorage.getItem("user")).pseudo,
      id: JSON.parse(localStorage.getItem("user")).userId,
      token: JSON.parse(localStorage.getItem("user")).token,
      admin: JSON.parse(localStorage.getItem("user")).admin,
    };
  },
  components: {
    HeaderHome,
  },
  beforeMount() {
    this.getUsers();
  },
  methods: {
    //Supprimer un utilisateur
    deleteUser(userId) {
      let parsedUserId = JSON.parse(userId);
      axios
        .delete(`http://localhost:3000/api/users/${parsedUserId}`, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then(() => {
          this.getUsers();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    //Afficher tous les utilisateurs (admin mode)
    getUsers() {
      let token = JSON.parse(localStorage.getItem("user")).token;

      axios
        .get("http://localhost:3000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((users) => {
          this.users = users.data.results;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-bottom: 100px;
}

h3,
h2 {
  text-align: center;
}

.content {
  margin: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btn-delete {
  text-decoration: none;
  border: 3px solid var(--color-grey);
  background-color: var(--color-red);
  color: white;
  width: 40%;
  padding: 16px 32px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    border: 3px solid var(--color-blue);
  }
}
.container-user {
  margin: 40px 0;
  border-radius: 5px;
  width: 235px;
  font-size: 12px;
  background-color: var(--color-grey);
  border: 1px solid black;
  color: black;
}

.delete-user {
  background-color: var(--color-blue);
  color: white;
  border-radius: 5px;
  float: right;
  &:hover {
    border: 1px solid black;
    background-color: red;
  }
}
</style>
