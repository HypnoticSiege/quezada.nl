<template>
  <div class="home">
    <img alt="HS Logo" src="../assets/logo.png" height="200" width="200">
    <h1>Luis Quezada</h1>
    <p>A Student & Developer in New York City!</p>
    <div class="about">
      <h2>About Me:</h2>
      <p class="about">
        Hey I'm Luis! I have been programming for the past three years building a multitude of different websites tools for myself and clients. I love to learn and adapt to new technologies and languages. With my experience I have learned a lot of tech & languages which are listed below!
      </p>
      <ul>
        <li><a>HTML/CSS</a></li>
        <li><a>JavaScript</a></li>
        <li><a>TypeScript</a></li>
        <li><a>Vue</a></li>
        <li><a>MySQL</a></li>
        <li><a>Git</a></li>
      </ul>
    </div>
    <img alt="Me" src="../assets/me.jpeg" class="me">
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
  h1, h2, h3 {
    margin-bottom: 0rem;
  }
  p, ul {
    margin-top: 0rem;
  }
  h1 {
    text-decoration: underline dotted;
  }
  .about {
    inline-size: 50vw;
    margin: auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #3fa3eb;
    text-decoration: underline dotted;
  }

  img.me {
    border-radius: 1rem;
    height: 20rem;
    width: 30rem;
  }

  @media (max-width: 768px) {
    img.me {
      height: 10rem;
      width: 15rem;
    }
  }
</style>