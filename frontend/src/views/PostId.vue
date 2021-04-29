<template>
  <div class="postId">
    <HeaderHome />

    <button>Modifier</button>
    <button>Supprimer</button>

    <div v-for="info in postId" :key="info.id" class="container-post">
      <h1>{{ info.titre }}</h1>
      <h2>{{ info.description }}</h2>
      <h5>Date: {{ info.date.split("T")[0] }}</h5>
    </div>
    <button>Ajouter un commentaire</button>

    <!-- Afficher commentaire dans une fentre dessous -->
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";
import axios from "axios";

export default {
  name: "PostId",
  components: {
    HeaderHome,
  },
  data() {
    return {
      postId: null,
    };
  },
  created: function() {
    let path = window.location.pathname;
    let idPath = path.split("/")[2];
    let token = JSON.parse(localStorage.getItem("user")).token;
    axios
      .get(`http://localhost:3000/api/posts/${idPath}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((info) => {
        console.log(info.data);
        this.postId = info.data;
      })
      .catch((err) => console.log(err.response));
  },
};
</script>

<style>
button {
  width: 10%;
}
h1,
h2,
h5 {
  text-align: center;
}
</style>
