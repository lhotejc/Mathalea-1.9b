import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,shuffle,arrondi,tex_nombre} from "/modules/outils.js"
/**
 * 4 cercles sont tracés, 2 dont on connait le rayon et 2 dont on connait le diamètre.
 * * 1 : Calculer le périmètre de cercles
 * * 2 : Calculer l'aire de disques
 * * 3 : Calculer le périmètre et l'aire de disques
 *
 * Pas de version LaTeX
 * @Auteur Rémi Angot
 * Référence 6M22-1
 */
export default function Perimetre_aire_disques(pa = 3) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Périmètres et aires de disques";
  this.sup = pa; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [500, 500];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let tableau_des_rayons = shuffle([2, 3, 4, 5, 6, 7, 8]); //pour s'assurer que les 4 rayons sont différents
    let r1 = tableau_des_rayons[0];
    let r2 = tableau_des_rayons[1];
    let r3 = tableau_des_rayons[2];
    let r4 = tableau_des_rayons[3];
    if (this.sup == 1) {
      this.consigne = "Calculer le périmètre des 4 cercles suivants.";
    }
    if (this.sup == 2) {
      this.consigne = "Calculer l'aire des 4 disques suivants.";
    }
    if (this.sup == 3) {
      this.consigne = "Calculer le périmètre et l'aire des 4 disques suivants.";
    }

    this.consigne +=
      "</br>Donner la valeur exacte et une valeur approchée au dixième près.";

    let codeBase64 =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAAEAAAAQABAAAAMQAAACQAAAAaAP####8BAAAAABAAAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDUAAAAAAADANwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDEpAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZDI0woMikAAAAdAP####8AAAAAAMA3AAAAAAAAwDUAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAABkMjTCgzKQAAAB0A#####wAAAAAAwDgAAAAAAADANQAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDQpAAAADv##########";
    //	let codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAH0AAAB9AAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAADQAAAQABAAAAMQAAACQAAAAaAP####8BAAAAAA0AAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDAAAAAAAADAMwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzEkAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAA8kXG1hdGhjYWx7Q31fMiQAAAAdAP####8AAAAAAMAyAAAAAAAAwDQAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAADyRcbWF0aGNhbHtDfV8zJAAAAB0A#####wAAAAAAwDMAAAAAAADAMAAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzQkAAAADv##########";
    //  Si affichage LaTeX alors bug de MG32
    let texte_corr = "";
    if (this.sup == 1) {
      //si on ne demande pas les aires
      texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${2 * r1
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(2 * r1 * Math.PI), 1)
        )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_2=${2 * r2}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r2 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_3=${2 * r3}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r3 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${2 * r4
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(2 * r4 * Math.PI), 1)
        )}$ cm<br>`;
    }

    if (this.sup == 2) {
      texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${r1 * r1
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r1 * r1 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${2 * r2
        } cm donc son rayon est ${r2} cm.<br>`;
      texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${r2 * r2
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r2 * r2 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${2 * r3
        } cm donc son rayon est ${r3} cm.<br>`;
      texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${r3 * r3
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r3 * r3 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${r4 * r4
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r4 * r4 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
    }

    if (this.sup == 3) {
      texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${2 * r1
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(2 * r1 * Math.PI), 1)
        )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_2=${2 * r2}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r2 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_3=${2 * r3}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r3 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${2 * r4
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(2 * r4 * Math.PI), 1)
        )}$ cm<br>`;

      texte_corr += `<br>`;

      texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${r1 * r1
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r1 * r1 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${2 * r2
        } cm donc son rayon est ${r2} cm.<br>`;
      texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${r2 * r2
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r2 * r2 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${2 * r3
        } cm donc son rayon est ${r3} cm.<br>`;
      texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${r3 * r3
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r3 * r3 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${r4 * r4
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(r4 * r4 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
    }

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r1", "${r1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r3", "${r3}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r4", "${r4}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;

    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  };

  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    3,
    "1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires",
  ];
}

