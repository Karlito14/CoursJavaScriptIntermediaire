/*
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com
 */

/*****************************************************************************
 *          📣 OYEZ OYEZ BRAVES DÉVELOPPEURS ET DÉVELOPPEUSES ! 📣            *
 *****************************************************************************
 *
 * Maintenant que vous êtes dans le module intermédiaire, vous serez un peu moins
 * assisté dans les exercices. La plupart du temps vous devrez partir de zéro.
 *
 * Ce n'est pas pour rien que ma formation s'appelle JavaScript de Zéro !
 *
 * Quelques nouveautés concernant les exercices dans ce module :
 * ✅ Vous pouvez faire les exercices dans n'importe quel ordre 👌 (je vous
 * recommande tout de même de les faire dans l'ordre, la difficulté est croissante).
 * ✅ J'affiche dans le navigateur Chrome le nombre de tests réussis pour l'exercice
 * en cours, ça devrait vous motiver pour terminer les exercices récalcitrants.
 *
 * Merci et bon courage ! 🤘
 */

// Exercice 0
// Déclarez une fonction convertirEnSemainesEtJours(nombreDeJours) et faites lui retourner
// une template string qui correspond à la solution de l'énoncé
function convertirEnSemainesEtJours(nombreDeJours){
    let joursRestants = nombreDeJours % 7;
    let nbreSemaines = (nombreDeJours - joursRestants) / 7;
    return `${nombreDeJours} jour(s), c'est équivalent à ${nbreSemaines} semaine(s) et ${joursRestants} jour(s)`;
}

// Exercice 1
// Déclarez une fonction calculPrixNappes(nombreDeTables, diametreTable, prixTissu)
// qui renvoie le prix total du tissu à acheter pour faire les nappes en fonction des tables utilisées
function calculPrixNappes(nombreDeTables, diametreTable, prixTissu){
    let surface = diametreTable ** 2;
    let surfaceTotal = surface * nombreDeTables;
    return surfaceTotal * prixTissu;
}


// Exercice 2
// Déclarez une fonction calculPrixNappesDegressif(nombreDeTables, diametreTable, prixTissu)
// qui renvoie le prix total du tissu à acheter pour faire les nappes en prenant en compte le tarif dégressif
function calculPrixNappesDegressif(nombreDeTables, diametreTable, prixTissu){
    let surface = diametreTable ** 2;
    let surfaceTotal = surface * nombreDeTables;
    let prixTotal = surfaceTotal * prixTissu;
    if(surfaceTotal >= 100){
        prixTotal = prixTotal - prixTotal * 0.5;
    }
    if(surfaceTotal >= 50 && surfaceTotal < 100){
        prixTotal = prixTotal - prixTotal * 0.3;
    }
    if(surfaceTotal >= 30 && surfaceTotal < 50){
        prixTotal = prixTotal - prixTotal * 0.2;
    }
    if(surfaceTotal >= 20 && surfaceTotal < 30){
        prixTotal = prixTotal - prixTotal * 0.1;
    }
    return prixTotal;
}


// Exercice 3
// C'est la devinette, il faut tester votre solution dans la console développeur de
// Google Chrome. Il n'y a rien à écrire ici.

// Chassez le bogue 0
// Pour faire cet exercice décommentez le code de Tom ci-dessous
function repeter(mot, nombreDeRepetitions) {
   let motRepete = mot;
   while (--nombreDeRepetitions !== 0) {
     motRepete += mot;
   }
   return motRepete;
}
