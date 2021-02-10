function showCity() {
  // 1. Récupérer la valeur courante du menu 
  // Pour ça on va faire :
  let nomVilleSelectionnee = document.getElementById(ID-DE-VOTE-MENU).value;

  // 2. Récupérer la liste de toutes les div correspondant à une div de météo 
  // Pour ça on va faire :
  let cities = document.getElementsByClassName("city");

  // 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
  // TODO : definir l : la taille max de votre tableau cities
  for (i=0; i<l; i++) {
    if (citis[i].id == NOM-ville-SELECTIONNEE) {
      // garder l'element visible -> ELEMENT.style.display= "none";
    } else {
      // cacher l'element -> ELEMENT.style.display= "";
    }
  }
}