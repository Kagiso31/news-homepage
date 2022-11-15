<template>
  <header class="header">
    <nav class="header__navigation">
      <div v-if="showMenu" class="header__overlay"></div>

      <a href="#" class="header__logo">
        <img src="../assets/images/logo.svg" alt="logo image" />
      </a>

      <button
        ref="toggleBtn"
        @click="toggleMenu"
        type="button"
        class="header__toggle"
      >
        <img
          v-if="!showMenu"
          ref="openImg"
          class="header__toggle__open"
          src="../assets/images/icon-menu.svg"
        />
        <img
          v-if="showMenu"
          ref="closeImg"
          class="header__toggle__close"
          src="../assets/images/icon-menu-close.svg"
        />
      </button>

      <ul class="header__links">
        <li v-for="link in links" :key="link">
          <a href="#">{{ link }}</a>
        </li>
      </ul>
    </nav>
    <HeaderMenu :links="links" v-if="showMenu" />
  </header>
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";

export default {
  name: "Header",
  components: {
    HeaderMenu,
  },
  data() {
    return {
      showMenu: false,
      links: ["Home", "New", "Popular", "Trending", "Categories"],
    };
  },
  methods: {
    toggleMenu() {
      if (this.showMenu) {
        //open menu
        this.showMenu = !this.showMenu;
      } else {
        //close menu
        this.showMenu = !this.showMenu;
      }
    },
  },
};
</script>
