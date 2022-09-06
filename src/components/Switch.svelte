<script>
  // toggle state
  export let isToggled = false
  // optional button's label
  export let label = undefined
  // allow to link label to toggle
  export let id = 'button'
  // function to export boolean's value
  export let onToggle
  // 
  export let isDisabled = false
  //
  export let isLocked = false

  const handleToggle = () => {
    isToggled = !isToggled
    onToggle(isToggled)
  }

  const isToggledActive = !isDisabled && !isLocked
    
    const setToggle = (state) => {
      if(state){
        console.log('is tog')
          return 'bg-toggled'
      } else if(!state) {
        console.log('is untog')
        return 'bg-untoggled'
      }
  }

  const setState = (state) => {
    if(state && !isLocked) {
      return 'bg-disabled'
    } else {
      return 'bg-locked'
    }
  }
  
</script>

  <div class="switchContainer">
    {#if label}
    <label for={id}>{label}</label>
    {/if}

    <button id={id}  class={isToggledActive ? setToggle(isToggled) : setState(isDisabled)} on:click={handleToggle} disabled='{isDisabled}'>
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
      height: 35px;
      width: 75px;
      border-radius: 35px;
      cursor: pointer;
      display: flex;
      position: relative;
      transition: background-color 150ms ease-in-out;
      padding: 0 0;
      border: 2px solid #172C66
      ;
    }
    
    .button-switch {
      height: 25px;
      width: 25px;
      align-items: center;
      margin-top: 3px;
      /* margin-right: 3px; */
      margin-left: 3px;
      background-color: white;
      border-radius: inherit;
      position: relative;
      transition: transform 150ms ease-in-out;
      z-index: 1;
    }
    
    button:focus{
      outline: none;
    }
    
    .isToggled {
      transform: translateX(40px);
    }
    
    .bg-toggled{
      background-color:  #8bd3dd;
    }
    
    .bg-untoggled {
        background-color:#F582AE;
    } 
    
    .bg-disabled {
      cursor: not-allowed;
    background-color:  #F3D2C1;
    opacity: 75%;
  }

  .bg-locked {
    cursor: not-allowed;
    background-color:  #F3D2C1;
  }
</style>
