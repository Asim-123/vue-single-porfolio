<template>
  <div class="skills">
    <h1 class="main-heading mt">Skills</h1>
    <div class="container">
      <div class="left-section">
        <div class="mt">
          <label for="">Html</label><br />
          <progress value="75" max="100"></progress><br />
        </div>
        <div class="mt"> 
          <label for="">Css</label><br />
          <progress value="75" max="100"></progress><br />
        </div>
        <div class="mt">
          <label for="">Javascript</label><br />
          <progress value="75" max="100"></progress>
        </div>
      </div>

      <div class="right-section">
        <div class="mt">
          <label for="">Html</label><br />
          <progress value="75" max="100"></progress><br />
        </div>
        <div class="mt"> 
          <label for="">Css</label><br />
          <progress value="75" max="100"></progress><br />
        </div>
        <div class="mt">
          <label for="">Javascript</label><br />
          <progress value="75" max="100"></progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "appSkills",
});
</script>

<style scoped>
h1 {
  color: white;
  text-align-last: center;
}
label {
  font-size: 20px;
  color: white;
}

.mt {
  margin-top: 50px;
}

.container {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  height: auto;
}

progress {
  width: 500px;
  margin-top: 10px;
  accent-color: #ffbd39;
  height: 30px;

}


@media only screen and (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column ;
    padding-left: 50px;
  }
  progress {
  width: 400px;
  margin-top: 10px;
  accent-color: #ffbd39;
  height: 30px;

}
}
</style>
