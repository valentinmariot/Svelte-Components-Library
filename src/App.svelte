<script>
    import Modal from "./Modal.svelte";
    let modal;
    let current = 'sup';
  </script>
  <button class= 'firstButton' on:click={() => modal.show()}>Deleted count</button>
  
  <Modal bind:this={modal}>
    <h2>Modal title</h2>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    </p>
    <button on:click={() => modal.hide()}>Cancel</button>
    <button class="{current === 'sup' ? 'selected' : ''}" on:click="{() => modal.hide()}"> Yes, deleted it </button>
  
  </Modal>
  
  <style>
    .firstButton {
        background-color: aqua;
        /* justify-content: center; */
        /* margin: 0; */
        /* display: flex; */
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 1rem;
        margin: 10% auto;
    }

    button {
      position: block;
      /* border: 3px; */
      background: #F582AE;
      border-radius: 3px;
      width: 119px;
      height: 62px;
    }
    .selected {
        background: #F9BCC9;
        color: #D04077
    }
  </style>
  
  