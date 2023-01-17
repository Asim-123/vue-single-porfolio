<template>
  <div class="header">
    <header>
      <div class="menu">
        <h1>Asim</h1>
        <button @click="toggleMenu">Hire Me</button>
        <!--<img src="../assets/icon.png" />-->
      </div>
      <!--<div class="nav">
        <ul :class="{ active: menuBtn }">
          <li><a href="#home">Home</a></li>
          <li><a href="#about"> About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="">Service</a></li>
          <li><a href=""> Skills</a></li>
          <li><a href="">Hire Me</a></li>
          <li><a href=""> Contact</a></li>
        </ul>
      </div>-->
      
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "appHeader",
  setup() {
    let menuBtn = ref(false);
    const toggleMenu = () => {
      if (menuBtn.value === false) {
        menuBtn.value = true;
      } else if (menuBtn.value === true) {
        menuBtn.value = false;
      }
      console.log(menuBtn.value);
    };

    let scrollValue = ref(false);
    let scrollHome = ref("home");
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const scrollToView = () => {};

    return { toggleMenu, menuBtn, scrollHome };
  },
});
</script>

<style scoped>
header {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000000;
  color: white;
  width: 100%;
}

.menu {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

/*-.active {
  display: none;
}
ul {
  display: flex;
  gap: 50px;
}
li {
  list-style: none;
  cursor: pointer;
}
li:hover {
  color: #ffbd39;
  transition: 1s;
}
img {
  display: none;
}

a {
  text-decoration: none;
  color: white;
}
*/
button {
  background:#ffbd39;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  width: 150px;
  height: 40px;
}
button:hover {
  transition: 1s;
  transform: translateX(10px);
}

@media only screen and (max-width: 600px) {
  /*header {
    position: fixed;
    display: block;
  }*/
  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  /*.nav ul {
    transition: 1s;
  }

  ul {
    display: block;
  }
  img {
    display: flex;
    cursor: pointer;
  }*/
}
@media only screen and (max-width: 798px) {
  /*header {
    position: fixed;
    display: block;
  }*/
  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
 /*.nav {
    text-align: center;
  }
  .nav ul {
    transition: 1s;
  }

  ul {
    display: block;
  }
  img {
    display: flex;
    cursor: pointer;
  }*/
}
</style>
