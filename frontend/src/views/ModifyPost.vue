<template>
  <div class="ModifyPost">
    <HeaderHome />

    <h1>Souhaitez-vous modifier votre Post ?</h1>
    <form action="" method="post" @submit.prevent="modifyPost()">
      <PostForm
        :messagePost="message"
        submitValue="Modifier"
        classTitle="title"
        idDescription="description"
        :titleValue="title"
        :valueDescription="description"
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
      title: localStorage.getItem("dataInfoTitle"),
      description: localStorage.getItem("dataInfoDescription"),
    };
  },
  methods: {
    modifyPost() {
      let titre = document.getElementById("title").value;
      let description = document.getElementById("description").value;
      let token = JSON.parse(localStorage.getItem("user")).token;
      let postId = localStorage.getItem("idPost");

      axios
        .put(
          `http://localhost:3000/api/posts/${postId}`,
          { titre, description, postId },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          this.title = "";
          this.description = "";
          this.message = "Votre post à bien été modifié";
          setTimeout(function() {
            window.location = "/posts";
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  background-color: var(--color-grey);
  border-radius: 5%;
  margin: 50px auto;
  color: var(--color-blue);
  display: flex;
  width: 40%;
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
  }
}
</style>
