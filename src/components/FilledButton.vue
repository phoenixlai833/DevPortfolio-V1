<template>
  <div>
    <a :href="link">
      <h4>{{ buttonText }}</h4>
    </a>
  </div>
</template>

<script>
export default {
  name: "FilledButton",
  props: ["buttonText", "link"]
};
</script>

<style scoped>
div {
  /* width: 100px; */
  /* height: 10px; */
  background-color: black;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;
}

div:hover {
  opacity: 50%;
  /* transition: all 0.3s ease-in-out; */
}

h4 {
  color: var(--theme-color);
}
</style>
