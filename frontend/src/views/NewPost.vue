<template>
  <div class="newpost">
    <HeaderHome />
    <h1>Nouveau post !</h1>

    <form action="" method="post" @submit.prevent="submitPost()">
      <div class="form-row">
        <label for="title">Titre</label><br />
        <input type="text" name="title" id="title" required />
      </div>
      <div class="form-row">
        <label for="description">Description</label><br />
        <input type="select" name="description" id="description" required />
        <div class="message-post">{{ message }}</div>
      </div>
      <input class="btn-send" type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";

export default {
  name: "NewPosts",
  components: {
    HeaderHome,
  },
  data() {
    return {
      message: "", ////////////
    };
  },
  methods: {
    submitPost() {
      // A REMPLIRRRRRRRRR
    },
  },
};
</script>

<style lang="scss" scoped>
$color-red: rgb(209, 81, 90);
$color-blue: rgb(9, 31, 67);
$color-grey: rgb(214, 214, 214);

form {
  background-color: $color-grey;
  font-family: "Mukta", sans-serif;
  border-radius: 5%;
  margin: auto;
  color: $color-blue;
  display: flex;
  width: 25%;
  height: 350px;
  font-size: 18px;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .form-row {
    text-align: center;
    margin: 10px;
    width: 70%;
    color: $color-blue;
  }
}
input {
  font-size: 15px;
  font-weight: bold;
  width: 80%;
  height: 30%;
  border-radius: 10%;
}

#description {
  height: 100%;
}

.btn-send {
  width: 20%;
  height: 10%;
  font-family: "Mukta", sans-serif;
  font-size: 17px;
  font-weight: bold;
  color: $color-blue;
  &:hover {
    color: white;
    background-color: $color-blue;
  }
  &:focus {
    background-color: $color-red;
  }
}
</style>
