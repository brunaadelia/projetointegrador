$(document).ready(function(){
    listarGrid();
    $('#filtrarImovel').click(filtrarImovel);
    $('#limparFiltro').click(limparFiltro);
  });
  
  function limparFiltro(){
    document.getElementById('valorInicial').values ="";
    document.getElementById('valorFinal').values ="";
    listarGrid();
  }
 
function listarGrid(){
    $.get('https://localhost:5001/Imovel/Listar')
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                
                $('#grid').append($('<tr></tr>').attr('id', dados.codImovel));
                $('#' + dados.id).append($('<td></td>').html(dados.codImovel));
                $('#' + dados.id).append($('<td></td>').html(dados.Proprietario));
                $('#' + dados.id).append($('<td></td>').html(dados.Ano));
                $('#' + dados.id).append($('<td></td>').html(dados.DataAquisicao));
                $('#' + dados.id).append($('<td></td>').html(dados.IdMunicipio));
                $('#' + dados.id).append($('<td></td>').html(dados.Tipo));
                
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}
