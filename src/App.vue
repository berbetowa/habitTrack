<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.jpeg" width="125" height="125"/>
      <nav>
        <!--        <RouterLink to="/">Home</RouterLink>-->
        <!--        <RouterLink to="/about">About</RouterLink>-->
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/addhabit">Add Habit</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  background: var(--color-background-nav);
  line-height: 1.5;
  max-height: 100vh;
  padding: 0 1.5rem;
}

.logo {
  display: block;
  border-radius: 15px;
  width: 5rem;
  height: 5rem;
  margin: 0.5rem auto 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: block;
  color: var(--color-text);
  background: var(--color-background-soft);
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  margin: 0.7rem;
}

nav a.router-link-exact-active {
  color: var(--hbt-white);
}

nav a:hover {
  background: var(--color-text);
  color: var(--color-background-soft);
}


nav a:first-of-type {
  border: 0;
}
</style>
