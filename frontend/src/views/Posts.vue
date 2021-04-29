<template>
  <div class="posts">
    <HeaderHome />
    <div class="container">
      <router-link class="new-post" to="/newpost"
        >Créer un nouveau Post</router-link
      >
    </div>
    <div class="content-posts" v-for="post in posts" :key="post.id">
      <router-link class="post" :to="['/post/', post.id]">
        <h1>{{ post.titre }}</h1>
        <h3>{{ post.description }}</h3>
        <h4>Posté par: {{ post.pseudo }}</h4></router-link
      >
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "Posts",
  components: {
    HeaderHome,
    Footer,
  },
  data() {
    return {
      posts: null,
    };
  },
  created: function() {
    let token = JSON.parse(localStorage.getItem("user")).token;

    axios
      .get("http://localhost:3000/api/posts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((info) => {
        console.log(info.data);
        this.posts = info.data;
      })
      .catch((err) => console.log(err.response));
  },
};
</script>

<style lang="scss" scoped>
.post {
  text-decoration: none;
}

.container {
  display: flex;
  justify-content: center;
}

h1 {
  color: var(--color-red);
  text-shadow: 1px 3px 3px white;
}
h3 {
  color: var(--color-blue);
}
h4 {
  color: white;
  text-shadow: 1px 1px 5px black;
}

.content-posts {
  padding: 25px 0;
  background-color: var(--color-grey);
  margin: 0 auto;
  border-radius: 5px;
  width: 60%;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  &:hover {
    border: 3px solid var(--color-blue);
    transform: scale(1.05);
    transition: 0.3s, border 0.1s;
  }
}
.new-post {
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
}
</style>
