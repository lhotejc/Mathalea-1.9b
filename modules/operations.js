
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
    let retirerleszerosdevant = function(chaine){
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
        let code = "", lmax
        let sop1 = Number(operande1).toString()
        let sop2 = Number(operande2).toString()
        let sresultat, lresultat, resultat
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
        for (let i =0;i<longueuroperandes+1-sresultat.length;i++){
            sresultat=`0${sresultat}`
        }
        console.log(retenues,retirerleszerosdevant(sop1),retirerleszerosdevant(sop2),sresultat)
        code = `<div id="addition" class="operationBox" style="position: static;">`
        code +=`<div id="retenues" style="position: absolute; top :0px; color: red"; padding: 10px>${retenues}</div>`
        code +=`<div id="operation" style="position: absolute; top: 1.2em; padding:0px; line-height: 0.8em">`
        code+=`${retirerleszerosdevant(sop1)}<br>+${retirerleszerosdevant(sop2)}<br>${retirerleszerosdevant(sresultat)}`
        code+=`<div id="barre" style="position: absolute; top: 1.9em;"><hr width=${(longueuroperandes)*10}></div>`
        code+=`</div><br><br><br><br></div>`;
        return code
    }
    switch (type) {
        case 'addition':
            
            if (sortie_html) {
            /*    code += `<div id="operation" style ="position: static;"><br><hr style="display: block;
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
                */
               code=AdditionPoseeHtml(operande1,operande2)
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