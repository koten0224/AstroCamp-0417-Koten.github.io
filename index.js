$(document).ready(function() {
  $('.pic-alert').hide()
  $('#paste').on('click', function(){
    let url = $("#pic_url").val()
    if(/^http.+\.(jpg|jpeg|png|gif)$/.test(url)){
      $("#album").append(`<div class="pathetic col-4 p-1"><img class="w-100" src=${url} alt=""></div>`)
    }else{
      $('.pic-alert').show()
    }
    $("#pic_url").val("")
  })

  $('#album').on('click','.pathetic' ,function() {
    $(this).hide()
  })

  $('#alert-confirm').on('click', function(){
    $('.pic-alert').hide()
  })

})