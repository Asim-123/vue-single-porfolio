<template>
  <div class="footer">
    <h1>Copyright ©2023 All rights reserved</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "appFooter",
});
</script>

<style scoped>
.footer {
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #ffbd39;
}
h1 {
  color: white;
}
@media only screen and (max-width: 600px) {
  .container {
    margin: 20px;
    display: grid;
    width: 1200px;
    height: auto;
    grid-template-columns: 550px;
    grid-gap: 20px;
  }
}
</style>
