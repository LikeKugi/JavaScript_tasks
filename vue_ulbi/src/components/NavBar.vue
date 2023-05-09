<template>
  <nav class="nav">
    <h2 class="nav__title" @click="$router.push('/')">Posts logo</h2>
    <div class="nav__box">
      <ul class="nav__list">
        <li class="nav__item"><my-button class="btn" @click="$router.push('/')">Main</my-button></li>
        <li class="nav__item"><my-button class="btn" @click="$router.push('/posts')">Posts</my-button></li>
        <li class="nav__item"><my-button class="btn" @click="$router.push('/about')">About us</my-button></li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'nav-bar',
}
</script>

<style lang="scss"
       scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  background-color: linen;
  box-shadow: 2px 2px 4px darkslategray;
  &__list {
    display: flex;
    list-style-type: none;
  }
  &__item {
    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
}
</style>