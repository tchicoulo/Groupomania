<template>
  <div class="Profile">
    <HeaderHome />
    <h1>Page Profile</h1>
    <h2>Informations du compte</h2>
    <h3>Pseudo: {{ pseudo }}</h3>
    <h3>Id: {{ id }}</h3>
    <div class="content">
      <router-link class="btn-delete" to="/deleteuser"
        >Supprimer mon compte</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from "../components/HeaderHome";

export default {
  name: "Profile",
  data() {
    return {
      pseudo: JSON.parse(localStorage.getItem("user")).pseudo,
      id: JSON.parse(localStorage.getItem("user")).userId,
    };
  },
  components: {
    HeaderHome,
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
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.btn-delete {
  text-decoration: none;
  border: 3px solid var(--color-grey);
  background-color: var(--color-red);
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    border: 3px solid var(--color-blue);
  }
}
</style>
