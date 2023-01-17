<template>
  <div class="hero">
    <section class="hero-section">
      <div class="left-section">
        <h5>Muhammad Asim</h5>
        <h1>I am a <span class="span">Web Developer</span> from Pakistan</h1>
        <button>Hire Me</button>
      </div>
      <div class="right-section">
        <img src="../assets/pic.jpg" alt="" width="300" height="500" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "appHero",
});
</script>

<style scoped>
.hero-section {
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  transition: 2s;
  color: white;
  height: 100vh;
  flex-wrap: wrap;
}
.left-section {
  width: 40%;
  padding-top: 100px;
  margin-left: 60px;
}
.right-section {
  padding-top: 60px;
  margin-right: 100px;
}
h1 {
  font-size: 50px;
}
h5 {
  color: #ffbd39;
  font-size: 30px;
}
.span {
  color: #ffbd39;
}
button {
  background: #ffbd39;
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
  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
  .right-section {
    padding-top: 50px;
    margin-left: 20px;
  }
}
@media only screen and (max-width: 798px) {
  .hero-section {
    display: block;
    height: auto;
  }
  .right-section {
    padding-top: 50px;
    margin-left: 20px;
  }
}
</style>
