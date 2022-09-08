

<script>

    let valueInput  ; 
    let valueLeftOnChanges ;
    let visibility = false ;
    export let styleType ;
    export let idInput ; 
    export let nameInput ;
    export let min ;
    export let max ;
    export let defaultValue = null;

    
    const giveDefaultValue = () => {
      if( defaultValue !== null ){
        valueInput = defaultValue;
      } else {
        valueInput = 0 ; 
      }
 
    }



    const onChanges = () => {    
      visibility = true ;  
      let doCalcul = 8 - valueInput * 0.15 ;
      valueLeftOnChanges =`calc(${valueInput}% + (${2 - doCalcul * 0.15}px))`; 
    }

    const changeVisibility = () => {
      if( visibility === true ){
        visibility = false ;
      }
    }

    const changeVisibilityV = () => {
      return ;
    }





    </script>


    <div class="container">
        <div class="container-input range-wrap"> 
            <div class="slider-value range-value { styleType == "primary" ? "primary" : "secondary" }">
              {#if valueInput && valueInput !== undefined }
              <output for={nameInput}  class="value-input { visibility ? "visible" : "noShow"} { styleType == "primary" ? "primary" : "secondary" }" style= "left:{valueLeftOnChanges}">{valueInput} </output>
              {/if}
            </div>
            <div class="top-end-container" >
              {#if valueInput === undefined}
              <div class="text top-max-input">6</div>
              {/if}
            </div> 
            <div class="input-area" >
              <input 
              type="range" 
              id={idInput} 
              name={nameInput} 
              min={min} 
              max={max} 
              bind:value = { valueInput }
              on:input="{()=> onChanges()}"
              on:mouseout="{()=> changeVisibility()}"
              on:blur="{()=> changeVisibilityV()}" 
              class="input-slider { styleType == "primary" ? "primary" : "secondary" }"
              >
            </div>
            <div class="start-end-container" >
              <div class="text min-input">{min}</div>
              <div class="text max-input">{max}</div>
            </div> 
       
        </div> 
    
    </div>





<style>


.container {
    height: 100vh;
    width: 870px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
}


.container-input {
    width: 210px;
    display: flex;
    /* width: fit-content; */
    display: block;
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
 border-radius: 50%;
 height: 16px;
 width: 16px;
}


input[type="range"].primary::-webkit-slider-thumb {
  background-color: #8BD3DD ;

}


input[type="range"].secondary::-webkit-slider-thumb {
  background-color: #F582AE;
}


/* slider Puce */
input[type="range"]::-webkit-slider-thumb:hover {
-webkit-appearance: none; /* Override default look */
/* appearance: none; */
/* margin-top: -6px; */
/* Centerr la "puce" on the track */
/*custom styles*/
/* background-color: #8BD3DD ; */
border-radius: 6.6px;

}


.slider-value {
  width: 210px;

}
.slider-value output  {
  
  border-radius: 3.6px;
  padding: 5px 7.5px;
  transform: translateX(-70%) scale(0);
  z-index: 2;
  color: rgb(33, 33, 33);
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}

output.value-input.visible {
  visibility: visible;
}

output.value-input.noShow {
  visibility: hidden;
}


.slider-value.primary  output{
  background-color: #F582AE;
}

.slider-value.secondary output {
  background-color: #8BD3DD ;

}

.top-end-container div.top-max-input{
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.start-end-container {
  display: flex;
  justify-content: space-between;

}

.start-end-container div.text {
  margin: 0;
}

.range-wrap {
  position: relative;
}
.range-value {
  position: absolute;
  top: -73%;
}
.range-value output {
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.range-value output:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  margin-top: -1px;
}

.range-value output.primary :before{
  border-top: 10px solid #F582AE;;
}

.range-value output.secondary:before {
  border-top: 10px solid #8BD3DD ;
}


</style>