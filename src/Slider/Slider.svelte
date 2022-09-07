

<script>
  
    let valueInput = null ;
    export let idInput ; 
    export let nameInput ;
    export let min ;
    export let max ;
    export let forData ;
    // export let labelText ;
    export let defaultValue = null;
    
    const giveDefaultValue = () => {
    
      if( defaultValue !== null ){
        valueInput = defaultValue;
      } else {
        valueInput = 0 ; 
      }
      
    }
    </script>
    
    <div class="container">
        <div class="container-input"> 

            <div class="text min-input">{min}</div>
            <div class="input-area">

              <input 
              type="range" 
              id={idInput} 
              name={nameInput} 
              min={min} 
              max={max} 
              bind:value = { valueInput }
              class="input-slider"
              >
  


            </div>
         
            <div class="text max-input">{max}</div>

        </div>
        <h2>{ valueInput }</h2>
    
    </div>


    <style>


.container {
    background-color: palevioletred;
    height: 100vh;
}


.container-input {
    background-color: darkcyan;
    display: flex;
}
.container div.text {
    background-color: rgb(112, 126, 216);
    height: 40px;
    display : inline-block ;
    margin-top: 10px;
}


/********** Range Input Styles **********/
/* Range Reset */
input[type="range"] {
   -webkit-appearance: none;
    /* appearance: none; */
    /* background: transparent; */
    background-color: brown;
    cursor: pointer;
    width: 210px;
    /* height: 60px; */
    border-radius: 6px ;
}

/* Removes default focus */
input[type="range"]:focus {
  outline: none;
}

/***** Chrome, Safari, Opera and Edge Chromium styles *****/
/* slider track ( la ligne horizontale) */
input[type="range"]::-webkit-slider-runnable-track {
   background-color: #053a5f;
   border-radius: 0.5rem;
   /* height: 0.5rem;   */
}

/* slider Puce */
input[type="range"]::-webkit-slider-thumb {

  -webkit-appearance: none; /* Override default look */
   /* appearance: none; */
   /* margin-top: -6px; */
   /* Centerr la "puce" on the track */

   /*custom styles*/
   background-color: #74a264;
   border-radius: 50%;
   height: 16px;
   width: 16px;
}


/* slider Puce */
input[type="range"]::-webkit-slider-thumb:hover {

-webkit-appearance: none; /* Override default look */
 /* appearance: none; */
 /* margin-top: -6px; */
 /* Centerr la "puce" on the track */

 /*custom styles*/
 background-color: #a164a2;
 border-radius: 6.6px;

}

/* Bordure du Bouton */
/* input[type="range"]:focus::-webkit-slider-thumb {   
  border: 1px solid #053a5f;
  outline: 3px solid #053a5f;
  outline-offset: 0.125rem; 
} */


/* input[type="range" i] {
    appearance: auto;
    cursor: default;
    color: -internal-light-dark(rgb(16, 16, 16), rgb(255, 255, 255));
    padding: initial;
    border: initial;
    margin: 0px;
} */


</style>