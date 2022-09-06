<script>
  // toggle state
  export let isToggled = false
  // optional button's label
  export let label = undefined
  // allow to link label to toggle
  export let id = 'button'
  // function to export boolean's value
  export let onToggle

  const handleToggle = () => {
    isToggled = !isToggled
    onToggle(isToggled)
  }
  
</script>

  <div class="switchContainer">
    {#if label}
    <label for={id}>{label}</label>
    {/if}

    <button id={id}  class={isToggled ? 'bg-purple' : ''} on:click={handleToggle}>
      <div class="button-switch"  class:isToggled >
      </div>
    </button>
  </div>

<style>
  .switchContainer {
    display: flex;
  }

  label {
    margin-right: 16px;
  }

  button {
    
      flex-shrink: 0;
      cursor: pointer;
      height: 24px;
      width: 50px;
      background-color:grey;
      border-radius: 20px;
      cursor: pointer;
      display: flex;
      position: relative;
      transition: background-color 150ms ease-in-out;
      padding: 0 0;
  }
    
  .button-switch {
      height: 20px;
      width: 20px;
      margin: 1px;
      background-color: white;
      border-radius: inherit;
      position: relative;
      transition: transform 150ms ease-in-out;
      z-index: 1;
  }

  .isToggled {
    transform: translateX(26px);
  }
  
  .bg-purple{
    background-color: purple;
  }
</style>
