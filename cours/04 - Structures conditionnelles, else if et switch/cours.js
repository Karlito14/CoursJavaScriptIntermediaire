/* Structures conditionnelles : else if et switch */

/* Le raccourci "else if" */
// Rappel
let condition = false;

if (condition) {
  console.log("La condition est vraie");
} else {
  console.log("La condition est fausse");
}

// Autoriser certains accès sur un forum
let typeUtilisateur = "membre";

switch (typeUtilisateur){
  case "administrateur": 
    console.log("Vous avez accès à l'administration");
  case "modérateur":
    console.log("Vous avez accès à la modération");
  case "membre":
    console.log("Vous avez accès à la création de contenu");
    break;
  default :
    console.log("Vous pouvez uniquement lire le forum");
  break;
}
// if (typeUtilisateur === "administrateur") {
//   console.log("Accès autorisés : administration + modération + création de contenu");
// } else {
//   if (typeUtilisateur === "modérateur") {
//     console.log("Accès autorisés : modération + création de contenu");
//   } else {
//     if (typeUtilisateur === "membre") {
//       console.log("Accès autorisés : création de contenu");
//     } else {
//       console.log("Les visiteurs peuvent uniquement lire le forum");
//     }
//   }
// }

/* La structure switch */
// let typeUtilisateur = "modérateur";

// switch (typeUtilisateur) {
//   case "administrateur":
//     console.log("Accès autorisés : administration + modération + création de contenu");
//     break;
//   case "modérateur":
//     console.log("Accès autorisés : modération + création de contenu");
//     break;
//   case "membre":
//     console.log("Accès autorisés : création de contenu");
//     break;
//   default:
//     console.log("Les visiteurs peuvent uniquement lire le forum");
//     break;
// }
// console.log("Fin du code");