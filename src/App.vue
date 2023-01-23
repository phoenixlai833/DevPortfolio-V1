<script setup>
import NavBar from './components/NavBar.vue';
import SectionTitle from './components/SectionTitle.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Loading from "./components/loading.vue";
</script>

<template>
  <Loading v-if="isLoading"></Loading>
  <input type="radio" id="sage" name="colors" value="sage" checked>
  <input type="radio" id="cream" name="colors" value="cream">
  <input type="radio" id="lilac" name="colors" value="lilac">
  <div class="noise"></div>
  <div class="page-wrapper">
    <NavBar />
    <div class="color-palette">
      <label for="sage"></label>
      <h4>Sage</h4>
      <label for="cream"></label>
      <h4>cream</h4>
      <label for="lilac"></label>
      <h4>Lilac</h4>
    </div>
    <div class="container">
      <Home />
      <div class="diamond_spacer"><img class="diamond" src="/assets/icons/diamond.svg" /></div>
      <SectionTitle titleText="Projects" />
      <Projects />
      <SectionTitle titleText="About" />
      <About />
      <div class="pentagon_spacer"><img class="pentagon" src="/assets/icons/pentagon.svg" /></div>
      <SectionTitle titleText="Contact" />
      <Contact />
      <div class="bottom_circle_spacer">
        <div class="circle_four"></div>
      </div>
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
    Loading, Home, Projects, About, Contact
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

.non_inter {
  transform: translateY(100%);
  opacity: 0;
}

.inter {
  animation: morph 30s ease infinite;
  transform: translateY(0px);
  opacity: 100;
}

.blue_Sec {
  width: 400px;
  height: 200px;
  background-color: blue;
  opacity: 50%;
  transition: all 1s;
}

.intersection {
  background-color: red;
  opacity: 20%;
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

.container {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  scroll-behavior: smooth;
  padding: 7%;
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
  /* make scrollbar transparent */
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

  .middle_deco_left,
  .middle_deco_right {
    width: 60px;
  }

  .sparkle {
    width: 40px;
    margin: 10px;
  }

  .diamond,
  .pentagon {
    width: 15vw;
  }

  .border_left_top,
  .border_left_bottom,
  .border_right_top,
  .border_right_bottom {
    margin: 30px;
    height: 35vh;
  }

  .container {
    padding: 4vw;
  }
}
</style>
