$(document).ready(function(){
    listarGrid();
    $('#filtrarEstado').click(filtrarEstado);
    $('#limparFiltro').click(limparFiltro);
  });
  
  function limparFiltro(){
    document.getElementById('valorInicial').values ="";
    document.getElementById('valorFinal').values ="";
    listarGrid();
  }
 
function listarGrid(){
    $.get('https://localhost:5001/Estado/Listar')
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                
                $('#grid').append($('<tr></tr>').attr('id', dados.Id));
                $('#' + dados.id).append($('<td></td>').html(dados.Id));
                $('#' + dados.id).append($('<td></td>').html(dados.Nome));
                
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}
