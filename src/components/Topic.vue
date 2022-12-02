<template>
  <div class="topic">
    <img class="topic__image" :src="require(`@/assets/images/${img}`)" />
    <div class="topic__text">
      <div class="topic__number">{{ topicnum }}</div>
      <h2 class="topic__heading">
        <a href="#">{{ heading }}</a>
      </h2>
      <p class="topic__body">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic",
  props: {
    img: String,
    topicnum: String,
    heading: String,
    body: String,
  },
};
</script>
