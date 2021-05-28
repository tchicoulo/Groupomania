<template>
  <div class="postId">
    <HeaderHome />
    <router-link v-if="userId == postIdUser || admin == 1" to="/modifypost"
      ><button class="butn">
        Modifier
      </button>
    </router-link>
    <button
      v-if="userId == postIdUser || admin == 1"
      @click="deletePost()"
      class="butn"
    >
      Supprimer
    </button>
    <div class="message">{{ message }}</div>

    <div v-for="info in postId" :key="info.id" class="post">
      <h1 class="info-title">{{ info.titre }}</h1>
      <h2 class="info-description">{{ info.description }}</h2>
      <h5>Date: {{ info.date.split("T")[0] }}</h5>
    </div>
    <button class="butn butn-com" @click="openComment()">
      {{ valueCommentaire }}
    </button>
    <div class="comment">
      <form method="post" @submit.prevent="sendComment()">
        <CommentPost
          submitClass="butn-comment-sub"
          commentText="description"
          :messageCom="messageCom"
        />
      </form>
    </div>

    <div v-for="comment in comments" :key="comment.id" class="comments">
      <h5>Par :{{ comment.pseudo }}</h5>

      <h4>{{ comment.description_com }}</h4>
      <h5 class="date">
        {{ formatDate(comment.date_com) }}
      </h5>
      <div
        v-if="comment.pseudo == userPseudo || admin == 1"
        class="delete-com"
        @click="deleteComment(comment.id)"
      >
        Supprimer
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";
import CommentPost from "@/components/CommentPost";
import axios from "axios";
import moment from "moment";

export default {
  name: "PostId",
  components: {
    HeaderHome,
    CommentPost,
  },

  data() {
    return {
      userId: JSON.parse(localStorage.getItem("user")).userId,
      userPseudo: JSON.parse(localStorage.getItem("user")).pseudo,
      commentPseudo: null,
      postIdUser: null,
      admin: null,
      valueCommentaire: "Ajouter un commentaire",
      postId: null,
      comments: null,
      token: JSON.parse(localStorage.getItem("user")).token,
      message: "",
      messageCom: "",
      postTitle: "",
    };
  },

  created: function() {
    let path = window.location.pathname;
    let idPost = path.split("/")[2];
    localStorage.setItem("idPost", idPost);

    axios
      .get(`http://localhost:3000/api/posts/${idPost}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((info) => {
        this.postId = info.data;
        localStorage.setItem("postIdUser", info.data[0].id_user);
        // Save des valeurs des inputs dans le localStorage
        this.postIdUser = JSON.parse(localStorage.getItem("postIdUser"));
        this.admin = JSON.parse(localStorage.getItem("user")).admin;

        localStorage.setItem("dataInfoTitle", info.data[0].titre);
        localStorage.setItem("dataInfoDescription", info.data[0].description);
      })
      .catch((err) => console.log(err.response));
  },

  beforeMount() {
    this.getComments();
  },

  methods: {
    //Supprimer un post
    deletePost() {
      let idPost = localStorage.getItem("idPost");

      axios
        .delete(`http://localhost:3000/api/posts/${idPost}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(() => {
          this.message = "Votre post à bien à bien été supprimé";
          setTimeout(function() {
            window.location = "/posts";
          }, 1500);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // Date formaté avece moment.js

    formatDate(date) {
      moment.locale("fr");
      return moment(date).fromNow();
    },

    //Ouvrir la fenetre pour rédiger un commntaire
    openComment() {
      let comment = document.querySelector(".comment");
      comment.classList.toggle("active");
      if (comment.classList.contains("active")) {
        this.valueCommentaire = "Masquer";
      } else {
        this.valueCommentaire = "Ajouter un commentaire";
      }
    },

    //Envoyer un commentaire
    sendComment() {
      let description = document.querySelector(".description").value;
      let postId = JSON.parse(localStorage.getItem("idPost"));
      let userId = JSON.parse(localStorage.getItem("user")).userId;
      axios
        .post(
          `http://localhost:3000/api/posts/${postId}/comments`,
          { description, postId, userId },
          { headers: { Authorization: `Bearer ${this.token}` } }
        )
        .then(() => {
          this.getComments();
        })
        .catch((error) => console.log(error.response));
    },

    //Afficher tous les commentaires
    getComments() {
      let idPost = localStorage.getItem("idPost");

      axios
        .get(`http://localhost:3000/api/posts/${idPost}/comments`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.comments = response.data;
        })
        .catch((error) => console.log(error.response));
    },

    //Supprimer un commentaire
    deleteComment(idComment) {
      axios
        .delete(`http://localhost:3000/api/comments/${idComment}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(() => {
          this.getComments();
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss">
.butn {
  background-color: var(--color-blue);
  color: white;
  text-decoration: none;
  width: 12%;
  height: 20%;
  border-radius: 5px;
  font-size: 20px;
  margin: 15px 0 15px 15px;
  &:hover {
    background-color: var(--color-red);
    transition: 0.5s;
  }
  &-com {
    font-size: 15px;
    height: 50px;
    margin-bottom: 30px;
    &:hover {
      background-color: green;
    }
  }
}

.message {
  margin: 10px 0;
  font-size: 15px;
  font-weight: bold;
  color: green;
}

.post {
  margin: 80px auto 50px auto;
  padding: 100px 0;
  background-color: var(--color-grey);
  width: 50%;
  & h1 {
    color: black;
    text-shadow: 3px 4px 2px white;
  }
}

.comments {
  width: 30%;
  border-bottom: 2px solid var(--color-grey);
  margin: 0 auto;
}

h1,
h2,
h5 {
  text-align: center;
}
.comment {
  display: none;
  &.active {
    display: block;
    animation: fade 0.5s forwards;
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(1.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.date {
  text-align: right;
}

.delete-com {
  margin-bottom: 10px;
  width: 100px;
  border-radius: 5px;
  color: white;
  text-align: center;
  background-color: black;
  &:hover {
    background-color: var(--color-red);
    transition: 0.5s;
  }
}

@media (max-width: 1024px) {
  .butn {
    min-width: 120px;
  }
}
@media (max-width: 425px) {
  div.post {
    padding: 100px 20px;
  }
}
</style>
