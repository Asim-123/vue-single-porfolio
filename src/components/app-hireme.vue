<template>
  <div class="hire">
    <div class="container">
      <h1>I am available for <span>Freelancing</span></h1>
      <button>Hire Me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "appHire",
});
</script>

<style scoped>
.hire {
 display: flex;
 margin-top:60px;
 justify-content: center;
 align-items: center;
 color: white;
 height: 60vh;
 background: url('../assets/bg.jpg');
 background-repeat: no-repeat;
 background-size: cover;
 opacity: 10;
}

h1 {
    font-size: 50px;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
span {
    color: #ffbd39;
}
button {
  background: #000000;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  width: 200px;
  height: 50px;
}
button:hover {
  transition: 1s;
  transform: translateX(10px);
}

@media only screen and (max-width: 600px) {

    .container {
    display: block;
    text-align: center;
}

}
</style>
