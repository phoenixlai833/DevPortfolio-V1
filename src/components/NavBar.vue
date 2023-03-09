<script setup>
import FilledButton from './FilledButton.vue';
</script>

<template>
  <nav class="navBar">
    <!-- <router-link to="/">Home</router-link> -->
    <a href="#Home">
      <h4>Home</h4>
    </a>
    <a href="#Projects">
      <h4>Projects</h4>
    </a>
    <a href="#About">
      <h4>About</h4>
    </a>
    <a href="#Contact">
      <h4>Contact</h4>
    </a>
    <a href="/resumePL_2023.pdf" target="blank">
      <FilledButton buttonText=" Résumé" />
    </a>

  </nav>
  <nav class="small_navBar">
    <div class="small_navBar_icon" @click="show = !show" @mouseover="show = true">
      <div class="ring_one" :style="{
        height: show ? '35px' : '10px'
      }">
      </div>
      <div class="ring_two" :style="{
        height: show ? '35px' : '10px'
      }">
      </div>
    </div>
    <Transition duration="550" name="menuDrop">
      <div v-if="show" class="small_navBar_dropdown" @mouseover="show = true" @mouseleave="show = false">
        <div class="small_navBar_items">
          <div class="left_menu_items">
            <a href="#Home">
              <h4>Home</h4>
            </a>
            <a href="#Projects">
              <h4>Projects</h4>
            </a>
            <a href="#About">
              <h4>About</h4>
            </a>
            <a href="#Contact">
              <h4>Contact</h4>
            </a>
          </div>
          <div class="right_menu_items">
            <a href="/resumePL_2023.pdf">
              <FilledButton buttonText="Résumé" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    }
  }
};
</script>

<style scoped>
.menuDrop-enter-active .small_navBar_items,
.menuDrop-leave-active .small_navBar_items {
  transition: all 0.3s ease-in-out;
}

.menuDrop-enter-active .small_navBar_items {
  transition-delay: 0.25s;
}

.menuDrop-enter-from .small_navBar_items,
.menuDrop-leave-to .small_navBar_items {
  transform: translatey(30px);
  opacity: 0.001;
}

.menuDrop-enter-active,
.menuDrop-leave-active {
  transition: all .4s ease-in-out;
}

.menuDrop-enter-from,
.menuDrop-leave-to {
  transform: translateY(-100%);
}

/* .notShown {
visibility: hidden;
} */

/* .small_navBar_icon:hover+.small_navBar_dropdown .left_menu_items,
.small_navBar_icon:hover+.small_navBar_dropdown .right_menu_items {
display: block;
}

.small_navBar_icon:hover+.small_navBar_dropdown {
height: auto;
padding: 5% 0;
} */

.left_menu_items h4 {
  margin-top: 15px;
}

.right_menu_items {
  width: 77px;
}

.right_menu_items,
.left_menu_items {
  /* display: none; */
  transition: all 0.3s ease-in-out;
}

.small_navBar_items {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.small_navBar_dropdown {
  width: 100%;
  height: auto;
  /* height: 0; */
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--theme-color);
  z-index: 2;
  border-bottom: 1px solid black;
  /* display: flex;
justify-content: space-between;
align-items: end; */
  /* transform: translateY(10px); */
  /* animation: 3s linear 1s slideDown; */
  /* padding: 0; */
  /* transition: all 0.3s ease-in-out; */
  padding: 5% 0;
  /* margin-left: 2vw; */
}

.ring_two {
  width: 35px;
  /* height: 10px; */
  border: 1px solid black;
  border-radius: 50%;
  position: fixed;
  top: 4px;
  right: 0;
  display: flex;
  align-items: center;
  margin: 8px 30px 0 0;
  transition: all 0.3s ease-in-out;
}

.ring_one {
  width: 35px;
  /* height: 10px; */
  border: 1px solid black;
  border-radius: 50%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin: 8px 30px 0 0;
  transition: all 0.3s ease-in-out;
}

/* .small_navBar_icon:hover .ring_one,
.small_navBar_icon:hover .ring_two {
width: 35px;
height: 35px;
} */

.small_navBar_icon {
  z-index: 3;
}

.small_navBar {
  visibility: hidden;
}

.navBar {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  /* width: 100vw; */
  height: 60px;
  margin: 0 60px 0 0;
}

.navBar>a {
  margin-left: 60px;
}

@media only screen and (max-width: 768px) {
  .navBar {
    display: none;
    visibility: hidden;
  }

  .small_navBar {
    visibility: visible;
  }

}
</style>
