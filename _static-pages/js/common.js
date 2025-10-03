(function ($) {
  "use strict";

  $(document).ready(function () {
    // Initialize character counters on page load
    updateShortDescriptionCharacterCount();
    updateOfflineMessageCharacterCount();

    // Update short description character count on input
    $(document).on("keyup keydown", ".short_description_field", function () {
      updateShortDescriptionCharacterCount();
    });

    // Update offline message character count on input
    $(document).on("keyup keydown", ".offline_message_input", function () {
      updateOfflineMessageCharacterCount();
    });

    // Handle offline status change
    $(document).on("change", ".offline_status_change", function () {
      $.ajax({
        url: $("#profile_offline_status_change_route").val(),
        type: "GET",
        success: function (response) {
          toastr.success(response.msg);
          if (response.status) {
            $("#offline_message_modal").modal("show");
          }
        },
        error: function (response) {
          toastr.error("Something went wrong");
        },
      });
    });

    /**
     * Update character count for short description field
     * Max length: 100 characters
     */
    function updateShortDescriptionCharacterCount() {
      const maxLength = 100;
      const input = $(".short_description_field");
      let length = parseInt(input.val().length);

      // Truncate if exceeds max length
      if (length > maxLength) {
        input.val(input.val().substring(0, maxLength));
        length = maxLength;
      }

      // Update counter display
      $(".short_description_character_count").html(
        length + " " + window.jsLang("data_characters_count")
      );
    }

    /**
     * Update character count for offline message field
     * Max length: 500 characters
     */
    function updateOfflineMessageCharacterCount() {
      const maxLength = 500;
      const input = $(".offline_message_input");
      let length = parseInt(input.val().length);

      // Truncate if exceeds max length
      if (length > maxLength) {
        input.val(input.val().substring(0, maxLength));
        length = maxLength;
      }

      // Update counter display
      $(".offline_message_input_character_count").html(
        length + " " + window.jsLang("data_characters_count")
      );
    }
  });
})(jQuery);