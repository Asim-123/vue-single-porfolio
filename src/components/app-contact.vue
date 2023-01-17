<template>
  <div class="contact">
    <form action="">
      <div class="mt">
        <label for="">Name</label><br />
        <input type="text" placeholder="Your Name" /><br />
      </div>
      <div class="mt">
        <label for="email">Email</label><br />
        <input type="text" placeholder="Your Email" /><br />
      </div>
      <div class="mt">
        <label for="subject">Subject</label><br />
        <input type="text" placeholder="Subject" /><br />
      </div>
      <div class="mt">
        <label for="emaim">Message</label><br />
        <textarea name="" id="" cols="30" rows="10" placeholder="Drop your Message here"></textarea><br />
      </div>
      <button class="mt">Hire Me</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "appContact",
});
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
label {
  color: white;
  font-size: 20px;
}
.mt {
  margin-top: 20px;
}
input {
  width: 400px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px;
}
textarea {
 width: 400px;
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
