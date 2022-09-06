<script>
    import Switch from "./Switch.svelte";
  
      const handleToggle = (value) => {
        console.log(value)
      }

  </script>
  
  <main>
    <Switch label="Apples or pinapples?" onToggle={handleToggle} />
  </main>