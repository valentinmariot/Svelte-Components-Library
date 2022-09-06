

<script>
  
    let valueInput = null ;
    export let idInput ; 
    export let nameInput ;
    export let min ;
    export let max ;
    export let forData ;
    export let labelText ;
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
        <label for={ forData } class="label-slider">{labelText}</label>
        <div class="input"> 

            <div class="text min-input">{min}</div>
            <input 
            type="range" 
            id={idInput} 
            name={nameInput} 
            min={min} 
            max={max} 
            bind:value = { valueInput }
            class="input-slider"
            >

            <div class="text max-input">{max}</div>

        </div>
       
        <h2>{ valueInput }</h2>
    
    </div>


    <style>
.container {
    background-color: palevioletred;
}


.input{
    background-color: darkcyan;
}
.container  div.text {
    background-color: rgb(112, 126, 216);
    height: 40px;
    display : inline-block ;
}


/********** Range Input Styles **********/
/* Range Reset */
input[type="range"] {
   -webkit-appearance: none;
    /* appearance: none; */
    /* background: transparent; */
    background-color: brown;
    cursor: pointer;
    width: 20rem;
    /* height: 60px; */
    padding: 2em 0;
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
   height: 0.5rem;  
}

/* slider Puce */
input[type="range"]::-webkit-slider-thumb {

  -webkit-appearance: none; /* Override default look */
   /* appearance: none; */
   margin-top: -6px;
   /* Centerr la "puce" on the track */

   /*custom styles*/
   background-color: #74a264;
   border-radius: 6.6px;
   height: 20px;
   width: 20px;
}


/* slider Puce */
input[type="range"]::-webkit-slider-thumb:hover {

-webkit-appearance: none; /* Override default look */
 /* appearance: none; */
 margin-top: -6px;
 /* Centerr la "puce" on the track */

 /*custom styles*/
 background-color: #a164a2;
 border-radius: 6.6px;
 height: 20px;
 width: 20px;
}

/* Bordure du Bouton */
input[type="range"]:focus::-webkit-slider-thumb {   
  border: 1px solid #053a5f;
  outline: 3px solid #053a5f;
  outline-offset: 0.125rem; 
}





</style>