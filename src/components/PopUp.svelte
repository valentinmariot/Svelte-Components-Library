<script>
    import Modal from "./Modal.svelte";
    let modal;
    let current = 'cancel';
</script>

  <div class="container">
    <button class= 'firstButton' on:click={() => modal.show()}>Deleted count</button>
  </div>
  <Modal bind:this={modal}>
    <h2>Modal title</h2>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    </p>
    <div class="proposition">
        <p>Are you sure ?</p>
    </div>
    <div class="container-btn">
        <div class="btn-holder">
            <button on:click={() => modal.hide()}>Yes, deleted it</button>
            <button class="{current === 'cancel' ? 'selected' : ''}" on:click="{() => modal.hide()}"> Cancel </button>    
        </div>
    </div>
   
  </Modal>
  
  <style>
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .firstButton {
        background-color: #F582AE;
        justify-content: center;
        width: 100px;
        height: 80px; 
    }

    button {
      position: block;
      background: #F582AE;
      border-radius: 3px;
      width: 80px;
      height: 50px; 
    }
    .selected {
        background: #F9BCC9;
        color: #D04077
    }
    .proposition{
        flex-direction: row;
        display: flex; 
        justify-content: flex-end;
        margin-right: 100px;
    }

    .container-btn .btn-holder { 
        flex-direction: row;
        display: flex; 
        justify-content: flex-end;
    }
    .container-btn .btn-holder button:nth-child(2){ 
        margin-left: 30px;
    }

  </style>
  
  