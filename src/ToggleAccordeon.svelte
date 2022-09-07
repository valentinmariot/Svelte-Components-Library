<script>
  let id = 0
  let show = []
  show[id] = false;
</script>

<!-- Pour ajouter des éléments : dupliquer la div .container, l'ajouter après le dernier container et mettre le contenu souhaité dans la div .label et la div .content -->
<!-- Puis modifier les les index du tableau show ("ex : show[1]") en les remplaçant par le par le chiffre suivant par rapport au container précédent -->

<body>
  <div class="accordion-body">
    <div class="accordion">
      <div class="container"
      class:active="{show[1] === true}"
      on:click="{() => show[1] = !show[1]}"> 
        <div class="label">Toggle 1</div>
        <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.....</div>
      </div>
      <div class="container"
      class:active="{show[2] === true}"
      on:click="{() => show[2] = !show[2]}">
        <div class="label">Toggle 2</div>
        <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.....</div>
      </div>
    </div>
  </div>
</body>



<style>
  /* Définit la largeur de l'accordéon. Définit la marge à 90px en haut et en bas et auto à gauche et à droite */
  .accordion {
    color: black;
    padding: 45px 45px;
    font-family: Roboto;
  }

  .accordion .container {
    width: 307px;
    background-color: #FEF6E4;
    position: relative;
  }

/* Positionne les étiquettes par rapport au .container. Ajoute une marge intérieure en haut et en bas et augmente la taille de la police. Fait également de son curseur un pointeur */
  .accordion .label {
    position: relative;
    font-size: 16px;
    text-align: left;
    color: black;
    cursor: pointer;
    /* vertical | horizontal */
    padding: 15px 20px;
  }

  /* Positionne le signe plus à 5px de la droite. Centrez-le en utilisant la propriété transform. */
  .accordion .label::before {
    content: '+';
    color: black;
    position: absolute;
    top: 50%;
    right: -5px;
    font-size: 35px;
    transform: translateY(-50%);
    /* vertical | horizontal */
    padding: 15px 25px;
  }

  /* Masque le contenu (height : 0), diminue la taille de la police, justifie le texte et ajoute une transition */
  .accordion .content {
    position: relative;
    background: #F9BCC9;
    height: 0;
    font-size: 20px;
    text-align: justify;
    overflow: hidden;
    transition: 0.5s;
  }

  /* Désactive la partie contenu lorsqu'elle est active. Définit la hauteur */
  .accordion .container.active .content {
    height: 114px;
    font-size: 12px;
    /* vertical | horizontal */
    padding: 10px 20px;
    border-top: 2px solid #001858;
  }

  /* Passe du signe plus au signe négatif une fois activé */
  .accordion .container.active .label::before {
    content: '-';
    font-size: 50px;
    /* vertical | horizontal */
    padding: 15px 25px;
  }

  .container:hover {
    background-color: #C4E4E0;
  }

  .container:first-child {
    /* top | right | bottom | left */
    border-width: 3px 3px 0px 3px;
    border-color: #001858;
    border-style: solid;
    /* coin en haut à gauche | coin en haut à droite | coin en bas à droite | coin en bas à gauche*/
    border-radius: 6px 6px 0px 0px;
  }

  .container:last-child {
    /* top | right | bottom | left */
    border-width: 3px 3px 3px 3px;
    border-color: #001858;
    border-style: solid;
    /* coin en haut à gauche | coin en haut à droite | coin en bas à droite | coin en bas à gauche*/
    border-radius: 0px 0px 6px 6px;
  }
</style>