let randomPicID = function (){
  return Math.floor(Math.random() * 1085 )
}
$(document).ready(function() {
  let tempPic
  $('#input-area button').on('click', function(){
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
    tempPic = $(this)
    let url = tempPic.find("img").attr("src").replace('300/300.jpg', '500/500.jpg')
    $(".pic-show").show()
    $("#full-pic").prepend(`<img class="w-100" src=${url} alt=""></<img>`)
  })

  $('#pic-confirm').on('click', function(){
    $("#full-pic").find($('img')).remove()
    $('.pic-show').hide()
  })

  $('#pic-destroy').on('click', function(){
    tempPic.remove()
    tempPic = null
    $("#full-pic").find($('img')).remove()
    $('.pic-show').hide()
  })

  $('#alert-confirm').on('click', function(){
    $('.pic-alert').hide()
  })

})