// Gestion des paramètres
let div = document.getElementById("div_code_LaTeX"); // Récupère le div dans lequel le code va être affiché
let div_overleaf = document.getElementById("overleaf"); // Récupère le div dans lequel le code va être affiché
let div_parametres_generaux = document.getElementById("parametres_generaux"); // Récupère le div dans lequel seront inscrit les paramètres
let form_consigne = [],
    form_nb_questions = [],
    form_correction_detaillee = [],
    form_nb_cols = [],
    form_nb_cols_corr = [],
    form_spacing = [],
    form_spacing_corr = [],
    form_sup = [],
    form_sup2 = [],
    form_sup3 = []; // Création de tableaux qui recevront les éléments HTML de chaque formulaires

let URL_de_depart_complexe = false; // Si l'utilisateur a entré une URL avec des paramètres, on ne la modifie pas
let sortie_html = true;
export default function parametres_exercice(exercice) {
    /* Pour l'exercice i, on rajoute un formulaire avec 5 inputs : 
nombre de questions, nombre de colonnes,nombre de colonnes dans le corrigé,
espacement et espacement dans le corrigé.
Les réponses modifient les caractéristiques de l'exercice puis le code LaTeX est mis à jour
*/
    console.log(exercice)
    div_parametres_generaux.innerHTML = ""; // Vide le div parametres_generaux
    if (exercice.length > 0) {
        div_parametres_generaux.innerHTML += '<div class="ui hidden divider"></div>';

        div_parametres_generaux.innerHTML += `<div><label for="form_serie">Clé de la série d'exercice : </label> <input id="form_serie" type="text" style="padding: 5px;
  border: 1px solid #ccc;border-radius: 4px;"></div>`;
    }

    for (let i = 0; i < exercice.length; i++) {
        if (sortie_html) {
            div_parametres_generaux.innerHTML += '<h4 class="ui dividing header">Exercice n°' + (i + 1) + " : " + exercice[i].titre + " − " + 'id' + "</h4>";
            if (exercice[i].pas_de_version_LaTeX) {
                div_parametres_generaux.innerHTML += "<p><em>Cet exercice n'a pas de version LaTeX et ne peut donc pas être exporté en PDF.</em></p>";
            }
            if (exercice[i].nb_questions_modifiable) {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_nb_questions' + i + '">Nombre de questions : </label> <input id="form_nb_questions' + i + '" type="number"  min="1" max="99"></div>';
            }
            if (exercice[i].correction_detaillee_disponible) {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_correction_detaillee' + i + '">Correction détaillée : </label> <input id="form_correction_detaillee' + i + '" type="checkbox" ></div>';
            }
            if (!exercice[i].nb_questions_modifiable && !exercice[i].correction_detaillee_disponible && !exercice[i].besoin_formulaire_numerique && !exercice[i].besoin_formulaire_texte) {
                div_parametres_generaux.innerHTML += "<p><em>Cet exercice ne peut pas être paramétré.</em></p>";
            }
        } else {
            div_parametres_generaux.innerHTML += '<h4 class="ui dividing header">Exercice n°' + (i + 1) + " : " + exercice[i].titre + "</h4>";

            if (exercice[i].consigne_modifiable) {
                div_parametres_generaux.innerHTML += '<div><label for="form_consigne' + i + '">Consigne : </label> <input id="form_consigne' + i + '" type="texte" size="20"></div>';
            }
            if (exercice[i].nb_questions_modifiable) {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_nb_questions' + i + '">Nombre de questions : </label> <input id="form_nb_questions' + i + '" type="number"  min="1" max="99"></div>';
            }
            if (exercice[i].correction_detaillee_disponible) {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_correction_detaillee' + i + '">Correction détaillée : </label> <input id="form_correction_detaillee' + i + '" type="checkbox" ></div>';
            }
            if (exercice[i].nb_cols_modifiable) {
                div_parametres_generaux.innerHTML += '<div><label for="form_nb_cols' + i + '">Nombre de colonnes : </label><input id="form_nb_cols' + i + '" type="number" min="1" max="99"></div>';
            }
            if (exercice[i].nb_cols_corr_modifiable) {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_nb_cols_corr' + i + '">Nombre de colonnes dans la correction : </label><input id="form_nb_cols_corr' + i + '" type="number" min="1" max="99"></div>';
            }
            if (exercice[i].spacing_modifiable) {
                div_parametres_generaux.innerHTML += '<div><label for="form_nb_cols_corr' + i + '">Espacement : </label><input id="form_spacing' + i + '" type="number" min="1" max="99"></div>';
            }
            if (exercice[i].spacing_corr_modifiable) {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_nb_cols_corr' + i + '">Espacement dans la correction : </label><input id="form_spacing_corr' + i + '" type="number" min="1" max="99"></div>';
            }
        }

        // Si un formulaire supplémentaire est défini dans l'exercice alors on l'ajoute
        if (exercice[i].besoin_formulaire_numerique || exercice[i].besoin_formulaire_texte) {
            // Ajout du titre pour les réglages supplémentaires
            div_parametres_generaux.innerHTML += "<h4 class='ui dividing header'></h4>";
        }

        if (exercice[i].besoin_formulaire_numerique) {
            // Création d'un formulaire numérique
            if (exercice[i].besoin_formulaire_numerique[2]) {
                // Si un tooltip est défini
                div_parametres_generaux.innerHTML +=
                    '<div data-tooltip="' +
                    exercice[i].besoin_formulaire_numerique[2] +
                    '"" data-inverted="" data-position="top left"><label for="form_sup' +
                    i +
                    '">' +
                    exercice[i].besoin_formulaire_numerique[0] +
                    ' : </label><input id="form_sup' +
                    i +
                    '" type="number"  min="1" max="' +
                    exercice[i].besoin_formulaire_numerique[1] +
                    '"></div>';
            } else {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_sup' +
                    i +
                    '">' +
                    exercice[i].besoin_formulaire_numerique[0] +
                    ' : </label><input id="form_sup' +
                    i +
                    '" type="number"  min="1" max="' +
                    exercice[i].besoin_formulaire_numerique[1] +
                    '"></div>';
            }
        }

        if (exercice[i].besoin_formulaire_texte) {
            // Création d'un formulaire texte
            div_parametres_generaux.innerHTML +=
                "<div style='display: inline'><label for='form_sup" +
                i +
                "'>" +
                exercice[i].besoin_formulaire_texte[0] +
                " : </label>\
			<div style='display: inline' data-tooltip='" +
                exercice[i].besoin_formulaire_texte[1] +
                "' data-inverted=''><input id='form_sup" +
                i +
                "' type='text' size='20' ></div></div>";
        }

        if (exercice[i].besoin_formulaire_long_texte) {
            // Création d'un long formulaire de texte
            div_parametres_generaux.innerHTML +=
                "<label for='form_sup" +
                i +
                "'>" +
                exercice[i].besoin_formulaire_long_texte[0] +
                " : </label>\
			<div style='display: inline' data-tooltip='" +
                exercice[i].besoin_formulaire_long_texte[1] +
                "' data-inverted=''><textarea id='form_sup" +
                i +
                "'></textarea></div>";
            div_parametres_generaux.innerHTML += `<div class="ui form">
			<div class="field">
			<label>Text</label>
			<textarea></textarea>
			</div>
			</div>`;
        }

        if (exercice[i].besoin_formulaire_case_a_cocher) {
            // Création d'un formulaire texte
            div_parametres_generaux.innerHTML +=
                "<div style='display: inline'><label for='form_sup" + i + "'>" + exercice[i].besoin_formulaire_case_a_cocher[0] + " : </label>\
			<input id='form_sup" + i + "' type='checkbox'  ></div>";
        }

        if (exercice[i].besoin_formulaire2_case_a_cocher) {
            // Création d'un formulaire texte
            div_parametres_generaux.innerHTML +=
                "<div style='display: inline'><label for='form_sup2" +
                i +
                "'>" +
                exercice[i].besoin_formulaire2_case_a_cocher[0] +
                " : </label>\
			<input id='form_sup2" +
                i +
                "' type='checkbox'  ></div>";
        }

        if (exercice[i].besoin_formulaire2_numerique) {
            // Création d'un formulaire numérique
            if (exercice[i].besoin_formulaire2_numerique[2]) {
                // Si un tooltip est défini
                div_parametres_generaux.innerHTML +=
                    '<div data-tooltip="' +
                    exercice[i].besoin_formulaire2_numerique[2] +
                    '"" data-inverted="" data-position="top left"><label for="form_sup2' +
                    i +
                    '">' +
                    exercice[i].besoin_formulaire2_numerique[0] +
                    ' : </label><input id="form_sup2' +
                    i +
                    '" type="number"  min="1" max="' +
                    exercice[i].besoin_formulaire2_numerique[1] +
                    '"></div>';
            } else {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_sup2' +
                    i +
                    '">' +
                    exercice[i].besoin_formulaire2_numerique[0] +
                    ' : </label><input id="form_sup2' +
                    i +
                    '" type="number"  min="1" max="' +
                    exercice[i].besoin_formulaire2_numerique[1] +
                    '"></div>';
            }
        }

        if (exercice[i].besoin_formulaire2_texte) {
            // Création d'un formulaire texte
            div_parametres_generaux.innerHTML +=
                "<p></p><div style='display: inline'><label for='form_sup2" +
                i +
                "'>" +
                exercice[i].besoin_formulaire2_texte[0] +
                " : </label>\
			<div style='display: inline' data-tooltip='" +
                exercice[i].besoin_formulaire2_texte[1] +
                "' data-inverted=''><input id='form_sup2" +
                i +
                "' type='text' size='20' ></div></div>";
        }

        if (exercice[i].besoin_formulaire3_case_a_cocher) {
            // Création d'un formulaire texte
            div_parametres_generaux.innerHTML +=
                "<div style='display: inline'><label for='form_sup3" +
                i +
                "'>" +
                exercice[i].besoin_formulaire3_case_a_cocher[0] +
                " : </label>\
			<input id='form_sup3" +
                i +
                "' type='checkbox'  ></div>";
        }

        if (exercice[i].besoin_formulaire3_numerique) {
            // Création d'un formulaire numérique
            if (exercice[i].besoin_formulaire3_numerique[2]) {
                // Si un tooltip est défini
                div_parametres_generaux.innerHTML +=
                    '<div data-tooltip="' +
                    exercice[i].besoin_formulaire3_numerique[2] +
                    '"" data-inverted="" data-position="top left"><label for="form_sup3' +
                    i +
                    '">' +
                    exercice[i].besoin_formulaire3_numerique[0] +
                    ' : </label><input id="form_sup3' +
                    i +
                    '" type="number"  min="1" max="' +
                    exercice[i].besoin_formulaire3_numerique[1] +
                    '"></div>';
            } else {
                div_parametres_generaux.innerHTML +=
                    '<div><label for="form_sup3' +
                    i +
                    '">' +
                    exercice[i].besoin_formulaire3_numerique[0] +
                    ' : </label><input id="form_sup3' +
                    i +
                    '" type="number"  min="1" max="' +
                    exercice[i].besoin_formulaire3_numerique[1] +
                    '"></div>';
            }
        }

        if (exercice[i].besoin_formulaire3_texte) {
            // Création d'un formulaire texte
            div_parametres_generaux.innerHTML +=
                "<p></p><div style='display: inline'><label for='form_sup3" +
                i +
                "'>" +
                exercice[i].besoin_formulaire3_texte[0] +
                " : </label>\
			<div style='display: inline' data-tooltip='" +
                exercice[i].besoin_formulaire3_texte[1] +
                "' data-inverted=''><input id='form_sup3" +
                i +
                "' type='text' size='20' ></div></div>";
        }
    }

    for (let i = 0; i < exercice.length; i++) {
        if (!sortie_html) {
            // Les paramètres à ne gérer que pour la version LaTeX
            // Gestion de la consigne
            if (exercice[i].consigne_modifiable) {
                form_consigne[i] = document.getElementById("form_consigne" + i);
                form_consigne[i].value = exercice[i].consigne; // Rempli le formulaire avec la consigne
                form_consigne[i].addEventListener("change", function (e) {
                    // Dès que le texte change, on met à jour
                    exercice[i].consigne = e.target.value;
                    mise_a_jour_du_code();
                });
            }

            // Gestion du nombre de la correction détaillée
            if (exercice[i].correction_detaillee_disponible) {
                form_correction_detaillee[i] = document.getElementById("form_correction_detaillee" + i);
                form_correction_detaillee[i].checked = exercice[i].correction_detaillee; // Rempli le formulaire avec la valeur par défaut
                form_correction_detaillee[i].addEventListener("change", function (e) {
                    // Dès que le statut change, on met à jour
                    exercice[i].correction_detaillee = e.target.checked;
                    mise_a_jour_du_code();
                });
            }

            // Gestion du nombre de colones
            if (exercice[i].nb_cols_modifiable) {
                form_nb_cols[i] = document.getElementById("form_nb_cols" + i);
                form_nb_cols[i].value = exercice[i].nb_cols; // Rempli le formulaire avec le nombre de colonnes
                form_nb_cols[i].addEventListener("change", function (e) {
                    // Dès que le nombre change, on met à jour
                    exercice[i].nb_cols = e.target.value;
                    mise_a_jour_du_code();
                });
            }

            // Gestion du nombre de colones dans la correction
            if (exercice[i].nb_cols_corr_modifiable) {
                form_nb_cols_corr[i] = document.getElementById("form_nb_cols_corr" + i);
                form_nb_cols_corr[i].value = exercice[i].nb_cols_corr; // Rempli le formulaire avec le nombre de colonnes de la correction
                form_nb_cols_corr[i].addEventListener("change", function (e) {
                    // Dès que le nombre change, on met à jour
                    exercice[i].nb_cols_corr = e.target.value;
                    mise_a_jour_du_code();
                });
            }

            // Gestion de l'espacement
            if (exercice[i].spacing_modifiable) {
                form_spacing[i] = document.getElementById("form_spacing" + i);
                form_spacing[i].value = exercice[i].spacing; // Rempli le formulaire avec le nombre de colonnes de la correction
                form_spacing[i].addEventListener("change", function (e) {
                    // Dès que le nombre change, on met à jour
                    exercice[i].spacing = e.target.value;
                    mise_a_jour_du_code();
                });
            }

            // Gestion de l'espacement dans la correction
            if (exercice[i].spacing_corr_modifiable) {
                form_spacing_corr[i] = document.getElementById("form_spacing_corr" + i);
                form_spacing_corr[i].value = exercice[i].spacing_corr; // Rempli le formulaire avec le nombre de colonnes de la correction
                form_spacing_corr[i].addEventListener("change", function (e) {
                    // Dès que le nombre change, on met à jour
                    exercice[i].spacing_corr = e.target.value;
                    mise_a_jour_du_code();
                });
            }

            // Gestion de la suppression de la correction
            let form_correction_affichee = document.getElementById("supprimer_correction");
            form_correction_affichee.addEventListener("change", function (e) {
                // Dès que le statut change, on met à jour
                mise_a_jour_du_code();
            });

            // Gestion de la suppression des identifiants
            let form_supprimer_reference = document.getElementById("supprimer_reference");
            form_supprimer_reference.addEventListener("change", function (e) {
                // Dès que le statut change, on met à jour
                // nouvelles_donnees();
                mise_a_jour_du_code();
            });

            // Gestion du changement de style
            let btn_radio_style_classique = document.getElementById("style_classique");
            btn_radio_style_classique.addEventListener("change", nouvelles_donnees);
            let btn_radio_style_CoopMaths = document.getElementById("style_CoopMaths");
            btn_radio_style_CoopMaths.addEventListener("change", nouvelles_donnees);
        }

        // Gestion du nombre de questions
        if (exercice[i].nb_questions_modifiable) {
            form_nb_questions[i] = document.getElementById("form_nb_questions" + i);
            form_nb_questions[i].value = exercice[i].nb_questions; // Rempli le formulaire avec le nombre de questions
            form_nb_questions[i].addEventListener("change", function (e) {
                // Dès que le nombre change, on met à jour
                exercice[i].nb_questions = e.target.value;
                mise_a_jour_du_code();
            });
        }

        // Gestion de la correction détaillée
        if (exercice[i].correction_detaillee_disponible) {
            form_correction_detaillee[i] = document.getElementById("form_correction_detaillee" + i);
            form_correction_detaillee[i].checked = exercice[i].correction_detaillee; // Rempli le formulaire avec la valeur par défaut
            form_correction_detaillee[i].addEventListener("change", function (e) {
                // Dès que le statut change, on met à jour
                exercice[i].correction_detaillee = e.target.checked;
                mise_a_jour_du_code();
            });
        }

        // // Gestion de l'identifiant de la série
        // if (exercice.length > 0) {
        //     let form_serie = document.getElementById("form_serie");
        //     form_serie.value = mathalea.graine; // Rempli le formulaire avec la graine
        //     form_serie.addEventListener("change", function (e) {
        //         // Dès que le statut change, on met à jour
        //         mathalea.graine = e.target.value;
        //         mise_a_jour_du_code();
        //     });
        // }

        // Gestion des paramètres supplémentaires s'ils existent

        if (exercice[i].besoin_formulaire_texte) {
            form_sup[i] = document.getElementById("form_sup" + i);
            form_sup[i].addEventListener("keydown", function (e) {
                // Appui sur la touche entrée
                if (e.keyCode == 13) {
                    exercice[i].sup = e.target.value; // Récupère  la saisie de l'utilisateur
                    mise_a_jour_du_code();
                }
            });

            form_sup[i].addEventListener("blur", function (e) {
                // Perte du focus
                exercice[i].sup = e.target.value;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire_long_texte) {
            form_sup[i] = document.getElementById("form_sup" + i);
            form_sup[i].addEventListener("keydown", function (e) {
                // Appui sur la touche entrée
                if (e.keyCode == 13) {
                    exercice[i].sup = e.target.value; // Récupère  la saisie de l'utilisateur
                    mise_a_jour_du_code();
                }
            });

            form_sup[i].addEventListener("blur", function (e) {
                // Perte du focus
                exercice[i].sup = e.target.value;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire_numerique) {
            form_sup[i] = document.getElementById("form_sup" + i);
            form_sup[i].value = exercice[i].sup; // Rempli le formulaire avec le paramètre supplémentaire
            form_sup[i].addEventListener("change", function (e) {
                // Dès que le nombre change, on met à jour
                exercice[i].sup = e.target.value;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire_case_a_cocher) {
            form_sup[i] = document.getElementById("form_sup" + i);
            form_sup[i].checked = exercice[i].sup; // Rempli le formulaire avec le paramètre supplémentaire
            form_sup[i].addEventListener("change", function (e) {
                //
                exercice[i].sup = e.target.checked;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire2_case_a_cocher) {
            form_sup2[i] = document.getElementById("form_sup2" + i);
            form_sup2[i].checked = exercice[i].sup2; // Rempli le formulaire avec le paramètre supplémentaire
            form_sup2[i].addEventListener("change", function (e) {
                //
                exercice[i].sup2 = e.target.checked;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire2_numerique) {
            form_sup2[i] = document.getElementById("form_sup2" + i);
            form_sup2[i].value = exercice[i].sup2; // Rempli le formulaire avec le paramètre supplémentaire
            form_sup2[i].addEventListener("change", function (e) {
                // Dès que le nombre change, on met à jour
                exercice[i].sup2 = e.target.value;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire2_texte) {
            form_sup2[i] = document.getElementById("form_sup2" + i);
            form_sup2[i].addEventListener("keydown", function (e) {
                // Appui sur la touche entrée
                if (e.keyCode == 13) {
                    exercice[i].sup2 = e.target.value; // Récupère  la saisie de l'utilisateur
                    mise_a_jour_du_code();
                }
            });

            form_sup2[i].addEventListener("blur", function (e) {
                // Perte du focus
                exercice[i].sup2 = e.target.value;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire3_case_a_cocher) {
            form_sup3[i] = document.getElementById("form_sup3" + i);
            form_sup3[i].checked = exercice[i].sup3; // Rempli le formulaire avec le paramètre supplémentaire
            form_sup3[i].addEventListener("change", function (e) {
                //
                exercice[i].sup3 = e.target.checked;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire3_numerique) {
            form_sup3[i] = document.getElementById("form_sup3" + i);
            form_sup3[i].value = exercice[i].sup3; // Rempli le formulaire avec le paramètre supplémentaire
            form_sup3[i].addEventListener("change", function (e) {
                // Dès que le nombre change, on met à jour
                exercice[i].sup3 = e.target.value;
                mise_a_jour_du_code();
            });
        }

        if (exercice[i].besoin_formulaire3_texte) {
            form_sup3[i] = document.getElementById("form_sup3" + i);
            form_sup3[i].addEventListener("keydown", function (e) {
                // Appui sur la touche entrée
                if (e.keyCode == 13) {
                    exercice[i].sup3 = e.target.value; // Récupère  la saisie de l'utilisateur
                    mise_a_jour_du_code();
                }
            });

            form_sup3[i].addEventListener("blur", function (e) {
                // Perte du focus
                exercice[i].sup3 = e.target.value;
                mise_a_jour_du_code();
            });
        }
    }
}
