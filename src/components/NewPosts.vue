<template>
  <section class="posts">
    <h1 class="posts__heading">New</h1>
    <SinglePost
      title="Hydrogen VS Electric Cars"
      body="Will hydrogen-fueled cars ever catch up to EVs"
    />
    <SinglePost
      title="The Downsides of AI Artistry"
      body="What are the possible adverse effects of on-demand AI image generation"
    />
    <SinglePost
      title="Is VC Funding Drying Up?"
      body="Private funding by VC firms is down 50% YOY. We take a look at what that means."
    />
  </section>
</template>

<script>
import SinglePost from "./SinglePost.vue";

export default {
  name: "NewPosts",
  components: {
    SinglePost,
  },
};
</script>
