<template>
  <div class="newpost">
    <HeaderHome />

    <h1>Nouveau Post !</h1>
    <form action="" method="post" @submit.prevent="submitPost()">
      <PostForm
        :messagePost="message"
        submitValue="Créer"
        classTitle="title"
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
    //Envoi du post
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
        .then(() => {
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
  margin: 0 auto;
  color: var(--color-blue);
  display: flex;
  width: 60%;
  font-size: 18px;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  margin-bottom: 80px;
}
@media (max-width: 1024px) {
  form {
    min-width: 280px;
    margin-bottom: 30px;
  }
}
</style>
