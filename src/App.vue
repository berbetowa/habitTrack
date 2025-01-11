<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="app_wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.jpeg" width="125" height="125"/>
      <nav>
        <RouterLink to="/">
          <font-awesome-icon icon="fa-solid fa-grip"/>
          Dashboard
        </RouterLink>
        <RouterLink to="/habits">
          <font-awesome-icon icon="fa-solid fa-hourglass-half"/>
         My Habits
        </RouterLink>
        <RouterLink to="/dailyplan">
          <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
          Daily Plan
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  background: var(--color-background-nav);
  line-height: 1.5;
  height: 100vh;
  padding: 0 1.5rem;
  min-width: 250px;
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
  font-size: 16px;
  text-align: revert;
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  margin: 0.7rem 0;
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
