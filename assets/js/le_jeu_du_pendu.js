const bonjour = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let devine = ['_', '_', '_', '_', '_', '_', '_'];
let erreurs = [];
let tableau = "";
let verif;

function guessLetter() {
    if (devine === bonjour) {
        alert("Bravo!!! Vous avez trouver le mot mystère ! :D");
    } else {
        let lettre = prompt("Donnez une lettre.");
        lettre = lettre.toUpperCase();
        verif = 0;
        for (i = 0; i < bonjour.length; i++) {
            if (lettre === bonjour[i]) {
                confirm(lettre, i);
                //splice() fonctionne comme push sauf qu'il rajoute à un endroit déterminé des valeurs!
                devine.splice(i, 1, lettre);
                confirm("Vous avez trouvez " + devine);
                console.log(devine);
                tableau = "" + devine[0] + "" + devine[1] + "" + devine[2] + "" + devine[3] + "" + devine[4] + "" + devine[5] + "" + devine[6];
                document.getElementById('tableau').innerHTML = tableau;
                verif = 1;
            }

        }
        if (verif === 1) {
            alert('C\'est bien, continuez comme ça');
        } else {
            alert('Ah non, ' + lettre + " ne fait pas partit du mot !");
            erreurs.push(lettre);
            console.log(erreurs);
        }
        document.getElementById('tableau').innerHTML = tableau;

        document.getElementById('fautes').innerHTML = erreurs;
    }
}