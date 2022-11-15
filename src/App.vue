<template>
  <div class="container">
    <Header />
    <main>
      <div class="hero-and-new">
        <Hero />
        <NewPosts />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import NewPosts from "./components/NewPosts.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    NewPosts,
  },
};
</script>
