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
      <input type="password" name="pass" id="pass" required />
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
    //Inscription
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
            }, 1500);
          }
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
form {
  background-color: var(--color-grey);
  border: 2px solid var(--color-red);
  min-width: 250px;
  border-radius: 10%;
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
  & .form-row {
    text-align: center;
    margin: 10px;
    width: 70%;
    color: var(--color-blue);
  }
}
input {
  font-size: 15px;
  font-weight: bold;
  width: 60%;
  height: 50%;
  border-radius: 5px;
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
  margin-top: 20px;
  min-width: 20px;
  max-width: 100px;
  height: 10%;
  font-size: 15px;
  font-weight: bold;
  color: var(--color-blue);
  &:hover {
    color: white;
    background-color: var(--color-blue);
  }
  &:focus {
    background-color: var(--color-red);
  }
}
</style>
