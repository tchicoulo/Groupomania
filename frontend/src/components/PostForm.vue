<template>
  <div>
    <div class="form-row">
      <label for="title">Titre</label><br />
      <input
        type="text"
        id="title"
        name="title"
        :class="classTitle"
        :value="titleValue"
        required
      />
    </div>
    <div class="form-row">
      <label for="description">Description</label><br />
      <textarea
        name="description"
        :id="idDescription"
        cols="50"
        rows="05"
        :value="valueDescription"
        required
      ></textarea>
      <div class="message-post">{{ messagePost }}</div>
    </div>
    <input class="btn-send" type="submit" :value="submitValue" />
  </div>
</template>

<script>
export default {
  name: "PostForm",
  props: {
    classTitle: String,
    idDescription: String,
    messagePost: String,
    submitValue: String,
    titleValue: String,
    valueDescription: String,
  },
};
</script>

<style lang="scss" scoped>
.form-row {
  padding: 50px 25px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  text-align: center;
  margin: 5px;
  width: 100%;
  height: 50%;
  color: var(--color-blue);
}

#title {
  font-size: 15px;
  font-weight: bold;
  width: 300px;
  height: 20%;
  border-radius: 5px;
  &:focus {
    box-shadow: 5px 2px 10px white;
  }
}

.message-post {
  margin: 10px 0;
  font-size: 15px;
  font-weight: bold;
  color: green;
}

textarea {
  max-width: 400px;
}

.btn-send {
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 30px;
  width: 100px;
  height: 25%;
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
@media (max-width: 1024px) {
  textarea {
    max-width: 220px;
    height: 200px;
  }
  #title {
    max-width: 200px;
  }
}
</style>
