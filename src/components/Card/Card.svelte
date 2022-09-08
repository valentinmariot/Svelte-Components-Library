<script>

export let title ;
export let shortDescription ;
export let longDescription ;
export let imgSrc = undefined;
let isClosed = true ;
let isMin = true; 
let isMax = false ; 
let isShortCard = false ; 

const minCard = () => {
  isShortCard = false ;
  isMax = false ; 
  if (isMin === false) {
    isMin = true ;
     
  } else {
    isMin = false ; 
  }
}



const shortCard = () => {
  isMax = false ; 
  if (isShortCard === false) {
    isShortCard = true ;
    isMin = false  ;
    return isShortCard ; 
  } else {
    isShortCard = false ;
    isMin = true  ;
    return isShortCard ; 
  }
}

const maxCard = () => {
  if (isMax === false) {
    isShortCard = true ;
    isMax = true ; 
    isMin = false  ;
  } else {
    isShortCard = false ;
    isMax = false ; 
    isMin = true  ;
  }
}

</script>

<div class="big-conatiner-card" >
 

    <div class="card {isClosed ? "close" : "open"} " >
      <div class="header-card"> 
        <div class="info-light"> 

          <span on:click={minCard}></span>
          <span on:click={() => shortCard()}></span>
          <span on:click={maxCard}></span>
        </div>
      </div>
      <div  class="container-image-area"> 
        <div class="image-area">
          <img class="card-img-top" src="./src/components/Card/PhotoHomme.png" alt="Card" style="width:50%">
           <img class="egg-logo" src={imgSrc} alt="logo" >
          
        </div>
      </div>
      <div class="title-area"> 
        <h4 class="card-title">{title}</h4>
      </div>
      <div class="card-body {isMin ? "close" : "open"}" >
        <div class="short-text-area {isShortCard ? "open" : "close"}"> 
          <p class="card-text"> {shortDescription}</p>
        </div>
        <div class="long-text-area {isMax ? "open" : "close"}"> 
          <p class="card-text"> {longDescription}</p>
        </div>
        <div class="icons-area">

          {#if isShortCard || isMax}
            <div class="all-social-icons">
              <ul>
                <li> <a href="https://twitter.com/" class="ico-twitter"> </a></li>
                <li> <a href="https://fr.linkedin.com/" class="ico-linkedin"> </a>

                </li>
              </ul>
            </div>
            {/if}

        </div>
      </div>
    
    </div>

</div>



<style>

.big-conatiner-card {
  font-size: 'Roboto';
}


.card {
  background-color: rgba(243, 210, 193, 1);
  border : 3px solid rgba(0, 24, 88, 1) ;
  width: 307px ;
  border-radius: 3px;
}


.short-text-area.open {
  display: block;
}

.short-text-area.close {
  display: none;
}

.long-text-area.open {
  display: block;
}

.long-text-area.close {
  display: none;
}


/* HEADER AVEC TEMOIN DE COULEURS */


.header-card .info-light {
  height: 20px;
  display: flex;
  flex-direction:row ;
  align-items: center;
}


.header-card span {
  display: inline-block;
  height: 10px;
  width: 10px;
  border: 2px solid rgba(0, 24, 88, 1) ;
  border-radius: 50%;
  margin-left: 5px;
}

.header-card span:nth-child(1) {
  background-color: #F582AE;
}

.header-card span:nth-child(2) {
  background-color: #FEF6E4;
}

.header-card span:nth-child(3) {
  background-color: #8bd2dd;
}

/* ESPACE IMAGE  */

.image-area {
  border-top: 3px solid rgba(0, 24, 88, 1) ;
  display: flex;
  justify-content: center;
  position: relative;
}



.image-area img:nth-child(1) {
  background-color: antiquewhite;
  margin-top: 1em;
  border: 3px solid rgba(0, 24, 88, 1) ;
  border-radius: 3px;

}

.image-area img:nth-child(2) {
  margin-top: 0.5em;
  position: absolute;
  top : 8 ;
  right: 160;
  margin-left: 160px;

}

/* .egg-logo  {
  background-color: #82c5f5;
} */

/* -- TITRE */

h4 {
  margin: 0;
  padding: 1em 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23.44px;
  color : rgba(0, 24, 88, 1) ;
  text-align: center;
}


/*  -- CARD BODY */

.card-body {
  height: 100%;
  /* background-color: #F582AE; */

}

.card-body.open {
  display: block;

}

.card-body.close {
  display: none;
}

.card-body p{
  text-align: justify;
  font-weight: 400;
  font-size: 16px;
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.icons-area ul {
  /* background-color: #bf0b50; */
  width: 100%;
  list-style-type: none;
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex  ;
  flex-direction: row;
  justify-content: flex-end;

}

.icons-area ul li {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 6px;
  background-color: darkturquoise;
}




</style>