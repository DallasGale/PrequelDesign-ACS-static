//onchange profile picture
$(document).on("change", "#profile_picture", function () {
  imageChangeWithFile($(this)[0], "#profile_picture_show")
})

//onchange cover photo
$(document).on("change", "#cover_photo", function () {
  imageChangeWithFile($(this)[0], "#cover_photo_show")
})

function imageChangeWithFile(input, srcId) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()
    reader.onload = function (e) {
      $(srcId).attr("src", e.target.result)
    }
    reader.readAsDataURL(input.files[0])
  }
}
