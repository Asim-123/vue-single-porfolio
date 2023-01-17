<template>
  <div class="about">
    <section class="about-section">
      <div class="left-section">
        <img src="../assets/pic.jpg" alt="" width="300" height="500" />
      </div>
      <div class="right-section">
        <h1 class="mt">About me</h1>
        <p class="mt">Four years of experienced Full Stack developer</p>
        <div class="cv">
            <h3 class="mt">Name: <span>Muhammad Asim</span></h3>
            <h3 class="mt">Age: <span class="age">27</span></h3>
            <h3 class="mt">Email: <span>Asim@gmail.com</span></h3>
            <h3 class="mt">Phone: <span>03254785869</span></h3>
        </div>
        <h2 class="mt">100 + projects completed</h2>
        <button class="mt">Download CV</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "appAbout",
});
</script>

<style scoped>
.about-section {
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  padding: 30px;
  color: white;
  padding-right: 50px;
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
span {
    color: #ffbd39;
    margin-left: 20px;
}
.age {
    margin-left: 40px;
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

.mt {
    margin-top: 30px;
}

@media only screen and (max-width: 600px) {
  .about-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    text-align: left;
  }
  .left-section {
   display: none;
  }
}
</style>
