

<script>
  
    let valueInput ; ;
    export let idInput ; 
    export let nameInput ;
    export let min ;
    export let max ;
    // export let labelText ;
    export let defaultValue = null;

    let testValue ; 
    
    const giveDefaultValue = () => {
    
      if( defaultValue !== null ){
        valueInput = defaultValue;
      } else {
        valueInput = 0 ; 
      }
      
    }

    // const changeSlider = () => {  
    //     let value = inputSlider.value;
    //         slideValue.textContent = value;
    //         slideValue.style.left = value / 2 + "%";
    //         slideValue.classList.add("show");


    //       ;  
    // }



        // const slideValue = document.querySelector("span");
        // const inputSlider = document.querySelector("input");
        //   inputSlider.oninput = () => {
        //     let value = inputSlider.value;
        //     slideValue.textContent = value;
        //     slideValue.style.left = value / 2 + "%";
        //     slideValue.classList.add("show");
        //   };
        //   inputSlider.onblur = () => {
        //     slideValue.classList.remove("show");
        //   };
    </script>


    
    <div class="container">
        <div class="slider-value">
            <span>{valueInput}</span>
        </div>
        <div class="container-input"> 

            <div class="text min-input">{min}</div>
            <div class="input-aarea">
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
    </div>


<input type="range" list="tickmarks">
<datalist id="tickmarks">
<option value="0" label="0%"></option>
<option value="10"></option>
<option value="20"></option>
<option value="30"></option>
<option value="40"></option>
<option value="50" label="50%"></option>
<option value="60"></option>
<option value="70"></option>
<option value="80"></option>
<option value="90"></option>
<option value="100" label="100%"></option>
</datalist>


    <style>


.container {
    height: 100vh;
    width: 870px;
}


.container-input {
    display: flex;
    width: fit-content;
}
.container div.text {
    /* background-color: rgb(112, 126, 216); */
    height: 40px;
    display : inline-block ;
    margin-top: 10px;
}


/********** Range Input Styles **********/
/* Range Reset */
input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    /* background: transparent; */
    background-color: #001858;
    cursor: pointer;
    width: 210px;
    height: 3px;
    border-radius: 3px;

}


/* slider Puce */
input[type="range"]::-webkit-slider-thumb {

-webkit-appearance: none; /* Override default look */
 /* appearance: none; */
 /* margin-top: -6px; */
 /* Centerr la "puce" on the track */

 /*custom styles*/
 background-color:#8BD3DD ;
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
background-color: #F582AE;
border-radius: 6.6px;

}


.slider-value {
  width: 246px;
}
.slider-value span {
  background-color: #F582AE;
  border-radius: 3.6px;
  height: 25px;
  width: 35px;
  padding: 5px 7.5px;
  transform: translateX(-70%) scale(0);
  z-index: 2;
  color: rgb(33, 33, 33);
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}


</style>