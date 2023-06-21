<template>
  <div class="home">
    <img alt="Luis Quezada Logo" src="../assets/logo.png" height="200" width="200">
    <h1>Luis Quezada</h1>
    <p>A Student & Developer in New York City!</p>

    <div class="content">
      <h2 class="headline">
        A little about me:
      </h2>
      <p class="about">
        Hey! I'm Luis, a proficient developer and high school student living in New York City, born in Dominican Republic. I have three years of programming experience, having built websites, bots, tools, and other digital products for both personal and client-based projects. My passion for technology and programming languages drives me to continually expand my knowledge and skills. Beyond programming, I am an outdoor enthusiast who loves exploring the world through hiking and camping.
      </p>
      <h2 class="headline">
        Known Languages & Technologies:
      </h2>
      <ul class="langs">
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Next JS</li>
        <li>Vue JS</li>
        <li>HTML/CSS</li>
        <li>Lua</li>
        <li>MySQL</li>
        <li>Prisma</li>
        <li>Git</li>
        <li>Node</li>
        <li>CLI</li>
        <li>CI/CD</li>
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
    max-width: 30rem;
    margin: auto;
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
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: .75rem;
    height: 20rem;
    width: 30rem;
    clip-path: polygon(10% 0, 99% 5%, 90% 100%, 0 95%);
    transition: all 0.5s ease;
  }

  img.me:hover {
    transform: scale(1.1);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: all 0.5s ease;
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