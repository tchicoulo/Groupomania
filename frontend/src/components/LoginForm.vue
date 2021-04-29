<template>
  <form action="" method="post" @submit.prevent="submitLogIn()">
    <div class="form-row">
      <label for="email">Email</label><br />
      <input type="email" name="email" id="email" required />
      <div class="verif verif_mail">{{ messageMail }}</div>
    </div>
    <div class="form-row">
      <label for="password">Mot de passe </label><br />
      <input type="password" name="password" id="password" required />
      <input class="show-pass" type="checkbox" @click="showPass()" />
      <div class="verif verif_mdp">{{ messagePass }}</div>
      <div class="verif verif_valid">{{ messageValid }}</div>
    </div>
    <input class="btn-send" type="submit" value="Envoyer" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      messagePass: "",
      messageValid: "",
      messageMail: "",
    };
  },
  methods: {
    showPass() {
      let showPass = document.getElementById("password");
      if (showPass.type === "password") {
        showPass.type = "text";
      } else {
        showPass.type = "password";
      }
    },
    submitLogIn() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      axios
        .post("http://localhost:3000/api/users/login", {
          email,
          password,
        })
        .then((response) => {
          this.messageMail = "";
          this.messagePass = "";
          this.messageValid = "Compte validé !";
          localStorage.setItem("user", JSON.stringify(response.data));
          setTimeout(function() {
            window.location = "/posts";
          }, 1500);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.messagePass = "Mot de passe incorrect";
          } else if (err.response.status === 400) {
            this.messageMail = "Email non trouvé";
          } else if (err.response.status === 500) {
            this.messagePass = "Erreur serveur";
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  background-color: var(--color-grey);
  border: 2px solid var(--color-red);
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
  height: 30%;
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
  font-size: 17px;
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

.show-pass {
  width: 5%;
  margin-left: 10px;
}

#password {
  margin-left: 30px;
  width: 60%;
}

.verif {
  &_mdp,
  &_mail {
    color: red;
  }
  &_valid {
    color: green;
  }
}
</style>
