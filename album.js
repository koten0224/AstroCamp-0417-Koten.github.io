let randomPicID = function (){
  return Math.floor(Math.random() * 1085 )
}
$(document).ready(function() {
  $('button').on('click', function(){
    let url
    if($(this).attr('id') === 'paste'){
      url = $("#pic_url").val()
    }else{
      url = `https://i.picsum.photos/id/${randomPicID()}/300/300.jpg`
    }
    if(/^http.+\.(jpg|jpeg|png|gif)$/.test(url)){
      $("#album").prepend(`<div class="picture col-6 col-md-4 p-1"><img class="w-100" src=${url} alt=""></div>`)
    }else{
      $('.pic-alert').show()
    }
    $("#pic_url").val("")
  })

  $('#album').on('click','.picture' ,function() {
    $(this).hide()
  })

  $('#alert-confirm').on('click', function(){
    $('.pic-alert').hide()
  })

})