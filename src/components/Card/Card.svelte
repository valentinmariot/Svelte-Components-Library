<script>

export let title ;
export let description ;
export let listIcons ;
let isClosed = true ; 
let isMax = false ; 

const closeCard = () => {
  console.log("Fermer popin")
}

const minCard = () => {
  if (isMax !== false) {
    isMax = false ; 
    return isMax ; 
  }
}

const maxCard = () => {
  if (isMax === false) {
    isMax = true ; 
    return isMax ; 
  }
}

</script>

{isMax}
<div class="big-conatiner-card" >
 

    <div class="card {isClosed ? "open" : "close"} " >
      <div class="header-card"> 
        <div class="info-light"> 
          <span on:click={() => isClosed = false}></span>
          <span on:click={minCard}></span>
          <span on:click={maxCard}></span>
        </div>
      </div>
      <div  class="image-area"> 
        <img class="card-img-top" src="https://static1.purepeople.com/articles/5/11/54/35/@/1051093-beyonce-knowles-attending-the-hbo-624x600-2.jpg" alt="Card image" style="width:50%">
      </div>
      <h4 class="card-title">{title}</h4>
      <div class="card-body {isMax ? "open" : "close"}" >
        <p class="card-text"> {description}</p>
        <div class="icons-area">
          <div class="all-social-icons">
            <ul>
              <li> <a href="https://twitter.com/"> {listIcons[0]}</a></li>
              <li> <a href="https://fr-fr.facebook.com/"> {listIcons[1]}</li>
              <li> <a href="https://www.instagram.com/?hl=fr"> {listIcons[2]}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </div>

</div>



<style>


.card {
  background-color: rgba(243, 210, 193, 1);
  border : 3px solid rgba(0, 24, 88, 1) ;
  width: 307px ;
  border-radius: 3px;
}
.card.open {
  display: block;
}

.card.close {
  display: none;
}

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


.image-area {
  border-top: 3px solid rgba(0, 24, 88, 1) ;
  display: flex;
  justify-content: center;
}

.image-area img {
  margin-top: 1em;
  border: 3px solid rgba(0, 24, 88, 1) ;
  border-radius: 3px;

}



.card-body {
  height: 100px;

}

.card-body.open {
  height: 100px;
  display: block;

}

.card-body.close {
  display: none;
}

.card-body p{
  text-align: center;
}

h4 {
  margin: 0;
  padding: 1em 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color : rgba(0, 24, 88, 1) ;
  text-align: center;
}


.card-body p {
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px;
}


.icons-area {
  background-color: #F582AE;
  float: right;
  margin-right: 5px;


}

.icons-area ul {
  background-color: #bf0b50;
  margin-right: 5px;
  list-style-type: none;
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;

}

.icons-area ul li {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: darkturquoise;
}




</style>