<template>
  <div class="app">
    <nav-bar />
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {NavBar}

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
}

</style>