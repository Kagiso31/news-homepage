<template>
  <div class="container">
    <Header />
    <main>
      <div class="grid-container">
        <Hero />
        <NewPosts />
        <Topic
          topicnum="01"
          img="image-retro-pcs.jpg"
          heading="Reviving Retro PCs"
          body="What happens when old PCs are given modern upgrades?"
        />
        <Topic
          topicnum="02"
          img="image-top-laptops.jpg"
          heading="Top 10 Laptops of 2022"
          body="Our best picks for various needs and budgets."
        />
        <Topic
          topicnum="03"
          img="image-gaming-growth.jpg"
          heading="The Growth of Gaming"
          body="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import NewPosts from "./components/NewPosts.vue";
import Topic from "./components/Topic.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    NewPosts,
    Topic,
  },
};
</script>
