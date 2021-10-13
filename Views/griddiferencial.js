
$(document).ready(function(){
    listarGrid();
    $('#filtrarDiferencial').click(filtrarDiferencial);
    $('#limparFiltro').click(limparFiltro);
  });
  
  function limparFiltro(){
    document.getElementById('valorInicial').values ="";
    document.getElementById('valorFinal').values ="";
    listarGrid();
  }
 
function listarGrid(){
    $.get('https://localhost:5001/Diferencial/Listar')
        .done(function(resposta) { 
            $('#grid tr').remove();
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                
                $('#grid').append($('<tr></tr>').attr('id', dados.IdDiferencial));
                $('#' + dados.id).append($('<td></td>').html(dados.IdDiferencial));
                $('#' + dados.id).append($('<td></td>').html(dados.Nome));
                
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}
