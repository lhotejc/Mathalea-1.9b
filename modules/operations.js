
export default function Operation({ operande1 = 1, operande2 = 2, type = 'addition' }) {
    let code = "", lmax
    let sop1 = Number(operande1).toString()
    let sop2 = Number(operande2).toString()
    let sresultat, lresultat, resultat
    let lop1 = sop1.length
    let lop2 = sop2.length

    let cacherboutdedividende = function (dividende, boutocculte,souligne) { //fonction qui ne laisse visible que la partie utilisée du dividende partie occultée en blanc sur blanc
        let chainedividende;
        let soulignedebut,soulignefin
        if (souligne) {
            soulignedebut=`\\underline{`
            soulignefin=`}`
        }
        else {
            soulignedebut=``
            soulignefin=``
        }
        chainedividende = Number(dividende).toString();
        if ((boutocculte > 0) && (boutocculte < chainedividende.length)) {
            chainedividende = `$${soulignedebut}${chainedividende.substr(0, chainedividende.length - boutocculte)}${soulignefin}$<font color=#FFFFFF>$${chainedividende.substr(chainedividende.length - boutocculte)}$</font>`;
        }
        else {
            chainedividende=`$${soulignedebut}${chainedividende}${soulignefin}$`
        }
        return chainedividende;
    }

    let DivisionPoseeHtml = function (dividende, diviseur) { // retourne le code de la division posée en html
        let longueurquotiententier, code = "", quotiententier, stringquotiententier
        let chiffrequotient, dividendetemp, lignes, index, longtronc, restes = [], quotients = [], troncatures = [];
        quotiententier = Math.floor(dividende / diviseur);
        dividende = Number(dividende).toString();
        stringquotiententier = Number(quotiententier).toString();
        longueurquotiententier = stringquotiententier.length;
        lignes = '';
        for (let i = 0; i < longueurquotiententier - 1; i++) {
            lignes += '0';
        }
        dividendetemp = parseInt(dividende);
        index = 0;
        longtronc = stringquotiententier.length - 1;
        for (let i = 0; i < longueurquotiententier; i++) {
            chiffrequotient = stringquotiententier.charAt(i) + lignes;
            dividendetemp = dividendetemp - parseInt(chiffrequotient) * diviseur;
            if (stringquotiententier.charAt(i) != '0') {
                quotients[index] = parseInt(chiffrequotient) * diviseur;
                restes[index] = dividendetemp;
                troncatures[index] = longtronc;
                index++;
            }
            lignes = lignes.substr(1);
            longtronc--;
        }
        troncatures[index] = 0;
        longueurquotiententier = quotients.length;
        lignes = "";
        index = dividende.length;
        for (let i = 0; i < longueurquotiententier; i++) {
            lignes += `$-$<font color=#FFFFFF>_</font>${cacherboutdedividende(quotients[i], troncatures[i],true)}<br>${cacherboutdedividende(restes[i], troncatures[i + 1])}<br>`;
            index = (restes[i] + '').length;
        }
        stringquotiententier = quotiententier + '';
        code = `<table border=0 cellspacing=0 cellpadding=2 class="res" style="line-height:1.2em"><tr><td align=right>$${dividende}$</td><td align=left style=border-bottom-style:solid;border-bottom-width:2px;border-left-style:solid;border-left-width:2px;>$${diviseur}$</td></tr>`;
        code += `<tr><td align=right >${lignes}</td><td align=left valign=top style=border-left-style:solid;border-left-width:2px;border-left-color: black;>$${stringquotiententier}$</td></tr></table>`;
        return code
    }

    switch (type) {
        case 'addition':
            resultat = operande1 + operande2
            sresultat = Number(resultat).toString()
            lresultat = sresultat.length
            lmax = Math.max(lop1, lop2, lresultat)
            if (sortie_html) {
                code += `<div id="operation" style ="position: static;"><br><hr style="display: block;
             margin-top: 1em; margin-bottom: 0.5em; width: ${(lmax + 1) * 10}px; position:absolute; top=45px"><br>`
                code += `<div id="op1" style ="position:absolute; top:0px; left: ${10 * (lmax + 1 - lop1)}px;">`
                for (let i = 0; i < lop1; i++) {

                    code += `<div id="op1-${i}" style ="position:absolute; left: ${i * 10}px;">$${sop1[i]}$</div>`
                }
                code += `</div>`
                code += `<div id="op2" style ="position:absolute; top:15px;">`
                code += `<div id="plus" style ="position:absolute;">$+$</div>`
                for (let i = 0; i < lop2; i++) {
                    code += `<div id="op2-${i}" style ="position:absolute; left: ${(lmax - lop2 + i + 1) * 10}px;">$${sop2[i]}$</div>`
                }
                code += `</div>`

                code += `<div id="resultat" style ="position:absolute; top:40px; left: ${10 * (lmax + 1 - lresultat)}px;">`
                for (let i = 0; i < lresultat; i++) {
                    code += `<div id="resultat-${i}" style ="position:absolute; left: ${i * 10}px;">$${sresultat[i]}$</div>`
                }
                code += `</div>`
                code += `</div>`
            }
            else {
                code += `$\\opadd{${a}}{${b}}$`
            }
            break
        case 'soustraction':

            break
        case 'multiplication':

            break
        case 'division':
            if (sortie_html) {
                return DivisionPoseeHtml(operande1, operande2);
            }
            else {
                return `$\\opidiv[voperation=top]{${operande1}}{${operande2}}$`
            }
            break
    }
    return code
} 