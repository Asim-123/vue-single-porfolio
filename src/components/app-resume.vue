<template>
  <div class="resume">
    <h1 class="main-heading">Resume</h1>
    <h2 class="main-h2">
      My Name Is Asim I Am From Pakistan.<br />I Am Experienced Web Developer
      and Web App Developer
    </h2>
    <section class="resume-section">
      <div class="container">
        <div class="card">
          <h1>2014-2015</h1>
          <h2>Master Degree of Design CAMBRIDGE UNIVERSITY</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div class="card2 card">
          <h1>2014-2015</h1>
          <h2>Master Degree of Design CAMBRIDGE UNIVERSITY</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div class="card2 card">
          <h1>2014-2015</h1>
          <h2>Master Degree of Design CAMBRIDGE UNIVERSITY</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div class="card2 card">
          <h1>2014-2015</h1>
          <h2>Master Degree of Design CAMBRIDGE UNIVERSITY</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div class="card2 card">
          <h1>2014-2015</h1>
          <h2>Master Degree of Design CAMBRIDGE UNIVERSITY</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div class="card2 card">
          <h1>2014-2015</h1>
          <h2>Master Degree of Design CAMBRIDGE UNIVERSITY</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "appResume",
});
</script>

<style scoped>
.resume {
  color: white;
  height: auto;
  width: 100%;
  padding-top: 50px;
}
.main-heading {
  text-align: center;
}
.main-h2 {
  text-align: center;
}
h1 {
  color: #ffbd39;
}

.container {
  margin: 20px;
  display: grid;
  width: 1200px;
  height: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.card {
  background-color: #343a40;
  text-align: left;
  padding: 30px;
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
  .card {
  background-color: #343a40;
  text-align: left;
  padding: 30px;
  width: 450px;
}
}
</style>
