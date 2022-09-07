<script>
    import Modal from "./Modal.svelte";
    let modal;
    let current = 'sup';
  </script>
  <button on:click={() => modal.show()}>Deleted count</button>
  
  <Modal bind:this={modal}>
    <h2>Modal title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation
    </p>
    <button on:click={() => modal.hide()}>Cancel</button>
    <button class="{current === 'sup' ? 'selected' : ''}" on:click="{() => modal.hide()}"> Yes, deleted it </button>
  
  </Modal>
  
  <style>
    button {
      position: block;
      border: 2px solid rgba(0, 24, 88, 0.5);
      border-radius: 3px;
      float:right;
      }
      .selected {
      background: rgba(245, 130, 174, 0.7);
        color: #D04077
      }
  </style>
  
  