<script setup>
import NavBar from './components/NavBar.vue';
import Loading from "./components/Loading.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="noise"></div>
  <Loading v-if="isLoading"></Loading>
  <input type="radio" id="sage" name="colors" value="sage">
  <input type="radio" id="cream" name="colors" value="cream" checked>
  <input type="radio" id="lilac" name="colors" value="lilac">
  <div class="page-wrapper">
    <NavBar />

    <div class="color-palette">
      <label for="sage"></label>
      <h4>sage</h4>
      <label for="cream"></label>
      <h4>cream</h4>
      <label for="lilac"></label>
      <h4>lilac</h4>
    </div>
    <div class="container">
      <RouterView />
    </div>
    <div class="border_left_top"></div>
    <div class="border_left_bottom"></div>
    <div class="border_right_top"></div>
    <div class="border_right_bottom"></div>
    <div class="middle_deco">
      <div class="middle_deco_left">
        <img class="sparkle" src="/assets/icons/sparkle.svg" />
      </div>
      <div class="middle_deco_right">
        <img class="sparkle" src="/assets/icons/sparkle.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Lato-Regular";
  src: local("Nunito"),
    url('/assets/fonts/Lato-Regular.ttf') format("truetype");
}

@font-face {
  font-family: "Lato-Thin";
  src: local("Nunito"),
    url('/assets/fonts/Lato-Thin.ttf') format("truetype");
}

@font-face {
  font-family: "Lato-Light";
  src: local("Nunito"),
    url('/assets/fonts/Lato-Light.ttf') format("truetype");
}

@font-face {
  font-family: "Lato-Black";
  src: local("Nunito"),
    url('/assets/fonts/Lato-Black.ttf') format("truetype");
}

@font-face {
  font-family: "Kozuka-Mincho-Pro-L";
  src: local("Nunito"),
    url('/assets/fonts/Kozuka-Mincho-Pro-L.ttf') format("truetype");
}

.noise::before {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  /* you can control opacity of noise  */
  opacity: .05;
  z-index: 1000;
  pointer-events: none;
  background: url(./assets/noise.gif);
}

.bottom_circle_spacer {
  width: 100%;
  /* height: 0; */
  display: flex;
  justify-content: start;
}

.circle_four {
  position: absolute;
  overflow: hidden;
  bottom: 400px;
  left: -50px;
  width: 500px;
  height: 300px;
  border-radius: 50%;
  background-size: cover;
  animation: morph4 10s ease infinite alternate;
  opacity: 30%;
  background: linear-gradient(189deg, rgba(0, 0, 0, 0.2607699132492114) 0%, rgba(0, 0, 0, 0) 32%, rgba(0, 0, 0, 0.1882147082018928) 57%, rgba(0, 0, 0, 0) 73%, rgba(0, 0, 0, 0.19136928233438488) 100%);
}

@keyframes morph4 {
  0% {
    transform: rotate(30deg) translate(60px, 175%) scaleX(1) scaleY(0.25);
  }

  100% {
    transform: rotate(40deg) translate(60px, 175%) scaleX(0.75) scaleY(1);
  }
}

.diamond_spacer {
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 5% 0;
}

.pentagon_spacer {
  width: 100%;
  display: flex;
  justify-content: end;
}

.diamond,
.pentagon {
  width: 10vw;
}

.sparkle {
  width: 60px;
  margin: 30px;
}

.middle_deco {
  /* height: 25vw; */
  width: 100vw;
  position: absolute;
  top: 40vh;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 0;
}

.middle_deco_left,
.middle_deco_right {
  background-color: transparent;
  height: 20vh;
  width: 120px;
  display: flex;
}

.container {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  scroll-behavior: smooth;
  /* padding: 7%; */
  z-index: 1;
}

.border_left_top {
  position: absolute;
  top: 0;
  left: 0;
  height: 30vh;
  border-left: 1px solid #000;
  margin: 60px;
}

.border_left_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30vh;
  border-left: 1px solid #000;
  margin: 60px;
}

.border_right_top {
  position: absolute;
  top: 0;
  right: 0;
  height: 30vh;
  border-right: 1px solid #000;
  margin: 60px;
}

.border_right_bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 30vh;
  border-right: 1px solid #000;
  margin: 60px;
}

.container::-webkit-scrollbar {
  width: 0px;
  background: transparent;
  -webkit-appearance: none;
  /* remove scrollbar */
}

@media only screen and (max-width: 768px) {
  .circle_four {
    position: absolute;
    overflow: hidden;
    bottom: 250px;
    left: -50px;
    width: 300px;
    height: 200px;
    /* opacity: 200%; */
  }

  .diamond,
  .pentagon {
    width: 15vw;
  }

  .middle_deco_left,
  .middle_deco_right {
    width: 60px;
  }

  .sparkle {
    width: 40px;
    margin: 10px;
  }

  .border_left_top,
  .border_left_bottom,
  .border_right_top,
  .border_right_bottom {
    margin: 30px;
    height: 35vh;
  }

  /* .container {
    padding: 4vw;
  } */
}
</style>
