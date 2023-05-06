<template>
 <div class="content">
   <h1>hello</h1>
   <div class="counter">Count likes: {{ likes }}</div>
   <button @click="addLike">like</button>
   <div class="counter">Count dislikes: {{ dislikes }}</div>
   <button @click="addDislike">dislike</button>
 </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      likes: 0,
      dislikes: 0
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    }
  }
}


</script>

<style scoped>

</style>