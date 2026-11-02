
$(document).ready(function () {
  console.log("jQuery is ready!");

  // Part 1: Selectors & CSS (Task 1)

  $("#btn-change-text").click(function () {
    $("#headline")
      .text("Yes me mikameeeeq")
      .css({
        "color": "#16a34a",
        "font-style": "italic"
      });
  });

  $("#btn-dark").click(function () {
    $("body").removeClass("light").addClass("dark");
  });

  $("#btn-light").click(function () {
    $("body").removeClass("dark").addClass("light");
  });

  // Part 2: jQuery Effects
  // Task 2: Visibility Methods (.hide(), .show(), .toggle())
  $("#btn-hide").click(function () {
    $("#status-container").hide(300);
  });

  $("#btn-show").click(function () {
    $("#status-container").show(300);
  });

  $("#btn-toggle").click(function () {
    $("#status-container").toggle(300);
  });

  // Task 3: Fade Methods (.fadeIn(), .fadeOut(), .fadeToggle())
  $("#btn-fadein").click(function () {
    $(".img-fade").fadeIn(400);
  });

  $("#btn-fadeout").click(function () {
    $(".img-fade").fadeOut(400);
  });

  $("#btn-fadetoggle").click(function () {
    $(".img-fade").fadeToggle(400);
  });

  // Task 4: Slide Methods (.slideToggle())
  $(".slide-title").click(function () {
    $(this).next(".panel").slideToggle(300);
  });

  // Part 3: DOM Manipulation with jQuery

  // Task 5: Add & Remove Elements (.append(), .prepend(), .remove(), validation)
  $("#btn-add").click(function () {
    let skill = $("#skill-input").val().trim();
    if (skill !== "") {
      $("#skill-list").append("<li>" + skill + "</li>");
      $("#skill-input").val("");
    } else {
      alert("Please enter a skill before adding!");
    }
  });

  $("#btn-prepend").click(function () {
    let skill = $("#skill-input").val().trim();
    if (skill !== "") {
      $("#skill-list").prepend("<li>" + skill + "</li>");
      $("#skill-input").val("");
    } else {
      alert("Please enter a skill before prepending!");
    }
  });

  $("#btn-remove").click(function () {
    $("#skill-list li:last").remove();
  });

  // Task 6: Modifying Attributes (.attr())
  let isGithub = true;
  $("#btn-change-link").click(function () {
    let $link = $("#profile-link");
    if (isGithub) {
      $link.attr("href", "https://linkedin.com").text("Visit LinkedIn Profile");
      $(this).text("Switch Link to GitHub");
      isGithub = false;
    } else {
      $link.attr("href", "https://github.com").text("Visit GitHub Profile");
      $(this).text("Switch Link to LinkedIn");
      isGithub = true;
    }
  });

  // Task 7: Form Interaction (.val(), .text())
  $("#name-input").on("input", function () {
    let val = $(this).val();
    $("#out-name").text(val.length > 0 ? val : "—");
  });

  $("#email-input").on("input", function () {
    let val = $(this).val();
    $("#out-email").text(val.length > 0 ? val : "—");
  });


  // Part 4: Animations (Task 8)
  let isAnimated = false;
  $("#btn-animate").click(function () {
    if (!isAnimated) {
      // Animate skill bars to their respective target widths
      $(".bar-fill").each(function () {
        let targetWidth = $(this).attr("data-width");
        $(this).animate({ width: targetWidth }, 600);
      });
      $(this).text("Reset Skills");
      isAnimated = true;
    } else {
      // Animate skill bars back to 0 width
      $(".bar-fill").animate({ width: "0%" }, 400);
      $(this).text("Animate My Skills");
      isAnimated = false;
    }
  });
});