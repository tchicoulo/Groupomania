<template>
  <div>
    <div class="form-row">
      <label for="title">Titre</label><br />
      <input type="text" name="title" :id="idTitle" required />
    </div>
    <div class="form-row">
      <label for="description">Description</label><br />
      <input type="text" name="description" :id="idDescription" required />
      <div class="message-post">{{ messagePost }}</div>
    </div>
    <input class="btn-send" type="submit" :value="submitValue" />
  </div>
</template>

<script>
export default {
  name: "PostForm",
  props: {
    idTitle: String,
    idDescription: String,
    messagePost: String,
    submitValue: String,
  },
};
</script>

<style lang="scss" scoped>
.form-row {
  text-align: center;
  margin: 10px;
  width: 70%;
  color: var(--color-blue);
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
</style>
