<template>
  <div class="home">
    <div class="title">
      <div class="logo">
        <img alt="Luis Quezada Logo" src="../assets/logo.png">
      </div>
      <div class="details">
        <h1>Luis Quezada</h1>
        <p>Student & Developer in New York City!</p>
      </div>
    </div>

    <div class="about">
      <h2 class="title">
        About Me
      </h2>
      <p class="desc">
        I'm Luis! <br>
        A High School student in NYC, and a self-taught developer. I'm passionate about technology and the impact it has on the world. I've been coding for 4 years now, and have never looked back. Every day I'm learning something new, and I'm constantly excited for the future!
      </p>

      <h2 class="title">
        Outside of Tech
      </h2>
      <p class="desc">
        I love the outdoors and nature. Hiking, backpacking, and camping is where I find my peace. Just being in the woods, away from the city, is where I feel most at home. I also love going to the gym and working out. It's a great way to clear my mind and stay healthy.
      </p>

      <h2 class="title">
        What I'm Working On
      </h2>
      <p class="desc">
        I'm currently working on <a href="https://intellisoftlabs.com" target="_blank">Intellisoft Labs</a>, a Software Company. We want small business owners to have access to affordable, high-quality, and easy-to-use software that also helps them grow their business.
      </p>
    </div>
    
    <img alt="Luis Quezada holding a monkey." src="../assets/me.jpeg" class="me">
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
  .home {
    margin-top: 2rem;
    padding: 1rem;
  }

  h1, h2, p {
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .title h1 {
    font-size: 3rem;
    text-decoration: underline dotted;
  }

  .title p {
    font-size: 1.5rem;
  }

  .title img {
    height: 7rem;
    border-radius: 50%;
  }

  .about {
    inline-size: 50%;
  }

  .about .title {
    font-size: 2rem;
  }

  .about .desc {
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }

  .about .desc a {
    color: #3fa3eb;
  }

  img.me {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: .75rem;
    height: 20rem;
    clip-path: polygon(10% 0, 99% 5%, 90% 100%, 0 95%);
    transition: all 0.5s ease;
  }

  img.me:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: all 0.5s ease;
  }

  @media (max-width: 768px) {
    img.me {
      height: 10rem;
    }
  }
</style>
