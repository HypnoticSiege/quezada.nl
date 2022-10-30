<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <a href="/resume">Resume</a>
  </nav>
  <theme-button  class="theme-button" />
  <router-view/>
</template>

<script>
import ThemeButton from "@/components/ThemeButton.vue";
export default {
  components: { ThemeButton },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--nav-link);
}

nav a.router-link-exact-active {
  color: var(--nav-link-active);
}

/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --nav-link-active: #3fa3eb;
  --nav-link: #2c3e50;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
  --nav-link-active: #3fa3eb;
  --nav-link: #fff;
}

h1, h2, h3, p, h5 {
  color: var(--text-primary-color)
}

body {
  background-color: var(--background-color-primary);
}

.theme-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
}
</style>
