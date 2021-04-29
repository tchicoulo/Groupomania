<template>
  <div class="newpost">
    <HeaderHome />

    <h1>Nouveau post !</h1>
    <form action="" method="post" @submit.prevent="submitPost()">
      <PostForm
        :messagePost="message"
        submitValue="Créer"
        idTitle="title"
        idDescription="description"
      />
    </form>
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";
import PostForm from "@/components/PostForm";
import axios from "axios";

export default {
  name: "NewPosts",
  components: {
    HeaderHome,
    PostForm,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    submitPost() {
      let titre = document.getElementById("title").value;
      let description = document.getElementById("description").value;
      let token = JSON.parse(localStorage.getItem("user")).token;
      let id_user = JSON.parse(localStorage.getItem("user")).userId;

      axios
        .post(
          "http://localhost:3000/api/posts",
          { titre, description, id_user },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          this.message = "Votre post à bien été créé";
          setTimeout(function() {
            window.location = "/posts";
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
form {
  background-color: var(--color-grey);
  border-radius: 5%;
  margin: auto;
  color: var(--color-blue);
  display: flex;
  width: 25%;
  height: 350px;
  font-size: 18px;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
