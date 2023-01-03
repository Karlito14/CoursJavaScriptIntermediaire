
const zoneClick = document.querySelector('#zone-de-clic');
const boutonInc = document.querySelector('#bouton-plus');
const valueInc = document.querySelector('#valeur-inc');
const boutonDec = document.querySelector('#bouton-moins');
const valueDec = document.querySelector('#valeur-dec');
const limiteHaute = document.querySelector('#limite-haute');
const limiteBasse = document.querySelector('#limite-basse');
const notif = document.querySelector('#notification');
const notifTexte = document.querySelector('#notification-texte');
const compteur = document.querySelector('#compteur');


/* Fonction pour retirer les class à la notification*/
function setTime()
{
    notif.classList.remove('afficher');
    compteur.classList.remove('limite-atteinte');
}   

/* Fonction pour afficher les notification de valeur atteinte */
function afficherNotif(message){
    notifTexte.innerText = message;
    notif.classList.add('afficher');
    compteur.classList.add('limite-atteinte');
}

let valeur = 0;

function changerValeur(nouvelleValeur){
    valeur = nouvelleValeur;

    if (valeur > Number(limiteHaute.value)){
        afficherNotif(`Limite haute ${limiteHaute.value} atteinte`);
        valeur = Number(limiteHaute.value);
        compteur.textContent = valeur;      
        setTimeout(setTime, 2000);
    } 

    if (valeur < Number(limiteBasse.value)){
        afficherNotif(`Limite Basse ${limiteBasse.value} atteinte`);
        valeur = Number(limiteBasse.value);
        compteur.textContent = valeur;
        setTimeout(setTime, 2000)
    }
    
    compteur.textContent = valeur;
}
// Incrémentation selon la valeur de valeur-inc
function incrementation(){
    changerValeur(valeur + Number(valueInc.value))
}

boutonInc.addEventListener('click', incrementation);
zoneClick.addEventListener('click', incrementation);

/* Création de la fonction pour décrémenter*/ 
function decrementation(evenement){
    changerValeur(valeur - valueDec.value)
}

/* Décrémentation de la valeur du paragraphe lors d'un click */
boutonDec.addEventListener('click', decrementation);
zoneClick.addEventListener('contextmenu', function(evenement){
    evenement.preventDefault();
    decrementation();
});

/* Configuration du bouton Reset */
const boutonReset = document.querySelector('#bouton-reset');
function reset(){
    changerValeur(0);
}
boutonReset.addEventListener('click', reset);

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        incrementation();
    }
    if(event.key === 'ArrowDown'){
        decrementation();
    }
})
