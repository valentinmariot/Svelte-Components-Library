<script>
  import { fly } from 'svelte/transition'

  import AnimatedHamburger from './BurgerMenu.svelte'
  // import logo from './svelte-logo.svg'

  export let open = false
  export let onClick = () => {
    open = !open
  }

  let items = ['qsd','qsdfqdsq', 'qsdfqsd']
</script>

<header>
  <div class="main">
    <div class="logo">
    
    </div>
    <AnimatedHamburger {open} {onClick} />
  </div>

  {#if open}
    <nav>
      {#each items as item}
      <!-- <a href="">Videos</a>
      <a href="">Blogposts</a>
      <a href="">Guides</a>
      <a href="">Portfolio</a>
      <a href="">Milestones</a> -->
        <a  >{item}</a>
      {/each}
    </nav>
  {/if}
</header>

<style>
  header {
    position: relative;
    font-size: 2rem;
    z-index: 2;
  }

  .main {
    display: flex;
    justify-content: space-between;
  }

  a {
    width: 100%;
   cursor: pointer; 
  }
  a:hover{
    background: pink;
  }
  a:active{

  }
  a:focus {

  }
  a:link{
    text-decoration: none;
  }


  nav {
    text-align: center;
    background-color: grey;
    position: absolute;
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
</style>