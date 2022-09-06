<script>
    let count = 0
    const increment = () => {
      count += 1
    }
  </script>
  
  <button>
    <div class="button-switch">
    </div>
  </button>
  
  <style>
    button {
        flex-shrink: 0;
        height: 24px;
        width: 50px;
        /* background-color: ${({ $isToggled, theme }) => ($isToggled ? theme.colors.primary2 : theme.colors.neutral3)}; */
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

  </style>