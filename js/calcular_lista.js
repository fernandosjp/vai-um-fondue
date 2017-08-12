function calcular_lista()
{              
        nr_pessoas = document.getElementById("nr_people").value;

        // Quantidade de ingredientes por pessoa
        var gruyere=75
        var emmental=75
        var pao=190
        var vinho_branco_fondue=75
        var vinho_para_beber=350
        var colher_amido=0.75

        // Calcular a quantidade total de ingredientes
        var gruyere_tot=gruyere*nr_pessoas
        var emmental_tot=emmental*nr_pessoas
        var pao_tot=pao*nr_pessoas
        var vinho_branco_fondue_tot=vinho_branco_fondue*nr_pessoas
        var vinho_para_beber_tot=vinho_para_beber*nr_pessoas
        var colher_amido_tot=colher_amido*nr_pessoas
        
        // Ajustar as unidades
        var garrafas_vinho_fondue=Math.ceil(vinho_branco_fondue_tot/750)
        var garrafas_vinho_beber=Math.ceil(vinho_para_beber_tot/750)
        var colher_amido_ceil=Math.ceil(colher_amido_tot)
        
        // Montar lista
        lista_template="\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">Queijo Gruyère "+ String(gruyere_tot) + " gramas</label>\
              </div>\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">Queijo Emmental " + String(emmental_tot)  + " gramas</label>\
              </div>\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">Pão Italiano " + String(pao_tot)  + " gramas</label>\
              </div>\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">Vinho Branco para fondue " + String(garrafas_vinho_fondue) + " garrafa(s) - " + String(vinho_branco_fondue_tot) + " ml</label>\
              </div>\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">Vinho para beber " + String(garrafas_vinho_beber) + " garrafa(s) - " + String(vinho_para_beber_tot) + " ml</label>\
              </div>\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">Amido de milho " + String(colher_amido_ceil) + " colher(es) de sopa</label>\
              </div>\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">Noz moscada a gosto</label>\
              </div>\
              <div class=\"checkbox\">\
                <label><input type=\"checkbox\">1 dente de alho</label>\
              </div>"

        document.getElementById("result").innerHTML = lista_template;
}

