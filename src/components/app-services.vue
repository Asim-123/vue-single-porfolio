<template>
    <div class="service">
      <h1 class="main-heading">Services</h1>
      <section class="service-section">
        <div class="container">
          <div class="card">
            <h1>Web Development</h1>
          </div>
          <div class="card2 card">
            <h1>Build Chrome Extension</h1>
          </div>
          <div class="card2 card">
            <h1>App Development</h1>
          </div>
          <div class="card2 card">
            <h1>Api Interegration</h1>
          </div>
          <div class="card2 card">
            <h1>Api Development</h1>
          </div>
          <div class="card2 card">
            <h1>Wordpress</h1>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "appServices",
  });
  </script>
  
  <style scoped>
  .service{
    position: static ;
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
    color: white;
  }
  
  .container {
    margin: 20px;
    display: grid;
    width: 1200px;
    height: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  .card {
    display: flex;
    background-color: #343a40;
    justify-content: center;
    align-items: center;
    padding: 30px;
    height: 200px;
    cursor: pointer;
  }
  
  .card:hover {
    background-color: #ffbd39;
    transition: 1s;
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
    width: 450px;
  }
  }
  </style>
  