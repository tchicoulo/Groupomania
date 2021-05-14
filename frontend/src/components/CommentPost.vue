<template>
  <div>
    <label for="comment">Votre commentaire: </label><br />
    <textarea
      name="commentText"
      :class="commentText"
      cols="50"
      rows="4"
      id="comment"
    ></textarea
    ><br />
    <input
      :class="submitClass"
      type="submit"
      value="Ajouter"
      id="submit-comment"
    />
    <div>{{ messageCom }}</div>
  </div>
</template>

<script>
export default {
  name: "CommentPost",
  props: {
    submitClass: String,
    commentText: String,
    messageCom: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  border: 1px solid var(--color-blue);
  border-radius: 5px;
}
#submit-comment {
  background-color: var(--color-grey);
  margin: 5px 0 50px 0;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: green;
    transition: 0.5s;
    color: white;
  }
}
@media (max-width: 425px) {
  textarea {
    width: 200px;
  }
}
</style>
