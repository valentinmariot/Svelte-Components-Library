<script>
    import Switch from "./Switch.svelte";
    import Menu from "../Menu/Menu.svelte"
  
      const handleToggle = (value) => {
        console.log(value)
      }
      
      </script>
  <div class="container">
    <section class="">
      <h2>Menu</h2>
      <hr>
      
      <div class="">
        
        <div class="parent p-ab">
          
          <Menu isRight/>
        </div>
        
        <div class="p-ab">
          
          <Menu />
        </div>
        <br>
        <br>
      </div>

      <aside class="story">
      <p>1. isRight prop : place toolbar to the right side</p>
      <p>2. by default is placed to the left side</p>
      </aside>
    </section>
    
    
    <section>
      
      <h2>Switch</h2>
      <hr>
      <br>
      <br>
      <div class='container'>

        <div class="auto">
          <div class='right auto'>
            <Switch  label={'Toggle'} onToggle={handleToggle} />
          </div>
          
          <br>
          
          <div class='right auto'>
            <Switch label={'Locked'} isLocked />
          </div>
          
          <br>
          
          <div class="right auto">
            <Switch label={'Disabled'} isDisabled />
          </div>
          <br>
        </div>
        
      </div>
      </section>
    </div>
    <style>
      .p-ab{
        position: absolute;
       width:30%;
      }
      
      .container {
      width: 500px;
  
    }
    .right{
      display: flex;
      justify-content: right;
    }
    .auto {
      width: 50%;
      margin: 0 auto;
    }

    .parent {
      margin-top: 50px;
    }
    h3{
      position: absolute;
      display: block;
    }

    .story {
      margin-top: 92px;
    }
    section:nth-of-type(2){
      margin-top: 50px;
    }
    
  </style>