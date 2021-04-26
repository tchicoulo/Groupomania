<template>
  <form action="" method="post" @submit.prevent="submitSignIn()">
    <div class="form-row">
      <label for="pseudo">Pseudo </label><br />
      <input type="text" name="pseudo" id="pseudo" />
    </div>
    <div class="form-row">
      <label for="email">Email</label><br />
      <input type="email" name="email" id="email" required />
    </div>
    <div class="form-row">
      <label for="pass">Mot de passe </label><br />
      <input type="text" name="pass" id="pass" required />
      <div class="verif verif_pass">{{ message }}</div>
      <div class="verif verif_confirmation">{{ confirmation }}</div>
    </div>
    <input class="btn-send" type="submit" value="Envoyer" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "SignupForm",

  data() {
    return {
      message: "",
      confirmation: "",
    };
  },

  methods: {
    submitSignIn() {
      let pseudo = document.getElementById("pseudo").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("pass").value;

      axios
        .post("http://localhost:3000/api/users", {
          pseudo,
          email,
          password,
        })
        .then((response) => {
          if (response.status === 201) {
            this.message = "";
            this.confirmation = "Votre compte à bien été créé !";
            setTimeout(function() {
              window.location = "/";
            }, 2000);
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          this.message =
            "Mot de passe invalide. Minimum 8 caractères dont 1 majuscule et un nombre";
        });
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
  border: 2px solid $color-red;
  border-radius: 10%;
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
  width: 60%;
  height: 35%;
  border-radius: 10%;
}
.verif {
  margin: 10px 0;
  font-size: 15px;
  font-weight: bold;

  &_pass {
    color: red;
  }
  &_confirmation {
    color: green;
  }
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
