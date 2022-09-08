<script>
</script>

<!-- Variables à changer pour personnifier la carte -->

<div class="card">
  <div class="card__front card__part">
        <span class="card__number_label">Numbers</span>
        <p class="card_numer">**** **** **** 6258</p>
    <div class="card__space-75">
      <span class="card__label">Name</span>
      <p class="card__info">John Doe</p>
    </div>
    <div class="card__space-25">
      <span class="card__label">Expiration</span>
            <p class="card__info">10/25</p>
    </div>
  </div>
  
  <div class="card__back card__part">
    <div class="card__black-line"></div>
    <div class="card__back-content">
      <div class="card__secret">
        <p class="card__secret--last">420</p>
      </div>
    </div>
  </div>
  
</div>

<style>

    *{
        box-sizing:border-box;
        font-family: 'Roboto', monospace;
    }

    .card{
        width: 320px;
        height: 190px;
        -webkit-perspective: 600px;
        -moz-perspective: 600px;
        perspective:600px;
    
    }

    .card__part{
        box-shadow: 1px 1px #aaa3a3;
        top: 0;
        position: absolute;
        z-index: 1000;
        left: 0;
        display: inline-block;
        width: 320px;
        height: 190px;
        /* ligne à changer pour changer la couleur du background */
        background-color: #001858;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 8px;
    
        -webkit-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -moz-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -ms-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -o-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
    }

    .card__front{
        /* haut | droit | bas | gauche */
        padding: 35px 18px 18px 18px;
        -webkit-transform: rotateY(0);
        -moz-transform: rotateY(0);
    }

    .card__back {
        padding: 18px 0;
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
    }

    .card__black-line {
        margin-top: 5px;
        height: 38px;
        background-color: #303030;
    }

    .card_numer {
        display: block;
        width: 100%;
        word-spacing: 4px;
        font-size: 20px;
        letter-spacing: 2px;
        color: #FEF6E4;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 0px;
    }

    .card__space-75 {
        width: 75%;
        float: left;
    }

    .card__space-25 {
        width: 25%;
        float: left;
    }

    .card__number_label {
        font-size: 10px;
        text-transform: uppercase;
        color: #FEF6E4;
        letter-spacing: 1px;
    }

    .card__label {
        font-size: 10px;
        text-transform: uppercase;
        color: #FEF6E4;
        letter-spacing: 1px;
    }

    .card__info {
        margin-bottom: 0;
        margin-top: 5px;
        margin-right: 20px;
        font-size: 16px;
        line-height: 18px;
        color: #FEF6E4;
        letter-spacing: 1px;
        text-transform: uppercase;
        overflow:hidden;
        white-space:nowrap;
        mask:linear-gradient(90deg, black 0, black 90%, transparent 100%) alpha;
        -webkit-mask:linear-gradient(90deg, black 0, black 90%, transparent 100%);
    }

    .card__back-content {
        padding: 15px 15px 0;
    }
    .card__secret--last {
        color: #303030;
        text-align: right;
        margin: 0;
        font-size: 14px;
    }

    .card__secret {
        padding: 5px 12px;
        background-color: #fff;
        position:relative;
    }

    .card__secret:before{
        content:'';
        position: absolute;
        top: -3px;
        left: -3px;
        height: calc(100% + 6px);
        width: calc(100% - 42px);
        border-radius: 4px;
        background: repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px);
    }

    .card:hover .card__front {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);

    }

    .card:hover .card__back {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
    }
</style>
