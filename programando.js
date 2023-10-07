$(document).ready(function() {
  $('#botao-adicionar').click(function(e) {
    e.preventDefault();
  })

  $('header button').click(function() {
    $('form').slideDown();
  })

  $('#botao-cancelar').click(function() {
    $('form').slideUp();
  })
})