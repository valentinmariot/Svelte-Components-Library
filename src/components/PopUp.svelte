<script>
    import Modal from "./Modal.svelte";
    let modal;
    let current = 'cancel';
    export let title;
    export let text;
</script>

  <div class="container">
    <button class= 'firstButton' on:click={() => modal.show()}>Deleted count</button>
  </div>

  <Modal bind:this={modal}> 
    <h2>{title}</h2>
    <p>{text}</p>
    <div class="proposition">
        <p>Are you sure ?</p>
    </div>
    <div class="container-btn">
        <div class="btn-holder">
            <button on:click={() => modal.hide()}>Yes, deleted it</button>
            <button on:click={() => modal.hide()}>Cancel</button>
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
  
  