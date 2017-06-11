function calcular_lista()
{              
        nr_pessoas = document.getElementById("nr_pessoas").value;

        // Quantidade de ingredientes por pessoa
        var gruyere=75
        var emmental=75
        var pao=190
        var vinho_branco_fondue=75
        var vinho_para_beber=350

        // Calcular a quantidade total de ingredientes
        var gruyere_tot=gruyere*nr_pessoas
        var emmental_tot=emmental*nr_pessoas
        var pao_tot=pao*nr_pessoas
        var vinho_branco_fondue_tot=vinho_branco_fondue*nr_pessoas
        var vinho_para_beber_tot=vinho_para_beber*nr_pessoas
        
        // Ajustar as unidades
        var garrafas_vinho_fondue=Math.ceil(vinho_branco_fondue_tot/750)
        var garrafas_vinho_beber=Math.ceil(vinho_para_beber_tot/750)
        
        // Montar lista
        lista_template="\
            <h3>Lista de compras:</h3>\
            <br />\
            <p>\
            <ul>\
                <li>Queijo Gruyère "+ String(gruyere_tot) + " gramas</li> <br />\
                <li>Queijo Emmental " + String(emmental_tot)  + "gramas</li> <br />\
                <li>Pão Italiano " + String(pao_tot)  + " gramas</li> <br />\
                <li>Vinho Branco Fondue " + String(garrafas_vinho_fondue) + " garrafa(s) - " + String(vinho_branco_fondue_tot) + " ml</li> <br />\
                <li>Vinho para beber " + String(garrafas_vinho_beber) + " garrafa(s) - " + String(vinho_para_beber_tot) + " ml</li> <br />\
            </ul>\
            <br />\
            Lembrando: São 3 colheres de amido de milho por panela<br />\
            Noz moscada ralada na hora a gosto.<br />\
            </p>"

        document.getElementById("result").innerHTML = lista_template;
}

