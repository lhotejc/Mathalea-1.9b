
export default function Operation({ operande1 = 1, operande2 = 2, type = 'addition' }) {

    let code=""
    let cacherleszeros = function(chaine){ //tilisée pour créer une chaine de retenues, un zéro sera mis en blanc sur blanc.
        let resultat=""
        for (let i=0;i<chaine.length;i++){
            if (chaine[i]!='0'){
                resultat+=`$${chaine[i]}$`
            }
            else {
                resultat+=`<font color=#FFFFFF>$0$</font>`
            }
        }
        return resultat
    }
    let cacherleszerosdevant = function(chaine){
        let blancs=""
        while (chaine[0]=='0') {
            chaine=chaine.substr(1)
            blancs+=`<font color=#FFFFFF>$0$</font>`
        }
        for (let i=0;i<chaine.length;i++){
            blancs+=`$${chaine[i]}$`
        }
        return blancs
    }
    let cacherboutdenombre = function (nombre, boutocculte,souligne) { //fonction qui ne laisse visible qu'une partie d'un nombre et le souligne si besoin
        let chaine; // retourne une chaine avec un nombre en mode maths.
        let soulignedebut,soulignefin
        if (souligne) {
            soulignedebut=`\\underline{`
            soulignefin=`}`
        }
        else {
            soulignedebut=``
            soulignefin=``
        }
        chaine = Number(nombre).toString();
        if ((boutocculte > 0) && (boutocculte < chaine.length)) {
            chaine = `$${soulignedebut}${chaine.substr(0, chaine.length - boutocculte)}${soulignefin}$<font color=#FFFFFF>$${chaine.substr(chaine.length - boutocculte)}$</font>`;
        }
        else {
            chaine=`$${soulignedebut}${chaine}${soulignefin}$`
        }
        return chaine;
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
            lignes += `$-$<font color=#FFFFFF>_</font>${cacherboutdenombre(quotients[i], troncatures[i],true)}<br>${cacherboutdenombre(restes[i], troncatures[i + 1])}<br>`;
            index = (restes[i] + '').length;
        }
        stringquotiententier = quotiententier + '';
        code = `<table border=0 cellspacing=0 cellpadding=2 class="res" style="line-height:1.2em"><tr><td align=right>$${dividende}$</td><td align=left style=border-bottom-style:solid;border-bottom-width:2px;border-left-style:solid;border-left-width:2px;>$${diviseur}$</td></tr>`;
        code += `<tr><td align=right >${lignes}</td><td align=left valign=top style=border-left-style:solid;border-left-width:2px;border-left-color: black;>$${stringquotiententier}$</td></tr></table>`;
        return code
    }
    let AdditionPoseeHtml = function(operande1,operande2){
        let code = ""
        let sop1 = Number(operande1).toString()
        let sop2 = Number(operande2).toString()
        let sresultat,resultat,lresultat
        let lop1 = sop1.length
        let lop2 = sop2.length
        let longueuroperandes=Math.max(lop1,lop2)
        let retenues=""
        if (lop1>lop2){ // si op1 a plus de chiffres qu'op2 on complète op2 avec des zéros.
            for(let j=0;j<lop1-lop2;j++){
                sop2=`0`+sop2
            }
        }
        else if (lop2>lop1) { //on fait pareil pour op1 si c'est op2 le plus 'grand'
            for(let j=0;j<lop2-lop1;j++){
            sop1=`0`+sop1
            }
        }
        // les deux operande ont le même nomre de chiffres
        for (let i=longueuroperandes-1;i>0;i--){ // on construit la chaine des retenues.
            if (parseInt(sop1[i])+parseInt(sop2[i])>9) {
                retenues=`1${retenues}`
            }
            else {
                retenues=`0${retenues}`
            }
        }
        retenues=`0`+retenues
        sop1=`0${sop1}`
        retenues=cacherleszeros(retenues)
        resultat = operande1 + operande2
        sresultat = Number(resultat).toString()
        lresultat=sresultat.length
        for (let i =0;i<longueuroperandes+1-lresultat;i++){
            sresultat=`0${sresultat}`
        }
        code = `<div id="addition" class="operationBox" style="position: static;">`
        code +=`<div id="retenues" class="retenuesBox" style="position: absolute; left:1.9em; top :1em; color: red"; padding: 10px>${retenues}</div>`
        code +=`<div id="operation" style="position: absolute; top: 1.2em; padding:0px; line-height: 0.8em">`
        code+=`${cacherleszerosdevant(sop1)}<br>+${cacherleszerosdevant(sop2)}<br>${cacherleszerosdevant(sresultat)}`
        code+=`<div id="barre" style="position: absolute; top: 1.9em;"><hr width=${(longueuroperandes)*10}></div>`
        code+=`</div><br><br><br><br></div>`;
        return code
    }
    let SoustractionPoseeHtml = function(operande1,operande2){
        let code = "",sop1,sop2
        if (operande1<operande2) {
            sop2 = Number(operande1).toString()
            sop1 = Number(operande2).toString()
        }
        else {
            sop1 = Number(operande1).toString()
            sop2 = Number(operande2).toString()
        }
        let sresultat,resultat,lresultat
        let lop1 = sop1.length
        let lop2 = sop2.length
        let longueuroperandes=Math.max(lop1,lop2)
        let retenues="0"
        if (lop1>lop2){ // si op1 a plus de chiffres qu'op2 on complète op2 avec des zéros.
            for(let j=0;j<lop1-lop2;j++){
                sop2=`0`+sop2
            }
        }
        // les deux operande ont le même nomre de chiffres
        for (let i=longueuroperandes-1;i>0;i--){ // on construit la chaine des retenues.
            if (parseInt(sop1[i])<(parseInt(sop2[i])+parseInt(retenues.charAt(0)))) {
                retenues=`1${retenues}`
            }
            else {
                retenues=`0${retenues}`
            }
        }
        retenues=`0${retenues}`
        sop1=`0${sop1}`
        retenues=cacherleszeros(retenues)
        resultat = operande1 - operande2
        sresultat = Number(resultat).toString()
        lresultat=sresultat.length
        for (let i =0;i<longueuroperandes+1-lresultat;i++){
            sresultat=`0${sresultat}`
        }
        code = `<div id="soustraction" class="operationBox" style="position: static;">`
        code +=`<div id="retenuesh" class="retenuesBox" style="position: absolute; left:1.2em; top: 2em; color: red" padding: 0px>${retenues}</div>`
        code+=`<div id="retenuesb" class="retenuesBox" style="position: absolute; top: 6em; color: blue" padding:0px line-height: 0.8em>${retenues}</div>`
        code +=`<div id="operation" style="position: absolute; top: 1.2em; padding:0px; line-height: 0.8em">`
        code+=`${cacherleszerosdevant(sop1)}<br>-${cacherleszerosdevant(sop2)}<br><br>${cacherleszerosdevant(sresultat)}`
        code+=`<div id="barre" style="position: absolute; top: 2.5em;"><hr width=${(longueuroperandes)*10}></div>`
        code+=`</div><br><br><br><br></div>`;
        return code
    }


    switch (type) {
        case 'addition':
            if (sortie_html) {
               code=AdditionPoseeHtml(operande1,operande2)
            }
            else {
                code += `$\\opadd{${operande1}}{${operande2}}$`
            }
            break
        case 'soustraction':
            if (sortie_html) {
                code=SoustractionPoseeHtml(operande1,operande2)
             }
             else {
                 code += `$\\opsub{${operande1}}{${operande2}}$`
             }           
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