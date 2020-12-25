var liste_des_exercices_disponibles = {
  "CM000": Tables_additions_soustractions,
  "CM001": Tables_de_multiplications,
  "CM002": Tables_de_divisions,
  "CM003": Tables_de_multiplications_et_divisions,
  "CM004": Quatre_operations,
  "CM005": Ajouter9,
  "CM006": Soustraire9,
  "CM007": Ajouter11,
  "CM008": Soustraire11,
  "CM009": Moitie,
  "CM010": Tiers,
  "CM011": Quart,
  "CM012": Complement_a_100,
  "CM013": Complement_a_une_dizaine,
  "CM014": Double_moitie_tiers_triple,
  "CM015": Somme_de_deux_nombres_maries,
  "CM016": Diviser_par_10_100_1000,
  "CM017": Diviser_decimal_par_10_100_1000,
  "CM018": Somme_de_deux_nombres_maries_et_un_entier,
  "CM019": Le_compte_est_bonV3,
  "CM020": Le_compte_est_bonV4,
  "CM021": Compte_Est_Bon,
  "c3C10-1": Tables_de_multiplications,
  "c3C10-4": Exercice_tables_d_additions_cycle3,
  "c3C10-2" : Exercice_labyrinthe_multiplesCM,
  "c3C11": Division_cycle3,
  "c3N10": Ecrire_entiers_cycle3,
  //"6C99" : separation6C,
  //"6C99" : separation6C,
  "beta6G24": Test_main_levee,
  "5A11": Tableau_criteres_de_divisibilite,
  "5C11": Traduire_une_phrase_par_une_expression,
  "5C12": Calculer_une_expression_numerique,
  "5G11": Transformations_5e,
  "5G21-1": Constructibilite_des_triangles_longueurs,
  "5G20-1": Vocabulaire_des_triangles_5e,
  "5G22": DroiteRemarquableDuTriangle,
  "5G30-1": Egalite_d_angles,
  "5G31-1": Constructibilite_des_triangles_angles,
  "5G51": Representer_un_solide_5e,
  "5N11-1": Tableaux_et_pourcentages_prix_constant,
  "5N11-2": Tableaux_et_pourcentages_pourcent_constant,
  "5N13": Exercice_fractions_simplifier,
  "5L14-1": Calculer_une_expression_litterale,
  "5L14-2": Exercice_substituer,
  "5L14-3": Traduire_une_phrase_par_une_expression_litterale_et_calculer,
  "5L14-5": Calculer_la_valeur_d_une_expression_litterale_deg1_inc1,
  "5L14-6": Determiner_derniere_operation_exp_num,
  "5P10": Tableaux_et_proportionnalite,
  "5R10-0": Trouver_oppose,
  "5R12": Reperage_point_du_quart_de_plan,
  "beta4C30": Comparer_puissance10,
  "beta3L11-5": identites_calculs,
  "beta3Algo1": Instruction_conditionelle,
  "betaTESTseb": Tests_du_Seb,
  "betaSVG": AfficherSVG,
  //"betaExoZero" : Exercice_zero_mathalea2d,
  "betaExoConstruction" : Exercice_constructions_basiques,
  P001: Code_LaTeX_personnalise,
  // 'P002': LaTeX_static,
  "cours": Questions_de_cours,
  "LaTeX": Code_LaTeX_personnalise,
  // "Perso" : HTML_personnalise,
  // "TsvgjsKatex" : tests_SVGJS_KATEX,  
};

//Pour modifier les exercices lorsqu'ils sont en mode diaporama
var est_diaporama = false;

if (window.location.href.indexOf("cm.html") > 0) {
  est_diaporama = true;
}

//Efface de la liste des exercices disponibles tout ceux qui n'ont pas de version HTML
if (sortie_html) {
  var codeMG32 = "";
}

for (var i in liste_des_exercices_disponibles) {
  let exercice = new liste_des_exercices_disponibles[i]();
  if (sortie_html && exercice.pas_de_version_HMTL) {
    delete liste_des_exercices_disponibles[i];
  }
  if (!sortie_html && exercice.pas_de_version_LaTeX) {
    delete liste_des_exercices_disponibles[i];
  }
}






/**
 * Questions statiques issues d'un fichier Markdown
 *
 * Les thèmes sont des titres de niveaux 2
 *
 * suivies d'une liste qui alterne question et réponse
 * @Auteur Rémi Angot
 * Référence : cours
 */
function Questions_de_cours() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Questions de cours";
  this.consigne = "";
  this.nb_questions = 3;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.consigne_modifiable = false;
  this.sup = ""; // thème des questions
  this.sup2 = "questions_de_cours.txt"; //url des questions
  this.pas_de_version_LaTeX = true;

  this.nouvelle_version = function (numero_de_l_exercice) {
    let liste_questions = []; // Liste de questions
    let liste_corrections = []; // Liste de questions corrigées
    let dictionnaire_de_questions = {};
    let dictionnaire_de_questions_pret = false;
    let contenu_HTML = "";
    let contenu_correction_HTML = "";
    $.get(this.sup2, function (txt) {
      // Récupère le fichier txt et transforme en un dictionnaire {'id_theme':[[questions],[réponses]]}
      let tableau_par_theme = txt
        .match(/##((?=[^#]).|\n)*/g)
        .map((v) => v.trim());
      // Recherche les chaines de caractères commençant par ## et ne comportant pas d'autres #
      for (let i = 0; i < tableau_par_theme.length; i++) {
        let tableau_titre = tableau_par_theme[i].match(/##.*/g);
        let questions_et_reponses = tableau_par_theme[i]
          .match(/\*((?=[^*#]).|\n)*/g)
          .map((v) => v.trim());
        // Recherche les chaines de caractères commençant par * et ne comportant pas d'autres * ou de #
        let titre = tableau_titre[0].replace("## ", "");
        // Récupère le titre du thème sans ##
        let tableau_questions = [];
        let tableau_reponses = [];
        for (let i = 0; i < questions_et_reponses.length; i++) {
          if (i % 2 == 0) {
            //rang pair => questions
            tableau_questions[i / 2] = questions_et_reponses[i].replace(
              "* ",
              ""
            );
            // Supprime les * devant chaque questions
          } else {
            //rang impair => réponses
            tableau_reponses[(i - 1) / 2] = questions_et_reponses[i].replace(
              "* ",
              ""
            );
          }
          dictionnaire_de_questions[titre] = [
            tableau_questions,
            tableau_reponses,
          ];
        }
      }

      // Je n'utilise pas this.nb_questions ou this.sup car this n'est pas clairement défini dans cette fonction
      if (exercice[numero_de_l_exercice].sup == "") {
        exercice[numero_de_l_exercice].sup = choice(
          Object.keys(dictionnaire_de_questions)
        ); // Si on n'a pas spécifié un thème, on en prend un au hasard.
      }

      let nb_questions = exercice[numero_de_l_exercice].nb_question;
      if (dictionnaire_de_questions[exercice[numero_de_l_exercice].sup]) {
        // Si le thème existe dans le dictionnaire alors on adapte le nombre de questions
        nb_questions = Math.min(
          exercice[numero_de_l_exercice].nb_questions,
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0]
            .length
        );
      }
      for (let i = 0; i < nb_questions; i++) {
        liste_questions.push(
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0][i]
        );
        liste_corrections.push(
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][1][i]
        );
      }
      shuffle2tableaux(liste_questions, liste_corrections);
      // Mélange les questions et les réponses (sans perdre les associations)
      dictionnaire_de_questions_pret = true;
    });

    let id_unique = `${numero_de_l_exercice}_${Date.now()}`;
    if (sortie_html) {
      this.contenu = `<div id=div_exo${id_unique}></div>`;
      this.contenu_correction = `<div id=div_corr_exo${id_unique}></div>`;
    }

    if (!window.divExist) {
      window.divExist = [];
    } // Si divExist n'existe pas on le crée
    // divExist est un tableau dans lequel on stocke les listenner sur la création des div
    window.divExist[id_unique] = setInterval(function () {
      if ($(`#div_exo${id_unique}`).length && dictionnaire_de_questions_pret) {
        // Attends que le div existe et que le dictionnaire de questions soit prêt
        contenu_HTML = html_enumerate(liste_questions, this.spacing);
        contenu_correction_HTML = html_enumerate(
          liste_corrections,
          this.spacing
        );
        $(`#div_exo${id_unique}`).html(contenu_HTML); //Vide le div pour éviter les SVG en doublon
        $(`#div_corr_exo${id_unique}`).html(contenu_correction_HTML); //Vide le div pour éviter les SVG en doublon
        renderMathInElement(document.body, {
          delimiters: [
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: true,
          errorColor: "#CC0000",
          strict: "warn",
          trust: false,
        });
        clearInterval(divExist[numero_de_l_exercice]); //Arrête le timer
      }
    }, 100); // Vérifie toutes les 100ms
  };
  this.besoin_formulaire_texte = ["Thème des questions", "De la forme 6M1"];
  this.besoin_formulaire2_texte = [
    "Liste des questions",
    "URL du fichier texte contenant les questions et réponses.",
  ];
}

/**
 * Tables de divisions classiques, à trou ou un mélange des deux.
 *
 * Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
 * @Auteur Rémi Angot
* Référence CM002
  */
function Tables_de_divisions(tables_par_defaut = "2-3-4-5-6-7-8-9") {
  //Diviser deux nombres
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = tables_par_defaut;
  this.sup2 = 1; // classique|a_trous|melange
  this.titre = "Tables de divisions";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (!this.sup) {
      // Si aucune table n'est saisie
      this.sup = "2-3-4-5-6-7-8-9";
    }
    let tables = [];
    if (typeof this.sup == "number") {
      // Si c'est un nombre c'est qu'il y a qu'une seule table
      tables[0] = this.sup;
    } else {
      tables = this.sup.split("-"); // Sinon on crée un tableau à partir des valeurs séparées par des -
    }
    let couples = creer_couples(
      tables,
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
      this.nb_questions
    ); //Liste tous les couples possibles (2,3)≠(3,2)
    let liste_type_de_questions = combinaison_listes(
      ["classique", "a_trous"],
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    var type_de_questions = "a_trous";
    for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
      a = couples[i][0];
      b = couples[i][1];
      if (this.sup2 == 1) {
        type_de_questions = "classique";
      } else if (this.sup2 == 2) {
        type_de_questions = "a_trous";
      } else {
        type_de_questions = liste_type_de_questions[i];
      }
      if (type_de_questions == "classique") {
        // classique
        texte = "$ " + a * b + " \\div " + a + " = \\dotfill $";
      } else {
        // a trous
        if (choice([true, false])) {
          texte = `$ ${a * b} \\div \\ldots\\ldots = ${b}$`;
        } else {
          texte = `$ \\ldots\\ldots \\div ${a}  = ${b}$`;
        }
      }
      texte_corr = `$ ${a * b} \\div ${a} = ${b}$`;
      if (est_diaporama) {
        texte = texte.replace("= \\dotfill", "");
      }
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des tables",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoin_formulaire2_numerique = [
    "Style de questions",
    3,
    "1 : Classique\n2: À trous\n3: Mélangé",
  ];
}

/**
 * Tables de multiplications et de divisions classiques, à trou ou un mélange des deux.
 *
 * Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
 * @Auteur Rémi Angot
 * Référence CM003
 */
function Tables_de_multiplications_et_divisions(
  tables_par_defaut = "2-3-4-5-6-7-8-9"
) {
  //Multiplier ou diviser deux nombres
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = tables_par_defaut;
  this.sup2 = 1; // classique|a_trous|melange
  this.titre = "Tables de multiplications et de divisions";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (!this.sup) {
      // Si aucune table n'est saisie
      this.sup = "2-3-4-5-6-7-8-9";
    }
    let tables = [];
    if (typeof this.sup == "number") {
      // Si c'est un nombre c'est qu'il y a qu'une seule table
      tables[0] = this.sup;
    } else {
      tables = this.sup.split("-"); // Sinon on crée un tableau à partir des valeurs séparées par des ;
    }
    let couples = creer_couples(
      tables,
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
      this.nb_questions
    ); //Liste tous les couples possibles (2,3)≠(3,2)
    let liste_type_de_questions = combinaison_listes(
      ["classique", "a_trous"],
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let operation = combinaison_listes(["x", "div"], this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let type_de_questions;
    for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
      a = couples[i][0];
      b = couples[i][1];
      if (this.sup2 == 1) {
        type_de_questions = "classique";
      } else if (this.sup2 == 2) {
        type_de_questions = "a_trous";
      } else {
        type_de_questions = liste_type_de_questions[i];
      }

      if (operation[i] == "x") {
        if (type_de_questions == "classique") {
          // classique
          texte = "$ " + a + " \\times " + b + " = \\dotfill $";
          texte_corr = "$ " + a + " \\times " + b + " = " + a * b + " $";
        } else {
          // a trous
          if (tables.length > 2) {
            // Si pour le premier facteur il y a plus de 2 posibilités on peut le chercher
            texte = choice([
              "$ " + a + " \\times \\ldots\\ldots = " + a * b + " $",
              "$ \\ldots\\ldots" + " \\times " + b + " = " + a * b + " $",
            ]);
          } else {
            // Sinon on demande forcément le 2e facteur
            texte = "$ " + a + " \\times \\ldots\\ldots = " + a * b + " $";
          }

          texte_corr = "$ " + a + " \\times " + b + " = " + a * b + " $";
        }
      } else {
        if (type_de_questions == "classique") {
          // classique
          texte = "$ " + a * b + " \\div " + b + " = \\dotfill $";
        } else {
          // a trous
          if (choice([true, false])) {
            texte = `$ ${a * b} \\div \\ldots\\ldots = ${a}$`;
          } else {
            texte = `$ \\ldots\\ldots \\div ${b}  = ${a}$`;
          }
        }
        texte_corr = `$ ${a * b} \\div ${b} = ${a}$`;
      }
      if (est_diaporama) {
        texte = texte.replace("= \\dotfill", "");
      }
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des tables",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoin_formulaire2_numerique = [
    "Style de questions",
    3,
    "1 : Classique\n2: À trous\n3: Mélangé",
  ];
}

/**
 * Mélange équitable d'additions, de soustractions, de multiplications et de divisions
 *
 * * Niveau 1 Addition 2 chiffres + 1 chiffre, soustraction 2 chiffres - 1 chiffre, tables de 2 à 5
 * * Niveau 2 Addition 2 chiffres + 2 chiffres ne dépassant pas 100, soustraction dont le résultat est entre 11 et 19, tables de 6 à 9
 * * Niveau 3 Addition 2 chiffre + 2 chiffres dépassant 100, soustraction dont le résultat est entre 21 et 39, table de 7, 8, 11 ou 12,
 * @Auteur Rémi Angot
* Référence CM004
  */
function Quatre_operations() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Les quatre opérations";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté
  this.liste_packages = "xlop";

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(4);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // addition
          if (this.sup == 1) {
            a = randint(11, 89);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(11, 69);
            b = randint(11, 29);
          }
          if (this.sup == 3) {
            a = randint(11, 89);
            b = randint(110 - a, 110 - a + 50);
          }
          texte = `$${a}+${b}$`;
          texte_corr = `$${a}+${b}=${a + b}$`;
          break;
        case 2: // soustraction
          if (this.sup == 1) {
            a = randint(11, 89);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(20, 89);
            b = randint(a - 19, a - 11);
          }
          if (this.sup == 3) {
            a = randint(40, 89);
            b = randint(a - 39, a - 21);
          }
          texte = `$${a}-${b}$`;
          texte_corr = `$${a}-${b}=${a - b}$`;
          break;
        case 3: // multiplication
          if (this.sup == 1) {
            a = randint(2, 5);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(6, 9);
            b = randint(6, 9);
          }
          if (this.sup == 3) {
            a = choice([7, 8, 11, 12]);
            b = randint(2, 9);
          }
          texte = `$${a}\\times${b}$`;
          texte_corr = `$${a}\\times${b}=${a * b}$`;
          break;
        case 4: // division
          if (this.sup == 1) {
            a = randint(2, 5);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(6, 9);
            b = randint(6, 9);
          }
          if (this.sup == 3) {
            a = choice([7, 8, 11, 12]);
            b = randint(2, 9);
          }
          texte = `$${a * b}\\div${a}$`;
          texte_corr = `$${a * b}\\div${a}=${b}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Niveau de difficulté", 3];
}

/**
 * Un nombre à 2 chiffres (non multiple de 10) + 9
 * @Auteur Rémi Angot
 * Référence CM005
*/
function Ajouter9() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Ajouter 9";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.bouton_aide = modal_texte_court(
      numero_de_l_exercice,
      "Ajouter 9 revient à ajouter 10 et à soustraire 1."
    );
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(0, 9) * 10 + randint(1, 9);
      texte = `$${a}+9$`;
      texte_corr = `$${a}+9=${a + 9}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Un nombre à 2 chiffres (non multiple de 10) + 9
 * @Auteur Rémi Angot
 * Référence 6N12
 */
function Multiplier_entier_par_10_100_1000() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Multiplier un entier par 10, 100, 1 000...";
  this.consigne = "Calculer";
  this.nb_questions = 8;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.bouton_aide = modal_url(numero_de_l_exercice, 'https://mathix.org/glisse-nombre/index.html',
      "Glisse-nombre"
    );
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_questions_disponibles = [1, 2, 3, 4, choice([5, 6]), 7, 8, 9];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_de_b = []
    if (this.sup == 2) {
      liste_de_b = combinaison_listes([10, 100, 1000, 10000, 100000], this.nb_questions)
    } else {
      liste_de_b = combinaison_listes([10, 100, 1000], this.nb_questions)
    }
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1:
          a = randint(1, 9)
          break;
        case 2:
          a = randint(2, 9) * 10
          break;
        case 3:
          a = randint(2, 9) * 100
          break;
        case 4:
          a = randint(2, 9) * 1000
          break;
        case 5:
          a = randint(1, 9) * 100 + randint(1, 9)
          break;
        case 6:
          a = randint(1, 9) * 1000 + randint(1, 9)
          break;
        case 7:
          a = randint(1, 9) * 100 + randint(1, 9) * 10 + randint(1, 9)
          break;
        case 8:
          a = randint(1, 9) * 10000 + randint(1, 9) * 100
          break;
        case 9:
          a = randint(1, 9) * 10 + randint(1, 9)
          break;

      }

      b = liste_de_b[i]
      if (choice([true, false])) {
        texte = `$${tex_nombre(a)}\\times${tex_nombre(b)}$`
        texte_corr = `$${tex_nombre(a)}\\times${tex_nombre(b)}=${tex_nombre(a * b)}$`
      } else {
        texte = `$${tex_nombre(b)}\\times${tex_nombre(a)}$`
        texte_corr = `$${tex_nombre(b)}\\times${tex_nombre(a)}=${tex_nombre(a * b)}$`
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, '1 : Multiplication par 10, 100 ou 1 000\n2 : Multiplication par 10, 100, 1 000, 10 000 ou 100 000'];
}

/**
 * Un nombre à 2 chiffres ne terminant pas par 9 - 9
 * @Auteur Rémi Angot
 * Référence CM006
*/
function Soustraire9() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Soustraire 9";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(1, 9) * 10 + randint(0, 8);
      texte = `$${a}-9$`;
      texte_corr = `$${a}-9=${a - 9}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Un nombre à 2 chiffres non multiple de 10 + 11
 * @Auteur Rémi Angot
 * Référence CM007
*/
function Ajouter11() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Ajouter 11";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(0, 9) * 10 + randint(1, 9);
      texte = `$${a}+11$`;
      texte_corr = `$${a}+11=${a + 11}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Un nombre à 2 chiffres -11
 * @Auteur Rémi Angot
 * Référence CM008
*/
function Soustraire11() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Soustraire 11";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 1, 1, 1, 2];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      if (liste_type_de_questions[i] == 1) {
        a = randint(12, 99);
      } else {
        a = randint(2, 9) * 10;
      }

      texte = `$${a}-11$`;
      texte_corr = `$${a}-11=${a - 11}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Somme de deux nombres dont les chiffres des unités sont des compléments à 10
 * @Auteur Rémi Angot
 * Référence CM015
*/
function Somme_de_deux_nombres_maries() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Somme de deux nombres mariés";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, u1, u2, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      u1 = randint(1, 9);
      u2 = 10 - u1;
      a = randint(1, 9) * 10 + u1;
      b = randint(1, 9) * 10 + u2;

      texte = `$${a}+${b}$`;
      texte_corr = `$${a}+${b}=${a + b}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Somme de 3 nombres dont 2 ont des chiffres des unités compléments à 10
 * @Auteur Rémi Angot
 * Référence CM018
*/
function Somme_de_deux_nombres_maries_et_un_entier() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Somme de deux nombres mariés et un entier";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 2];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, c, u1, u2, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      u1 = randint(1, 9);
      u2 = 10 - u1;
      a = randint(1, 4) * 10 + u1;
      b = randint(1, 4) * 10 + u2;
      c = randint(1, 100 - a - b);

      switch (liste_type_de_questions[i]) {
        case 1:
          texte = `$${a}+${b}+${c}$`;
          texte_corr = `$${a}+${b}+${c}=${a + b + c}$`;
          break;
        case 2:
          texte = `$${a}+${c}+${b}$`;
          texte_corr = `$${a}+${c}+${b}=${a + b + c}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}



/**
 * Un "Le compte est bon" avec des solutions "formatées" pour travailler certains incontournables du calcul mental
 *  @Auteur Jean-Claude Lhote
 * Référence CM020
 */
function Compte_Est_Bon() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Atteindre le résultat souhaité avec 6 nombres et les 4 opérations";
  this.consigne =
    "Trouve le résultat en utilisant les quatre opérations et les nombres du tirage (une seule fois).";
  this.nb_questions = 5;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de calcul souhaité

  this.nouvelle_version = function (numero_de_l_exercice) {
    let type_de_questions, a, b, c, d, e, f, cible, tirage, choix;
    if (!this.sup) {
      // Si rien n'est saisi
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    } else {
      if (typeof this.sup == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        type_de_questions = combinaison_listes(
          [parseInt(this.sup)],
          this.nb_questions
        );
      } else {
        type_de_questions = this.sup.split("-"); // Sinon on crée un tableau à partir des valeurs séparées par des -
        for (let i = 0; i < type_de_questions.length; i++)
          type_de_questions[i] = parseInt(type_de_questions[i]);
        this.nb_questions = type_de_questions.length;
      }
    }
    choix = combinaison_listes(range1(5), this.nb_questions);
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (type_de_questions[i]) {
        case 1:
          a = randint(2, 9);
          b = randint(2, 8, a);
          c = randint(1, 9, [a, b]);
          d = randint(1, 9, [a, b, c]);
          switch (choix[i]) {
            case 1:
              cible = calcul(a * 100 + b * 10 + c + d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}+10\\times${b}+${c}+${d}$`;
              break;
            case 2:
              cible = calcul(a * 100 + b * 10 + c - d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}+10\\times${b}+${c}-${d}$`;
              break;
            case 3:
              cible = calcul(a * 100 - b * 10 + c + d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}-10\\times${b}+${c}+${d}$`;
              break;
            case 4:
              cible = calcul(a * 100 - b * 10 + c - d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}-10\\times${b}+${c}-${d}$`;
              break;
            default:
              cible = calcul(a * 100 + (b + c) * 10 + d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}+10\\times(${b}+${c})+${d}$`;
          }
          break;

        case 2:
          a = randint(3, 9);
          b = randint(3, 8, a);
          c = randint(3, 9, [a, b]);
          switch (choix[i]) {
            case 1:
              cible = calcul(a * 100 + b * 10 + c);
              tirage = shuffle([50, 50, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=(50+50)\\times${a}+10\\times${b}+${c}$`;
              break;
            case 2:
              cible = calcul(a * 100 + b * 10 - c);
              tirage = shuffle([50, 50, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=(50+50)\\times${a}+10\\times${b}-${c}$`;
              break;
            case 3:
              cible = calcul(a * 100 - b * 10 + c);
              tirage = shuffle([50, 50, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=(50+50)\\times${a}-10\\times${b}+${c}$`;
              break;
            case 4:
              cible = calcul(a * 100 - b * 10 - c);
              tirage = shuffle([50, 2, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=2\\times50\\times${a}-10\\times${b}-${c}$`;
              break;
            default:
              cible = calcul(a * 100 + b * 10 - c);
              tirage = shuffle([25, 4, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=4\\times25\\times${a}+10\\times${b}-${c}$`;
          }
          break;
        case 3:
          a = randint(2, 5);
          b = randint(3, 8, a);
          c = randint(3, 9, [a, b]);
          switch (choix[i]) {
            case 1:
              cible = calcul(a * (100 + b * 10) + c);
              tirage = shuffle([50, 2, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(50\\times2+10\\times${b})+${c}$`;
              break;
            case 2:
              cible = calcul(a * (100 + b * 10) - c);
              tirage = shuffle([50, 2, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(50\\times2+10\\times${b})-${c}$`;
              break;
            case 3:
              cible = calcul(a * (100 + b * 10) + c);
              tirage = shuffle([25, 4, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(25\\times4+10\\times${b})+${c}$`;
              break;
            case 4:
              cible = calcul(a * (100 + b * 10) - c);
              tirage = shuffle([25, 4, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(25\\times4+10\\times${b})-${c}$`;
              break;
            default:
              cible = calcul(a * (100 + b * 10) + c);
              tirage = shuffle([25, 75, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times((25+75)+10\\times${b})+${c}$`;
          }
          break;
      }
      texte = `Voici le tirage : `;
      for (let i = 0; i < 5; i++) texte += `${tirage[i]} ; `;
      texte += `${tirage[5]}.<br>`;
      texte += `Et le nombre à trouver est : ${cible}.`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Niveaux de difficultés (1 à 3)",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
}


/**
 * Générateur de tirages pour un compte est bon avec en correction la solution mathador (4 opérations différentes).
 * @Auteur Jean-Claude Lhote
 * référence CM019
 */

function Le_compte_est_bonV3() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = 'Générateur de "Le compte est bon"';
  this.consigne =
    "Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.";
  this.nb_questions = 5;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 30;
  this.sup2 = 70;
  var max_solution = 70;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let solution_mathador = [];
    let tirage, solution, expression;
    let min_solution = parseInt(this.sup);
    max_solution = parseInt(this.sup2);
    if (min_solution > max_solution) {
      min_solution = max_solution;
      this.sup = this.sup2;
    }
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      solution_mathador = Trouver_solution_mathador(min_solution, max_solution);
      tirage = solution_mathador[0];
      solution = solution_mathador[1];
      expression = solution_mathador[3];

      texte = `Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`;
      texte_corr = `Pour le tirage $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${solution}$, la solution est : $${expression}=${solution}$ `;
      texte_corr += `ou $${solution_mathador[4]}$.<br>`;
      texte_corr += `En effet : <br>`;
      for (let i = 0; i < 4; i++) {
        texte_corr += `$${solution_mathador[2][i]}$<br>`;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Limite inférieure", max_solution];
  this.besoin_formulaire2_numerique = ["Limite supérieure", 100];
}
/**
 * @Auteur Jean-Claude Lhote
  * référence CM020
 * Dans cette version, il est possible de choisir 1,2,3,4 ou 5 nombres du tirage et de contraindre la cible entre deux valeurs
 */
function Le_compte_est_bonV4() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = 'Générateur de "Le compte est bon" version semi-aléatoire';
  this.consigne =
    "Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.";
  this.nb_questions = 1;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let solution_mathador = [];
    let tirage, solution, expression, min, max, texte, texte_corr;
    let minmax = [];
    let a, b, c, d, e;
    if (!this.sup2) {
      // Si rien n'est saisi
      min = 0;
      max = 100;
    } else {
      if (typeof this.sup2 == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        min = 0;
        max = this.sup2;
      } else {
        minmax = this.sup2.split("-"); // Sinon on crée un tableau à partir des valeurs séparées par des -
        min = minmax[0];
        max = minmax[1];
      }
    }
    if (!this.sup) {
      // Si rien n'est saisi
      solution_mathador = Trouver_solution_mathador(min, max);
    } else {
      if (typeof this.sup == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        solution_mathador = Trouver_solution_mathador(min, max, this.sup);
      } else {
        tirage = this.sup.split("-"); // Sinon on crée un tableau à partir des valeurs séparées par des -
        for (let i = 0; i < tirage.length; i++) tirage[i] = parseInt(tirage[i]);
        solution_mathador = Trouver_solution_mathador(min, max, ...tirage);
      }
    }

    tirage = solution_mathador[0];
    solution = solution_mathador[1];
    expression = solution_mathador[3];

    texte = `Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`;
    texte_corr = `Pour le tirage $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${solution}$, la solution est : $${expression}=${solution}$ `;
    texte_corr += `ou $${solution_mathador[4]}$.<br>`;
    texte_corr += `En effet : <br>`;
    for (let i = 0; i < 4; i++) {
      texte_corr += `$${solution_mathador[2][i]}$<br>`;
    }
    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);

    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des nombres du tirage (de aucun à cinq)",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoin_formulaire2_texte = [
    "Intervalle pour la cible (ou rien pour cible non contrainte)",
    "Minimum-Maximum (éviter de trop contraindre la cible, cela peut bloquer le programme)",
  ]; // Texte, tooltip

  // this.besoin_formulaire2_numerique = ['Limite supérieure',100];
}
/**
 * 100-...=
 * @Auteur Rémi Angot
* Référence CM012
 */
function Complement_a_100() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Complément à 100";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(11, 89);
      texte = `$100-${a}$`;
      texte_corr = `$100-${a}=${100 - a}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Une soustraction dont le premier terme est un multiple de 10
 * @Auteur Rémi Angot
 * Référence CM013
*/
function Complement_a_une_dizaine() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Complément à une dizaine";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(2, 9) * 10;
      b = randint(2, a - 11);
      texte = `$${a}-${b}$`;
      texte_corr = `$${a}-${b}=${a - b}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Division d'un entier par 10, 100, 1000
 * @Auteur Rémi Angot
 * Référence CM016
*/
function Diviser_par_10_100_1000() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Diviser un entier par 10, 100 ou 1000";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = choice([randint(1, 9), randint(11, 99), randint(101, 999)]);
      b = choice([10, 100, 1000]);
      texte = `$${tex_nombre(a)}\\div${tex_nombre(b)}$`;
      texte_corr = `$${tex_nombre(a)}\\div${tex_nombre(b)}=${tex_nombrec(
        a / b
      )}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}

/**
 * Un entier à un 1 ou 2 chiffres, un nombre décimal avec une partie décimale à un ou 2 chiffres à diviser par 10, 100 ou 1000
 * @Auteur Rémi Angot
 * Référence CM017
*/
function Diviser_decimal_par_10_100_1000() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Diviser un nombre décimal par 10, 100 ou 1000";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = choice([
        randint(1, 9),
        randint(11, 99),
        calcul(randint(11, 99) / 10),
        calcul(randint(101, 999) / 100),
        calcul(randint(1, 9) / 10),
      ]);
      b = choice([10, 100, 1000]);
      texte = `$${tex_nombre(a)}\\div${tex_nombre(b)}$`;
      texte_corr = `$${tex_nombre(a)}\\div${tex_nombre(b)}=${tex_nombrec(
        a / b
      )}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer la moitié d'un nombre pair, d'un impair inférieur à 20, d'un multiple de 200, d'un nombre de la forme a00 avec a impair, d'un nombre de la forme
 *  a,b avec a et b pairs ou 1xx avec xx un nombre pair
 * @Auteur Rémi Angot
 * Référence CM009
*/
function Moitie() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Moitié";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(6);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Table de 2
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${a * 2}$`;
          texte_corr = `$\\text{La moitié de }${a * 2} \\text{ est } ${a}$`;
          break;
        case 2: // Impair inférieur à 20
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${a * 2 + 1}$`;
          texte_corr = `$\\text{La moitié de }${a * 2 + 1
            } \\text{ est } ${tex_nombrec(a + 5 / 10)}$`;
          break;
        case 3: // Table de 200
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${tex_nombre(a * 2 * 100)}$`;
          texte_corr = `$\\text{La moitié de }${tex_nombre(
            a * 2 * 100
          )} \\text{ est } ${tex_nombre(a * 100)}$`;
          break;
        case 4: // a00 avec a impair
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${tex_nombre((a * 2 + 1) * 100)}$`;
          texte_corr = `$\\text{La moitié de }${tex_nombre(
            (a * 2 + 1) * 100
          )} \\text{ est } ${tex_nombre(a * 100 + 50)}$`;
          break;
        case 5: // a,b avec a et b pairs
          a = randint(2, 9);
          b = randint(2, 9);
          texte = `$\\text{La moitié de }${tex_nombrec(
            a * 2 + (b * 2) / 100
          )}$`;
          texte_corr = `$\\text{La moitié de }${tex_nombrec(
            a * 2 + (b * 2) / 100
          )} \\text{ est } ${tex_nombrec(a + b / 100)}$`;
          break;
        case 6: // 1xx avec xx un nombre pair
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${100 + a * 2}$`;
          texte_corr = `$\\text{La moitié de }${100 + a * 2} \\text{ est } ${50 + a
            }$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer le tiers d'un multiple de 3, d'un multiple de 300, d'un multiple de 30 ou d'un nombre a,b avec a et b multiples de 3
 * @Auteur Rémi Angot
* Référence CM010
 */
function Tiers() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Tiers";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(4);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Table de 3
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${a * 3}$`;
          texte_corr = `$\\text{Le tiers de }${a * 3} \\text{ est } ${a}$`;
          break;
        case 2: // Table de 300
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${tex_nombre(a * 3 * 100)}$`;
          texte_corr = `$\\text{Le tiers de }${tex_nombre(
            a * 3 * 100
          )} \\text{ est } ${tex_nombre(a * 100)}$`;
          break;
        case 3: // Table de 30
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${tex_nombre(a * 3 * 10)}$`;
          texte_corr = `$\\text{Le tiers de }${tex_nombre(
            a * 3 * 10
          )} \\text{ est } ${tex_nombre(a * 10)}$`;
          break;
        case 4: // a,b avec a et b divisibles par 3
          a = randint(2, 9);
          b = randint(2, 9);
          texte = `$\\text{Le tiers de }${tex_nombrec(a * 3 + (b * 3) / 100)}$`;
          texte_corr = `$\\text{Le tiers de }${tex_nombrec(
            a * 3 + (b * 3) / 100
          )} \\text{ est } ${tex_nombrec(a + b / 100)}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer le quart d'un multiple de 4, d'un impair, d'un multiple de 400, d'un multiple de 40, d'un nombre a,b avec a et b multiples de 4
 * @Auteur Rémi Angot
 * Référence CM011
*/
function Quart() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Quart";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(5);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Table de 4
          a = randint(2, 9);
          texte = `$\\text{Le quart de }${a * 4}$`;
          texte_corr = `$\\text{Le quart de }${a * 4} \\text{ est } ${a}$`;
          break;
        case 2: // Impair
          a = randint(2, 9);
          b = choice([1, 2, 3]);
          texte = `$\\text{Le quart de }${a * 4 + b}$`;
          texte_corr = `$\\text{Le quart de }${a * 4 + b
            } \\text{ est } ${tex_nombrec(a + b / 4)}$`;
          break;
        case 3: // Table de 400
          a = randint(2, 9);
          texte = `$\\text{Le quart de }${tex_nombre(a * 4 * 100)}$`;
          texte_corr = `$\\text{Le quart de }${tex_nombre(
            a * 4 * 100
          )} \\text{ est } ${tex_nombre(a * 100)}$`;
          break;
        case 4: // Table de 40
          a = randint(2, 9);
          texte = `$\\text{Le quart de }${tex_nombre(a * 4 * 10)}$`;
          texte_corr = `$\\text{Le quart de }${tex_nombre(
            a * 4 * 10
          )} \\text{ est } ${tex_nombre(a * 10)}$`;
          break;
        case 5: // a,b avec a et b divisibles par 4
          a = randint(2, 9);
          b = randint(2, 9);
          texte = `$\\text{Le quart de }${tex_nombrec(a * 4 + (b * 4) / 100)}$`;
          texte_corr = `$\\text{Le quart de }${tex_nombrec(
            a * 4 + (b * 4) / 100
          )} \\text{ est } ${tex_nombrec(a + b / 100)}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer le double ou le triple d'un nombre, calculer la moitié d'un nombre pair ou le tiers d'un multiple de 3
 * @Auteur Rémi Angot
* Référence CM014
 */
function Double_moitie_tiers_triple() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Double, moitié, tiers, triple";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(4);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Double
          a = randint(2, 9);
          texte = `$\\text{Le double de }${a}$`;
          texte_corr = `$\\text{Le double de }${a} \\text{ est } ${a * 2}$`;
          break;
        case 2: // Moitié
          a = randint(2, 9) * 2;
          texte = `$\\text{La moitié de }${a * 2}$`;
          texte_corr = `$\\text{La moitié de }${a * 2} \\text{ est } ${a}$`;
          break;
        case 3: // Triple
          a = randint(2, 9);
          texte = `$\\text{Le triple de }${a}$`;
          texte_corr = `$\\text{Le triple de }${a} \\text{ est } ${a * 3}$`;
          break;
        case 4: // Tiers
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${a * 3}$`;
          texte_corr = `$\\text{Le tiers de }${a * 3} \\text{ est } ${a}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}


/**
 * @Auteur Rémi Angot
 */
function Code_LaTeX_personnalise() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Code LaTeX personnalisé";
  this.pas_de_version_HMTL = true;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "%Votre code LaTeX";
  this.sup2 = "%Votre code LaTeX pour le corrigé";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_texte = [
    "Code LaTeX énoncé",
    "Par exemple : \\input{mon_fichier}",
  ]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  this.besoin_formulaire2_texte = [
    "Code LaTeX correction",
    "Par exemple : \\input{mon_fichier_corr}",
  ];
  this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.contenu = this.sup;
    this.contenu_correction = this.sup2;
  };
}

/**
 * @Auteur Rémi Angot
 */
function HTML_personnalise() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Exercice personnalisé";
  this.pas_de_version_HMTL = false;
  this.pas_de_version_LaTeX = true;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "Énoncé de l'exercice";
  this.sup2 = "Énoncé de la correction";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_long_texte = ["Exercice"]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  this.besoin_formulaire2_texte = ["Correction"];
  this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.contenu = this.sup;
    this.contenu_correction = this.sup2;
  };
}

// Exercices paramétrés pour correspondre au référentiel
// Référence 5P10
//function Proportionnalite_pas_proportionnalite_5e(){
//  Proportionnalite_pas_proportionnalite.call(this)
// Pas de paramètres Sup
//}


/**
 * Non Publié : base servant à faire des tutoriels vidéos
 * @Auteur Jean-Claude Lhote
 * Réf : betaExoConstruction
 * publié le 1/12/2020
 */
function Exercice_constructions_basiques() {
  "use strict"
  Exercice.call(this)
  this.titre = "Programmes de constructions (en chantier)";
  this.nb_questions = 1; // Ici le nombre de questions
  this.nb_questions_modifiable=false // Active le formulaire nombre de questions
  this.nb_cols = 1; // Le nombre de colonnes dans l'énoncé LaTeX
  this.nb_cols_corr = 1;// Le nombre de colonne pour la correction LaTeX
  this.pas_de_version_LaTeX=false // mettre à true si on ne veut pas de l'exercice dans le générateur LaTeX
  this.pas_de_version_HMTL=false // mettre à true si on ne veut pas de l'exercice en ligne
// Voir la Classe Exercice pour une liste exhaustive des propriétés disponibles.

//  this.sup = false; // A décommenter : valeur par défaut d'un premier paramètre
//  this.sup2 = false; // A décommenter : valeur par défaut d'un deuxième paramètre
//  this.sup3 = false; // A décommenter : valeur par défaut d'un troisième paramètre

// c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice
  this.nouvelle_version = function (numero_de_l_exercice) {
  // la variable numero_de_l_exercice peut être récupérée pour permettre de différentier deux copies d'un même exo
  // Par exemple, pour être certain de ne pas avoir les mêmes noms de points en appelant 2 fois cet exo dans la même page

  this.liste_questions = [] // tableau contenant la liste des questions 
  this.liste_corrections = []
  let type_de_questions_disponibles=[1] // tableau à compléter par valeurs possibles des types de questions
  let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
// Ci-dessus On crée une liste aléatoire comprenant nb_questions parmi les types disponibles.
/* Un exemple ci-dessous : si la classe est 6, alors les types dispo sont 1 et 2 sinon , 1,2,3 et 4.
if (this.classe == 6) type_de_questions_disponibles = [1, 2]
    else type_de_questions_disponibles = [1, 2, 3,4]
liste_type_de_questions = combin,aison_listes(type_de_questions_disponibles, this.nb_questions)
*/
// boucle pour fabriquer les nb_questions questions en s'assurant que si il n'y a pas nb_questions différentes
// La boucle s'arrête après 50 tentatives.
    let A,B,C,D,traces1,traces2,labels1,labels2,kare,aA,aB,aC,aD
    let objets_enonce,objets_enonceml,objets_correction,params_enonce,params_enonceml,params_correction
    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
      objets_enonce = [] // on initialise le tableau des objets Mathalea2d de l'enoncé
      objets_enonceml = [] // Idem pour l'enoncé à main levée si besoin
      objets_correction = [] // Idem pour la correction

      texte = `Construire le carré $ABCD$.<br>` // Nous utilisons souvent cette variable pour construire le texte de la question.
      texte_corr = `Pour cette construction on peut utiliser la règle et l'équerre.<br>` // Idem pour le texte de la correction.
//      nom = creerNomDePolygone(3, "PQ")
// fonction permettant de choisir un nom de polygone, soit ici 3 lettres qui se suivent à l'exclusion de la séquence PQ
      switch (liste_type_de_questions[i]) { // Chaque question peut être d'un type différent, ici 4 cas sont prévus...
        case 1:
          A=point(0,0,'A','below')
          B=point(5,randint(-30,30)/10,'B','below')
          C=rotation(A,B,-90,'C','above')
          D=rotation(B,A,90,'D','above')
          traces1=tracePoint(A,B)
          labels1=labelPoint(A,B)
          traces2=tracePoint(A,B,C,D)
          labels2=labelPoint(A,B,C,D)
          kare=carre(A,B)
          kare.epaisseur=2
          aA=codageAngleDroit(B,A,D)
          aB=codageAngleDroit(A,B,C)
          aC=codageAngleDroit(B,C,D)
          aD=codageAngleDroit(C,D,A)

          objets_enonce.push (traces1,labels1) 
          objets_enonceml.push(traces2,labels2,kare,aA,aB,aC,aD)
          objets_correction.push(traces2,labels2,kare,aA,aB,aC,aD)
          //ici sont créés les texte, tex_corr, objets mathalea2d divers entrant dans le contenu de l'exercice
        break;

        case 2:

          // Idem Cas1 mais avec d'autres texte, texte_corr...
        break

        case 3:
          
        break
          
        case 4:
        
        break  
          
      }
//  objets_enonce.push () // On rempli les tableaux d'objets Mathalea2d
//  objets_enonceml.push()
//  objets_correction.push()

//paramètres de la fenêtre Mathalea2d pour l'énoncé main levée
     params_enonceml = { xmin: -5, ymin: -5, xmax: 9, ymax: 9, pixelsParCm: 20, scale: 1, mainlevee: true, amplitude: 1 }
//paramètres de la fenêtre Mathalea2d pour l'énoncé normal
      params_enonce = { xmin:-5, ymin: -5, xmax: 9, ymax: 9, pixelsParCm: 20, scale: 1, mainlevee: false}
//paramètres de la fenêtre Mathalea2d pour la correction
      params_correction = { xmin: -5, ymin: -5, xmax: 9, ymax: 9, pixelsParCm: 20, scale: 1 }
// On ajoute au texte de l'énoncé, la figure à main levée et la figure de l'enoncé.
      texte += mathalea2d(params_enonceml, objets_enonceml)+ mathalea2d(params_enonce, objets_enonce)
// On ajoute au texte de la correction, la figure de la correction
      texte_corr += mathalea2d(params_correction, objets_correction)
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on la stocke dans la liste des questions
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this); // On envoie l'exercice à la fonction de mise en page
  };
// Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants
// Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.
// Il sont associés respectivement aux paramètres sup, sup2 et sup3.

//	this.besoin_formulaire_numerique = ['Type de questions', 3, `1 : Perpendiculaires\n 2 : Parallèles\n 3 : Mélange`]
//  this.besoin_formulaire2_numerique = ["Type de cahier",3,`1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche`];
// this.besoin_formulaire3_case_a_cocher =['figure à main levée',true]

} 

function Test_main_levee() {
  "use strict";
  Exercice.call(this);

  this.titre = "Test de main levée";
  this.nb_questions = 1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = true;
  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []
    this.liste_corrections = []
    let A = point(0, 0)
    let B = point(5, 0)
    let D = point(5, -5)
    let C = point(1, 5)
    let a = codeAngle(B, A, C, 1, '', 'green')
    let s1 = segment(B, A, 'red')
    let s2 = segment(A, C, 'red')
    let s3 = segment(B, D, 'red')
    let b = codeAngle(A, B, D, 0.8, '', 'blue')
    let texte = mathalea2d({ xmin: -1, ymin: -6, xmax: 6, ymax: 6, pixelsParCm: 20, scale: 3, mainlevee: this.sup, amplitude: 1 }, a, s1, s2, s3, b)
    pixelsParCm = 20
    let texte_corr = ""
    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this)
  }
  this.besoin_formulaire_case_a_cocher = ["main levee"];
}


/** 
 * * Exo test pour quand j'en ai besoin
 * * pas de numéro
 * * Tests
 * @author Sébastien Lozano
 */

function Tests_du_Seb() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.beta = true;
  this.sup = 1;
  if (this.beta) {
    this.nb_questions = 2;
  } else {
    this.nb_questions = 2;
  };

  this.titre = "Exo test pour quand j'en ai besoin";
  this.consigne = `Consigne `;

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
  sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.beta) {
      type_de_questions_disponibles = [0, 1];
    } else {
      //type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);      			
      type_de_questions_disponibles = [0, 1];
    };

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    //let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {

      // pour les situations, autant de situations que de cas dans le switch !
      let situations = [
        {//case 0 -->
        },
        {//case 1 -->
        },
      ];

      let enonces = [];
      for (let k = 0; k < situations.length; k++) {
        enonces.push({
          enonce: `
          Type ${k}<br>	
          ${JSON.stringify(decomp_fact_prem_array(238))}<br>			
          ${typeof decomp_fact_prem_array(238)}<br>
          ${JSON.stringify(obtenir_liste_facteurs_premiers(238))}<br>
          ${typeof obtenir_liste_facteurs_premiers(238)}<br>
					`,
          question: ``,
          correction: `
					Correction type ${k}
					`
        });
      };

      // autant de case que d'elements dans le tableau des situations
      switch (liste_type_de_questions[i]) {
        case 0:
          texte = `${enonces[0].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<code class="b">score</code> pour ...`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte += `             `
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
          };
          break;
        case 1:
          texte = `${enonces[1].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[1].correction}`;
          };
          break;

      };

      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);

  }
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
  //this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
};


/**
 * @Auteur Rémi Angot
 */
function LaTeX_static() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Fichier statique";
  this.pas_de_version_HMTL = false;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "Nom du fichier";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_texte = [
    "url du fichier",
    "nom du fichier sans l'extension",
  ]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  //this.besoin_formulaire2_texte = ['Code LaTeX correction','Par exemple : \\input{mon_fichier_corr}'];

  this.nouvelle_version = function (numero_de_l_exercice) {
    //this.contenu_correction = '%£tex/probleme_altitude_corr£'
    //this.contenu = '%£tex/probleme_altitude£'
    this.contenu = "%£" + this.sup + "£";
    this.contenu_correction = "%£" + this.sup + "_corr£";
    //liste_des_exercices_statiques.push(this.sup)
  };
}

// FIN DES EXERCICES
// Gestion des listes d'exercices

jQuery(document).ready(function () {
  // Ne se fait qu'après que le DOM soit entièrement défini

  // Trie par ordre alphabétique les exercices disponibles
  liste_des_exercices_disponibles = tridictionnaire(
    liste_des_exercices_disponibles
  );

  // Détermine le nombre d'exercices par niveaux
  let nombre_d_exercices_disponibles_c3 = 0;
  let nombre_d_exercices_disponibles_6 = 0;
  let nombre_d_exercices_disponibles_5 = 0;
  let nombre_d_exercices_disponibles_4 = 0;
  let nombre_d_exercices_disponibles_3 = 0;
  let nombre_d_exercices_disponibles_2 = 0;
  let nombre_d_exercices_disponibles_1 = 0;
  let nombre_d_exercices_disponibles_T = 0;
  let nombre_d_exercices_disponibles_CM = 0;
  let nombre_d_exercices_disponibles_prof = 0;
  let nombre_d_exercices_disponibles_PE = 0;
  let nombre_d_exercices_disponibles_beta = 0;
  for (var id in liste_des_exercices_disponibles) {
    if (id[0] == "c" && id[1] == "3") {
      nombre_d_exercices_disponibles_c3 += 1;
    }
    if (id[0] == 6) {
      nombre_d_exercices_disponibles_6 += 1;
    }
    if (id[0] == 5) {
      nombre_d_exercices_disponibles_5 += 1;
    }
    if (id[0] == 4) {
      nombre_d_exercices_disponibles_4 += 1;
    }
    if (id[0] == 3) {
      nombre_d_exercices_disponibles_3 += 1;
    }
    if (id[0] == 2) {
      nombre_d_exercices_disponibles_2 += 1;
    }
    if (id[0] == 1) {
      nombre_d_exercices_disponibles_1 += 1;
    }
    if (id[0] == "T") {
      nombre_d_exercices_disponibles_T += 1;
    }
    if (id[0] == "C") {
      nombre_d_exercices_disponibles_CM += 1;
    }
    if (id[0] == "P" && id[1] == "0") {
      nombre_d_exercices_disponibles_prof += 1;
    }
    if (id[0] == "P" && id[1] == "E") {
      nombre_d_exercices_disponibles_PE += 1;
    }
    if (id[0] == "b" && id[1] == "e") {
      nombre_d_exercices_disponibles_beta += 1;
    }
  }

  //
  let liste_html_des_exercices_c3 = [];
  let liste_html_des_exercices_6 = [];
  let liste_html_des_exercices_5 = [];
  let liste_html_des_exercices_4 = [];
  let liste_html_des_exercices_3 = [];
  let liste_html_des_exercices_2 = [];
  let liste_html_des_exercices_1 = [];
  let liste_html_des_exercices_T = [];
  let liste_html_des_exercices_CM = [];
  let liste_html_des_exercices_prof = [];
  let liste_html_des_exercices_PE = [];
  let liste_html_des_exercices_beta = [];

  // Affiche de la liste des exercices disponibles
  let liste_html_des_exercices =
    '<h3 class="ui block header">Exercices disponibles</h3>\n\n';

  function liste_html_des_exercices_d_un_theme(theme) {
    let liste = '';
    let dictionnaire = filtreDictionnaire(liste_des_exercices_disponibles, theme);
    for (let id in dictionnaire) {
      let exercice_tmp = new dictionnaire[id]();
      liste +=
        `<span class="id_exercice">${id}</span> - <a class="lien_id_exercice" numero="${id}">${exercice_tmp.titre}</a></br>\n`;
    }
    return liste;
  }

  function liste_html_des_exercices_d_un_niveau(liste_de_themes) { // liste_de_themes = [['6N1','6N1 - Numérations et fractions niveau 1'] , [' ',' '] ]
    let liste = '';
    for (let theme of liste_de_themes) {
      liste += `<h3>${theme[1]}</h3>`;
      liste += liste_html_des_exercices_d_un_theme(theme[0]);
    }
    return liste;
  }

  liste_html_des_exercices_c3 = liste_html_des_exercices_d_un_niveau([
    ['c3C1', 'c3C1 - Calculs niveau 1'], ['c3N1', 'c3N1 - Numération Niveau 1'], ['c3N2', 'c3N2 - Numération Niveau 2']])

  liste_html_des_exercices_6 = liste_html_des_exercices_d_un_niveau([
    ['6C1', '6C1 - Calculs niveau 1'], ['6C2', '6C2 - Calculs niveau 2'], ['6C3', '6C3 - Calculs niveau 3'],
    ['6D1', '6D1 - Les durées'],
    ['6G1', '6G1 - Géométrie niveau 1'], ['6G2', '6G2 - Géométrie niveau 2'], ['6G3', '6G3 - Géométrie niveau 3'], ['6G4', '6G4 - Géométrie niveau 4'],
    ['6M1', '6M1 - Grandeurs et mesures niveau 1'], ['6M2', '6M2 - Grandeurs et mesures niveau 2'], ['6M3', '6M3 - Volumes'],
    ['6N1', '6N1 - Numération et fractions niveau 1'], ['6N2', '6N2 - Numération et fractions niveau 2'], ['6N3', '6N3 - Numération et fractions niveau 3'], ['6N4', '6N4 - Numération et fractions niveau 4'],
    ['6P1', '6P1 - Proportionnalité'], ['6S1', '6S1 - Statistiques'],
    ['6Algo1', '6A - Algorithmique']
  ])
  liste_html_des_exercices_5 = liste_html_des_exercices_d_un_niveau([
    ['5A1', '5A1 - Arithmetique'], ['5C1', '5C1 - Calculs'],
    ['5G1', '5G1 - Symétries'], ['5G2', '5G2 - Triangles'], ['5G3', '5G3 - Angles'], ['5G4', '5G4 - Parallélogrammes'], ['5G5', '5G5 - Espace'],
    ['5L1', '5L1 - Calcul littéral'],
    ['5M1', '5M1 - Périmètres et aires'], ['5M2', '5M2 - Volumes'], ['5M3', '5M3 - Durées'],
    ['5N1', '5N1 - Numération et fractions niveau 1'], ['5N2', '5N2 - Calculs avec les fractions'],
    ['5P1', '5P1 - Proportionnalité'], ['5R1', '5R1 - Relatifs niveau 1'], ['5R2', '5R2 - Relatifs niveau 2'],
    ['5S1', '5S1 - Statistiques'], ['5S2', '5S2 - Probabilités']
  ])
  liste_html_des_exercices_4 = liste_html_des_exercices_d_un_niveau([
    ['4C1', '4C1 - Relatifs'], ['4C2', '4C2 - Fractions'], ['4C3', '4C3 - Puissances'],
    ['4F1', '4F1 - Notion de fonction'],
    ['4G1', '4G1 - Translation et rotation'], ['4G2', '4G2 - Théorème de Pythagore'], ['4G3', '4G3 - Théorème de Thalès'], ['4G4', "4G4 - Cosinus d'un angle"], ['4G5', "4G5 - Espace"],
    ['4L1', '4L1 - Calcul littéral'], ['4L2', '4L2 - Équation'], ['4P1', '4P1 - Proportionnalité'], ['4S1', '4S1 - Statistiques'], ['4S2', '4S2 - Probabilités'],
    ['4Algo1', '4A1 - Algorithmique']
  ])
  liste_html_des_exercices_3 = liste_html_des_exercices_d_un_niveau([
    ['3A1', '3A1 - Arithmetique'],
    ['3F1', '3F1 - Généralités sur les fonctions'], ['3F2', '3F2 - Fonctions affines et linéaires'],
    ['3G1', '3G1 - Homothétie et rotation'], ['3G2', '3G2 - Théorème de Thalès'], ['3G3', '3G3 - Trigonométrie'], ['3G4', "3G4 - Espace"],
    ['3L1', '3L1 - Calcul littéral'], ['3P1', '3P1 - Proportionnalité'], ['3S1', '3S1 - Statistiques'], ['3S2', '3S2 - Probabilités']
  ])

  for (var id in liste_des_exercices_disponibles) {
    let exercice_tmp = new liste_des_exercices_disponibles[id]();

    if (id[0] == 2) {
      liste_html_des_exercices_2 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 1) {
      liste_html_des_exercices_1 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 'T') {
      liste_html_des_exercices_T +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "P" && id[1] == "E") {
      liste_html_des_exercices_PE +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "C") {
      liste_html_des_exercices_CM +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "P" && id[1] == "0") {
      liste_html_des_exercices_prof +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "b" && id[1] == "e") {
      liste_html_des_exercices_beta +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
  }

  // Change l'ordre des exercices suivant l'URL
  if (window.location.href.indexOf("beta") > 0) {
    liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Beta (${nombre_d_exercices_disponibles_beta})</div><div class="active content">`;
    liste_html_des_exercices += liste_html_des_exercices_beta;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `</div>`;
  } else if (window.location.href.indexOf("outils") > 0) {
    liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="active content">`;
    liste_html_des_exercices += liste_html_des_exercices_prof;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `</div>`;
  } else if (window.location.href.indexOf("cm.html") > 0) {
    liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="active content">`;
    liste_html_des_exercices += liste_html_des_exercices_CM;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cours Moyen(${nombre_d_exercices_disponibles_c3})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_c3;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_6;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_5;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_4;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_3;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_2;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Première (${nombre_d_exercices_disponibles_1})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_1;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Terminale (${nombre_d_exercices_disponibles_T})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_T;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_PE;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `</div>`;
  } else {
    liste_html_des_exercices += `<div class="ui accordion"><div class="title"><i class="dropdown icon"></i>Cours Moyen (${nombre_d_exercices_disponibles_c3})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_c3;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_6;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_5;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_4;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_3;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_2;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Première (${nombre_d_exercices_disponibles_1})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_1;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Terminale (${nombre_d_exercices_disponibles_T})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_T;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_PE;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_CM;
    liste_html_des_exercices += `</div>`;
    // Ajoute les outils prof sur mathalealatex
    if (window.location.href.indexOf("mathalealatex.html") > 0) {
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_prof;
      liste_html_des_exercices += `</div>`;
    }
    liste_html_des_exercices += `</div>`;
  }

  $("#liste_des_exercices").html(liste_html_des_exercices);
  renderMathInElement(document.body, {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: true,
    errorColor: "#CC0000",
    strict: "warn",
    trust: false,
  });

  // Gère le clic sur un exercice de la liste
  $(".lien_id_exercice").click(function () {
    let numero = $(this).attr("numero");
    if ($("#choix_des_exercices").val() == "") {
      $("#choix_des_exercices").val($("#choix_des_exercices").val() + numero);
    } else {
      $("#choix_des_exercices").val(
        $("#choix_des_exercices").val() + "," + numero
      );
    }
    liste_des_exercices = $("#choix_des_exercices")
      .val()
      .replace(/\s/g, "")
      .replace(";", ",")
      .split(",");
    mise_a_jour_de_la_liste_d_exercice();

    // Actualise KaTeX pour les titres d'exercices utilisant LaTeX
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: true,
      errorColor: "#CC0000",
      strict: "warn",
      trust: false,
    });
  });
});

