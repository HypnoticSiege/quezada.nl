<template>
  <div class="projects">
    <h1>My Projects</h1>
    <p>
      Here are some of my latest/best projects!
    </p>
    <hr />
    <div class="card-group">
      <div class="card">
        <h3 class="card-title">
          Snapout
        </h3>
        <p class="card-text">
          A Mental Health Awareness site to inform people on various mental health disorders or help those struggling with them currently.
        </p>
        <div class="card-butons">
            <a class="btn" href="https://snapout.nl" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          Motivational Mornings
        </h3>
        <p class="card-text">
          A self-hosted service to help you wake up a tiny bit better in the morning with a SMS Message including jokes and quotes for you!     
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/motivational-mornings" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          xLogging
        </h3>
        <p class="card-text">
          Have FiveM player join and leave logs with some information about the user be sent to your Discord Server. Written in JavaScript of course.
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/xLogging" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          Discord x Twitch Bot
        </h3>
        <p class="card-text">
          A single process meant to make it easier for streamers to have a Twitch Bot and Discord Bot running with minimal impact on their stream.
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/Discord-x-Twitch" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          Discord Light Controller
        </h3>
        <p class="card-text">
          Have a Discord Bot to change your Lifx Smart Light color or state with ease. You can use plain-text colors or a HEX value to change the color.
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/discord-light-controller" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          FiveM Playtime Bot
        </h3>
        <p class="card-text">
          A simple Discord Bot that makes a request to your FiveM Server to see a user's Playtime on your server then formats it into human readable text. 
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/fivem-playtime-bot" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          xDiscord
        </h3>
        <p class="card-text">
          An advanced FiveM Discord RPC written in Lua. With changing icons for different player states and dynamic text depending on the user's action.
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/xDiscord" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          xMiranda
        </h3>
        <p class="card-text">
          A Miranda Card script for FiveM that just displays a miranda card on your screen and plays and animation for you to read off to your inmates.
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/xMiranda" target="_blank">View More</a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">
          Discord Buttons RPC
        </h3>
        <p class="card-text">
          A process you can run on your personal machine with Node to have a Discord Rich Presence on your profile with buttons!
        </p>
        <div class="card-butons">
            <a class="btn" href="https://github.com/HypnoticSiege/Discord-Buttons-RPC" target="_blank">View More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView'
}
</script>

<style scoped>
  h1, h2, h3 {
    margin-bottom: 0rem;
    font-size: 25px;
    font-weight: 800;
  }

  p, ul {
    margin-top: 0rem;
  }

  hr {
    width: 10%;
  }

  .projects {
    margin: auto;
  }

  .card-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 15.5vw
  }

  .card {
    flex: 0 1 25.75%;
    margin: 10px;
    border-radius: .5rem;
    background-color: var(--background-color-secondary);
    box-shadow: 5px 5px 5px var(--accent-color);
    min-height: 13.5rem;
  }

  .card-text {
    padding: 5px;
  }

  .card-buttons {
    position:absolute;
    width:100%;
    bottom:0px;
  }

  a.btn {
    background-color: var(--nav-link-active);
    text-decoration: none;
    color: var(--text-primary-color);
    padding: 7.5px;
    border-radius: .25rem;
  }

  @media (max-width: 900px) {
    .card-group {
        width: 100vw;
        margin-left: 0vw;
        padding-right: 10px;
    }

    .card {
      flex: 0 1 90%;
      margin: 10px;
      min-width: 40vw;
      min-height: 27vh;
    }
}
</style>
