<template>
  <div class="home">
    <img alt="Luis Quezada Logo" src="../assets/logo.png" height="200" width="200">
    <h1>Luis Quezada</h1>
    <p>A Student & Developer in New York City!</p>

    <div class="content">
      <h2 class="headline">
        About Me:
      </h2>
      <p class="about">
        Hey! I'm Luis, a High School Student & Developer currently living in New York City. I am originally from the Dominican Republic! I've been programming for the past three years building websites, bots, tools, and more for both myself and clients that I have gathered during this time. New tech and languages always interest me and I'm always open to learning more! I love to hike and adventure outdoors to see what nature has to offer.
      </p>
      <h2 class="headline">
        My Stack:
      </h2>
      <ul class="langs">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Vue</li>
        <li>MySQL</li>
        <li>Git</li>
      </ul>
    </div>

    <h3 class="headline">
      Here's me holding a monkey btw 😮
    </h3>
    <img alt="Luis Quezada holding a monkey." src="../assets/me.jpeg" class="me">
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
    inline-size: 32.5vw;
    margin: auto;
  }

  .langs {
    list-style-type: none;
    padding: 0;
  }
  .langs li {
    display: inline-block;
    margin: 0 10px;
  }

  .langs li {
    color: #3fa3eb;
    text-decoration: underline dotted;
  }

  h3.headline {
    margin-bottom: 0.5rem
  }

  img.me {
    border-radius: .25rem;
    height: 20rem;
    width: 30rem;
    clip-path: polygon(10% 0, 99% 5%, 90% 100%, 0 95%);
  }

  @media (max-width: 768px) {
    img.me {
      height: 10rem;
      width: 15rem;
    }

    .about {
      inline-size: 99%;
    }
  }
</style>