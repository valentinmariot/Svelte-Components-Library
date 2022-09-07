<script>
  import { fly } from 'svelte/transition'

  import BurgerMenu from './BurgerMenu.svelte'

  export let open = false
  export let onClick = () => {
    open = !open
  }
  export let isLeft = undefined
  export let items = ['item 1','item 2', 'item 3']
</script>

<header class={isLeft ? 'isLeft' : ''} >
  <div class="main">
    <div class="logo">
    
    </div>
    <BurgerMenu {open} {onClick} />
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
    /* display: flex; */
  }
  header.isLeft {
    display: flex;
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
    top: 86px;
    width:100%;
  }
</style>