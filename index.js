let choosenPic = null

$(document).ready(function() {

  $('#paste').on('click', function(){
    let url = $("#pic_url").val()
    if(/^http.+\.(jpg|jpeg|png|gif)$/.test(url)){
      appendImgToAlbum(url)
      $("#pic_url").val("")
    }else{
      $('.pic-alert').show()
    }
  })

  $("#random").on("click", function() {
    let url = `https://i.picsum.photos/id/${randomPicID()}/500/500.jpg`
    appendImgToAlbum(url)
  })

  $('#alert-confirm,.pic-alert').on('click', function(){
    $('.pic-alert').hide()
  })

  $('#album').on('click','.picture' ,function() {
    choosenPic = $(this)
    let url = choosenPic.find("img").attr("src")
    showPreview(url)
  })

  $('#pic-confirm,.pic-show').on('click', closePreview)

  $('#pic-destroy').on('click', function(){
    choosenPic.remove()
    choosenPic = null
    closePreview();
  })

})

let randomPicID = function (){
  const PIC_ID_LIMIT = 1085
  return Math.floor(Math.random() * PIC_ID_LIMIT )
}

let appendImgToAlbum = function(url){
  $("#album").prepend(`
    <div class="picture col-6 col-md-4 p-1">
      <img class="w-100" src=${url} alt="">
    </div>
  `)
}

let showPreview = function(url) {
  $(".pic-show").show()
  $("#full-pic").prepend(`<img src=${url} alt=""></<img>`)
}

let closePreview = function() {
  $("#full-pic").find('img').remove()
  $('.pic-show').hide()
}