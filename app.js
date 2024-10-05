$(document).ready(function () {
  $(".pass").click(function () {
    if ($(".pass i").hasClass("fa-eye")) {
      $(".pass i").addClass("fa-eye-slash");
      $(".pass i").removeClass("fa-eye");
      $("#password").attr("type", "text");
    } else {
      $(".pass i").addClass("fa-eye");
      $(".pass i").removeClass("fa-eye-slash");
      $("#password").attr("type", "password");
    }
  });
  $(".conf-pass").click(function () {
    if ($(".conf-pass i").hasClass("fa-eye")) {
      $(".conf-pass i").addClass("fa-eye-slash");
      $(".conf-pass i").removeClass("fa-eye");
      $("#conf_password").attr("type", "text");
    } else {
      $(".conf-pass i").addClass("fa-eye");
      $(".conf-pass i").removeClass("fa-eye-slash");
      $("#conf_password").attr("type", "password");
    }
  });

  let maxSkillLimit = 10;
  var fieldHTML =
    '<div class="wrapper additional-field"><input type="text" name="skill[]" placeholder="Your skill"/><div class="icon remove_button"><i class="fas fa-minus"></i></div> </div>'; //New input field html

  var x = 1; //Initial field counter is 1

  // Once add button is clicked
  $(".add_button").click(function () {
    //Check maximum number of input fields
    if (x < maxSkillLimit) {
      x++; //Increase field counter
      $(".skill-fields").append(fieldHTML); //Add field html
    } else {
      alert(
        "A maximum of " + maxSkillLimit + " fields are allowed to be added. "
      );
    }
  });

  // Once remove button is clicked
  $(".skill-fields").on("click", ".remove_button", function (e) {
    $(this).parent("div").remove(); //Remove field html
    x--; //Decrease field counter
  });


  $("#validate-form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      portfolio: {
        required: true,
        url: true,
      },
      birth: {
        required: true,
        date: true,
      },
      salary: {
        required: true,
        number: true,
        // min: 10000,
        // max: 30000,
        range: [10000, 30000],
      },
      password: {
        required: true,
        // minlength: 6,
        rangelength: [6, 20],
      },
      conf_password: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      birth: {
        date: "Insert Your Birth date. Ex: 12/12/2024",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      conf_password: {
        required: "Please fill the password fields",
        equalTo: "Passwords must match",
      },
    },
  });
});
