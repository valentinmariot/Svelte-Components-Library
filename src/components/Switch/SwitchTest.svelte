<script>
    import Switch from "./Switch.svelte";
  
      const handleToggle = (value) => {
        console.log(value)
      }

  </script>
  
    <section>
      <h1>Switch</h1>
      <hr>
      <br>
    <div class='container'>
      <div class='center'>
      <Switch  label={'Ok or not ok?'} onToggle={handleToggle} />
    </div>
    
      <br>

      <div class='center'>
        <Switch  label={'Locked'} isLocked />
      </div>

      <br>

      <div class="center">
        <Switch  label={'Disabled'} isDisabled />
      </div>
      <br>
      </div>

    </section>

  <style>
    .center{
      display: flex;
      justify-content: right;

    }
  </style>