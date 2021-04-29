<template>
  <footer>
    <small>Final project DevWeb OpenClassrooms</small>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 100px;
  background-color: var(--color-grey);
  border-top: 8px solid var(--color-blue);
  border-radius: 5%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
small {
  color: white;
  font-size: 20px;
  padding: 15px 25px 0 0;
  text-shadow: 2px 2px 2px var(--color-blue);
}
</style>
