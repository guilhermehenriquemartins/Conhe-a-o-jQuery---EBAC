$(document).ready(function() {
  $('header button').click(function() {
    $('form').slideDown();
  })

  $('#botao-cancelar').click(function() {
    $('form').slideUp();
  })

  $('form').on('submit', function(e){
    e.preventDefault();
    const EnderecoDaImagem = $('#endereco-imagem').val();
    const NovaImagem = $('<li style="display:none"></li>');
    $(`<img src="${EnderecoDaImagem}"/>`).appendTo(NovaImagem)
    $(`<div class="overflow-imagem-link">
    <a href="${EnderecoDaImagem}" title="Ver imagem em tamanho real" target="_blank"> Ver imagem em tamanho real</a>
      </div>`).appendTo(NovaImagem)
    $(NovaImagem).appendTo('ul')
    $(NovaImagem).fadeIn(1000)
    $('#endereco-imagem').val('')
  })
})