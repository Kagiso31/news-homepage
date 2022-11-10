<template>
  <ul class="header__mobile-menu">
    <li v-for="link in links" :key="link">
      <a href="#">{{ link }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderMenu",
  props: ["links"],
};
</script>
