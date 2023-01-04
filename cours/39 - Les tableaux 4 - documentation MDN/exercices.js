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
// Créez la fonction concat0(tableau1, tableau2) ci-dessous.
function concat0(tableau1, tableau2) {
    return tableau1.concat(tableau2);
}

// Exercice 1
// Créez la fonction concat1(tableau, valeur1, valeur2, valeur3) ci-dessous.
function concat1(tableau, valeur1, valeur2, valeur3) {
    return tableau.concat(valeur1, valeur2, valeur3);
}

// Exercice 2
// Créez la fonction fill0(tableau, valeur) ci-dessous.
function fill0(tableau, valeur) {
    return tableau.fill(valeur);
}

// Exercice 3
// Créez la fonction fill1(tableau, valeur, index) ci-dessous.
function fill1(tableau, valeur, index) {
    return tableau.fill(valeur, index);
}

// Exercice 4
// Créez la fonction fill2(tableau, valeur, debut, fin) ci-dessous.
function fill2(tableau, valeur, debut, fin) {
    return tableau.fill(valeur, debut, fin + 1);
}

// Exercice 5
// Créez la fonction fill3(tableau, valeur) ci-dessous.
function fill3(tableau, valeur) {
    let longueur = tableau.length - 3;
    return tableau.fill(valeur, longueur)
}

// Exercice 6
// Créez la fonction includes0(tableau, valeur) ci-dessous.
function includes0(tableau, valeur) {
    return tableau.includes(valeur);
}

// Exercice 7
// Créez la fonction includes1(tableau, valeur, debut) ci-dessous.
function includes1(tableau, valeur, debut) {
    return tableau.includes(valeur, debut);
}

// Exercice 8
// Créez la fonction includes2(tableau, valeur) ci-dessous.
function includes2(tableau, valeur) {
    return tableau.includes(valeur, -4);
}

// Exercice 9
// Créez la fonction indexOf0(tableau, valeur) ci-dessous.
function indexOf0(tableau, valeur) {
    return tableau.indexOf(valeur);
}

// Exercice 10
// Créez la fonction indexOf1(tableau, valeur, debut) ci-dessous.
function indexOf1(tableau, valeur, debut) {
    return tableau.indexOf(valeur, debut);
}

// Exercice 11
// Créez la fonction indexOf2(tableau, valeur) ci-dessous.
function indexOf2(tableau, valeur) {
    return tableau.indexOf(valeur, -2)
}

// Exercice 12
// Créez la fonction join0(tableau) ci-dessous.
function join0(tableau) {
    return tableau.join();
}

// Exercice 13
// Créez la fonction join1(tableau, separateur) ci-dessous.
function join1(tableau, separateur) {
    return tableau.join(separateur);
}

// Exercice 14
// Créez la fonction lastIndexOf0(tableau, valeur) ci-dessous
function lastIndexOf0(tableau, valeur) {
    return tableau.lastIndexOf(valeur);
}

// Exercice 15
// Créez la fonction lastIndexOf1(tableau, valeur) ci-dessous.
function lastIndexOf1(tableau, valeur) {
    return tableau.lastIndexOf(valeur, 3)
}

// Exercice 16
// Créez la fonction lastIndexOf2(tableau, valeur) ci-dessous.
function lastIndexOf2(tableau, valeur) {
    return tableau.lastIndexOf(valeur, -3)
}

// Exercice 17
// Créez la fonction pop0(tableau) ci-dessous.
function pop0(tableau) {
    return tableau.pop();
}

// Exercice 18
// Créez la fonction pop1(tableau) ci-dessous.
function pop1(tableau) {
    tableau.pop();
    return tableau;
}

// Exercice 19
// Créez la fonction push0(tableau, valeur) ci-dessous.
function push0(tableau, valeur) {
    tableau.push(valeur);
    return tableau;
}

// Exercice 20
// Créez la fonction push1(tableau, valeur1, valeur2) ci-dessous.
function push1(tableau, valeur1, valeur2) {
    tableau.push(valeur1, valeur2);
    return tableau;
}

// Exercice 21
// Créez la fonction reverse0(tableau) ci-dessous.
function reverse0(tableau) {
    return tableau.reverse();
}

// Exercice 22
// Créez la fonction shift0(tableau) ci-dessous.
function shift0(tableau) {
    return tableau.shift();
}

// Exercice 23
// Créez la fonction shift1(tableau) ci-dessous.
function shift1(tableau) {
    tableau.shift();
    return tableau;
}

// Exercice 24
// Créez la fonction slice0(tableau) ci-dessous.
function slice0(tableau, debut) {
    return tableau.slice(debut);
}

// Exercice 25
// Créez la fonction slice1(tableau, debut, fin) ci-dessous.
function slice1(tableau, debut, fin) {
    return tableau.slice(debut, fin)
}

// Exercice 26
// Créez la fonction slice2(tableau) ci-dessous.
function slice2(tableau) {
    return tableau.slice(-3);
}

// Exercice 27
// Créez la fonction slice3(tableau) ci-dessous.
function slice3(tableau) {
    return tableau.slice(2, -2);
}

// Exercice 28
// Créez la fonction splice0(tableau) ci-dessous.
function splice0(tableau) {
    tableau.splice(2, 1);
    return tableau;
}

// Exercice 29
// Créez la fonction splice1(tableau) ci-dessous.
function splice1(tableau) {
    tableau.splice(1, 3);
    return tableau;
}

// Exercice 30
// Créez la fonction splice2(tableau) ci-dessous.
function splice2(tableau) {
    tableau.splice(-3, 2);
    return tableau;
}
// Exercice 31
// Créez la fonction splice3(tableau, debut, valeur) ci-dessous.
function splice3(tableau, debut, valeur) {
    tableau.splice(debut, 0, valeur);
    return tableau;
}

// Exercice 32
// Créez la fonction splice4(tableau, debut, valeur1, valeur2) ci-dessous.
function splice4(tableau, debut, valeur1, valeur2) {
    tableau.splice(debut, 0, valeur1, valeur2);
    return tableau;
}

// Exercice 33
// Créez la fonction splice5(tableau, valeur1, valeur2) ci-dessous.
function splice5(tableau, valeur1, valeur2) {
    tableau.splice(-2, 0, valeur1, valeur2);
    return tableau;
}

// Exercice 34
// Créez la fonction splice6(tableau, valeur1, valeur2) ci-dessous.
function splice6(tableau, valeur1, valeur2) {
    tableau.splice(1, 3, valeur1, valeur2);
    return tableau;
}

// Exercice 35
// Créez la fonction unshift0(tableau, valeur) ci-dessous.
function unshift0(tableau, valeur) {
    tableau.unshift(valeur);
    return tableau;
}

// Exercice 36
// Créez la fonction unshift1(tableau, valeur1, valeur2) ci-dessous.
function unshift1(tableau, valeur1, valeur2) {
    tableau.unshift(valeur1, valeur2);
    return tableau;
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Demi-tour
// Créez la fonction demitour(tableau1, tableau2) ci-dessous.
function demitour(tableau1, tableau2) {
    let tableau3 = tableau1.concat(tableau2);
    return tableau3.reverse();
}

// Exercice 1 — Remplissage
// Créez la fonction remplissage(mot, taille) ci-dessous.
function remplissage(mot, taille) {
    while (mot.length < taille) {
        mot.unshift("#");
    }
    return mot.join('');
}

// Exercice 2 — Extraction
// Créez la fonction extraction(transmission, sequence) ci-dessous.
function extraction(transmission, sequence) {
    let debut = transmission.indexOf(sequence);
    let fin = transmission.lastIndexOf(sequence);
    return transmission.slice(debut + 1, fin)
}

// Exercice 3 — Camouflage
// Créez la fonction camouflage(transmission, sequence) ci-dessous.
function camouflage(transmission, sequence) {
    let debut = transmission.indexOf(sequence);
    let fin = transmission.lastIndexOf(sequence);
    return transmission.fill("#", debut + 1, fin)
}

// Exercice 4 — Suppression
// Créez la fonction suppression(transmission, sequence) ci-dessous.
function suppression(transmission, sequence) {
    let debut = transmission.indexOf(sequence) + 1;
    let fin = transmission.lastIndexOf(sequence);
    let diff = fin - debut;
    transmission.splice(debut, diff);
    return transmission;
}

// Exercice 5 — Entrelacement
// Créez la fonction entrelacement(tableau1, tableau2) ci-dessous.

// Exercice 6 — Duplication
// Créez la fonction duplication(quantites, valeurs) ci-dessous.

// Exercice 7 — Sélection
// Créez la fonction selection(selecteur, liste) ci-dessous.

// Exercice 8 — Extraction multiple
// Créez la fonction extractionMultiple(transmission, sequence) ci-dessous.

// Exercice 9 — Extraction multiple incomplète
// Créez la fonction extractionMultiple(transmission, sequence) ci-dessous.
