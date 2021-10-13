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
    $.get('https://localhost:5001/ImovelDiferencial/Listar')
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                
                $('#grid').append($('<tr></tr>').attr('id', dados.codImovel));
                $('#grid').append($('<tr></tr>').attr('id', dados.IdDiferencial));
                
                
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}
