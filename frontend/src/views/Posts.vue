<template>
  <div class="posts">
    <HeaderHome />
    <router-link class="new-post" to="/newpost"
      >Créer un nouveau Post</router-link
    >
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";

export default {
  name: "Posts",
  components: {
    HeaderHome,
  },
};
</script>

<style lang="scss" scoped>
$color-red: rgb(209, 81, 90);
$color-blue: rgb(9, 31, 67);
$color-grey: rgb(214, 214, 214);
.new-post {
  background-color: $color-red;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
</style>
