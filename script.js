// =========================================
// RÉCUPÉRATION DES ÉLÉMENTS
// =========================================

const rows = document.querySelectorAll(".row");

const moyenneAncien =
   document.querySelector("#moyenne-ancien");

const moyenneNouveau =
   document.querySelector("#moyenne-nouveau");

const moyennePersonnalise =
   document.querySelector("#moyenne-personnalise");


// =========================================
// ACTIVATION DU CALCUL AUTOMATIQUE
// =========================================

rows.forEach((row) => {

   const note =
      row.querySelector(".note");

   const coefficient =
      row.querySelector(".coefficient");


   note.addEventListener("input", calculer);

   coefficient.addEventListener("input", calculer);

});


// =========================================
// FONCTION PRINCIPALE
// =========================================

function calculer() {

   let ancienNotes = 0;
   let ancienCoef = 0;

   let nouveauNotes = 0;
   let nouveauCoef = 0;

   let persoNotes = 0;
   let persoCoef = 0;


   rows.forEach((row) => {

      const noteInput =
         row.querySelector(".note");

      const coefInput =
         row.querySelector(".coefficient");


      // =====================================
      // AUCUNE NOTE
      // =====================================

      if (noteInput.value === "") {
         return;
      }


      const note =
         Number(noteInput.value);


      // =====================================
      // NOM DE LA MATIÈRE
      // =====================================

      const matiere =
         row.querySelector("p").textContent.trim();


      // =====================================
      // 1. ANCIEN SYSTÈME
      // =====================================

      let coefAncien;


      /*
         ANCIEN SYSTÈME :

         Maths = 6
         PC = 6
         SVT = 6

         Malagasy = 3

         SES = 1

         Tout le reste = 2
      */

      if (
         matiere === "Maths" ||
         matiere === "PC" ||
         matiere === "SVT"
      ) {

         coefAncien = 6;

      }
      else if (matiere === "Malagasy") {

         coefAncien = 3;

      }
      else if (matiere === "SES") {

         coefAncien = 1;

      }
      else {

         coefAncien = 2;

      }


      ancienNotes +=
         note * coefAncien;

      ancienCoef +=
         coefAncien;


      // =====================================
      // 2. NOUVEAU SYSTÈME
      // =====================================

      let coefNouveau;


      /*
         NOUVEAU SYSTÈME :

         Maths = 5
         PC = 5
         SVT = 5

         Allemand = 1

         Tout le reste = 2
      */

      if (
         matiere === "Maths" ||
         matiere === "PC" ||
         matiere === "SVT"
      ) {

         coefNouveau = 5;

      }
      else if (matiere === "Allemand") {

         coefNouveau = 1;

      }
      else {

         coefNouveau = 2;

      }


      nouveauNotes +=
         note * coefNouveau;

      nouveauCoef +=
         coefNouveau;


      // =====================================
      // 3. SYSTÈME PERSONNALISÉ
      // =====================================

      if (coefInput.value !== "") {

         const coefPerso =
            Number(coefInput.value);


         if (coefPerso > 0) {

            persoNotes +=
               note * coefPerso;

            persoCoef +=
               coefPerso;

         }

      }

   });


   // =========================================
   // AFFICHAGE ANCIEN
   // =========================================

   if (ancienCoef > 0) {

      moyenneAncien.textContent =
         (ancienNotes / ancienCoef).toFixed(2);

   }
   else {

      moyenneAncien.textContent = "--";

   }


   // =========================================
   // AFFICHAGE NOUVEAU
   // =========================================

   if (nouveauCoef > 0) {

      moyenneNouveau.textContent =
         (nouveauNotes / nouveauCoef).toFixed(2);

   }
   else {

      moyenneNouveau.textContent = "--";

   }


   // =========================================
   // AFFICHAGE PERSONNALISÉ
   // =========================================

   if (persoCoef > 0) {

      moyennePersonnalise.textContent =
         (persoNotes / persoCoef).toFixed(2);

   }
   else {

      moyennePersonnalise.textContent = "--";

   }

}