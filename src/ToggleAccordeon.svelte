<script>
  let id = 0
  let show = []
  show[id] = false;
</script>

<body>
  <div class="accordion-body">
  <div class="accordion">
    <hr>
    <div class="container"
    class:active="{show[1] === true}"
    on:click="{() => show[1] = !show[1]}">
      <div class="label">Toggle 1</div>
      <div class="content">Description du toggle 1</div>
    </div>
    <hr>
    <div class="container"
    class:active="{show[2] === true}"
    on:click="{() => show[2] = !show[2]}">
      <div class="label">Toggle 2</div>
      <div class="content">Description du toggle 2</div>
    </div>
    <hr>
  </div>
  </div>
</body>



<style>
  /* Définit la largeur de l'accordéon. Définit la marge à 90px en haut et en bas et auto à gauche et à droite */
  .accordion {
    width: 800px;
    margin: 90px auto;
    color: black;
    background-color: white;
    padding: 45px 45px;
  }

  .accordion .container {
  position: relative;
  margin: 10px 10px;
}

/* Positionne les étiquettes par rapport au .container. Ajoute une marge intérieure en haut et en bas et augmente la taille de la police. Fait également de son curseur un pointeur */
.accordion .label {
  position: relative;
  padding: 10px 0;
  font-size: 30px;
  color: black;
  cursor: pointer;
}

/* Positionne le signe plus à 5px de la droite. Centrez-le en utilisant la propriété transform. */
.accordion .label::before {
  content: '+';
  color: black;
  position: absolute;
  top: 50%;
  right: -5px;
  font-size: 30px;
  transform: translateY(-50%);
}

/* Masque le contenu (height : 0), diminue la taille de la police, justifie le texte et ajoute une transition */
.accordion .content {
  position: relative;
  background: white;
  height: 0;
  font-size: 20px;
  text-align: justify;
  width: 780px;
  overflow: hidden;
  transition: 0.5s;
}

/* Définit la largeur, la marge gauche et la bordure de la ligne horizontale entre les contenus */
.accordion hr {
  width: 100;
  margin-left: 0;
  border: 1px solid grey;
}

/* Désactive la partie contenu lorsqu'elle est active. Définit la hauteur */
.accordion .container.active .content {
  height: 150px;
}

/* Passe du signe plus au signe négatif une fois activé */
.accordion .container.active .label::before {
  content: '-';
  font-size: 30px;
}
</style>