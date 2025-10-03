// Profile photo and cover photo preview functionality

// Handle profile picture change
$(document).on("change", "#profile_picture", function () {
  previewImageFromFile($(this)[0], "#profile_picture_show");
});

// Handle cover photo change
$(document).on("change", "#cover_photo", function () {
  previewImageFromFile($(this)[0], "#cover_photo_show");
});


//  Preview an image file before upload
function previewImageFromFile(input, targetSelector) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      $(targetSelector).attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}