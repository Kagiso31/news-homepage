<template>
  <div class="post">
    <h2 class="post__heading">
      <a href="#">{{ title }}</a>
    </h2>
    <p class="post__body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    title: String,
    body: String,
  },
};
</script>
