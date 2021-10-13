$(document).ready(function(){
    listarGrid();
    $('#filtrarMunicipio').click(filtrarMunicipio);
    $('#limparFiltro').click(limparFiltro);
  });
  
  function limparFiltro(){
    document.getElementById('valorInicial').values ="";
    document.getElementById('valorFinal').values ="";
    listarGrid();
  }
 
function listarGrid(){
    $.get('https://localhost:5001/Municipio/Listar')
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                
                $('#grid').append($('<tr></tr>').attr('id', dados.IdMunicipio));
                $('#' + dados.id).append($('<td></td>').html(dados.Nome));
                $('#' + dados.id).append($('<td></td>').html(dados.Populacao));
                $('#' + dados.id).append($('<td></td>').html(dados.Estado));
                $('#' + dados.id).append($('<td></td>').html(dados.Porte));
                
                
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}
