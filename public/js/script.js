// Animations init
// new WOW().init();

const { post } = require("../../routes/Homepage");

function register() {
  $('#myTab a[href="#register"]').trigger("click");
}
function login() {
  $('#myTab a[href="#signIn"]').trigger("click");
}

////////////////////////////
function init() {
  $("#footerWrapper").load(
    "/layout/_footer.html",
    function (response, status, xhr) {
      if (status == "error") {
        console.log(xhr.status + " " + xhr.statusText);
      }
    }
  );
  // $('header').load('#', function(response, status, xhr ){
  //   if ( status == "error" ) {
  //     console.log(xhr.status + " " + xhr.statusText);
  //   }
  // });
}

$(document).ready(function () {
  init();

  /* **************************************
   * Slide Bar
   ****************************************
   */
  $(window).bind("load", function () {
    // insert your code here
    if (window.innerWidth < 1440) {
      $("main").append(
        '<div class="drag-sidenav" style="position: fixed;left: 0;top:0; width:10px;height: 90vh;"></div>'
      );
      $('<div class="mask nav-mask"></div>').insertBefore("main");
      $(".drag-sidenav").on("click", function () {
        $("#openSideNav").trigger("click");
      });
      $(".nav-mask").on("click", function () {
        console.log("click");
        $("#openSideNav").trigger("click");
      });
    }
  });

  $("#openSideNav").on("click", function () {
    $("#slide-out-nav").hasClass("nav-expanded")
      ? ($("#slide-out-nav")
          .css("transform", "translateX(-241px)")
          .toggleClass("nav-expanded"),
        $(".nav-mask").removeClass("nav-mask-active"))
      : ($("#slide-out-nav")
          .css("transform", "translateX(0px)")
          .toggleClass("nav-expanded"),
        $(".nav-mask").addClass("nav-mask-active"));
  });

  $(".collapsible-header").on("click", function () {
    $(this).hasClass("active")
      ? ($(".active").removeClass("active"),
        $(".collapsible-body").slideUp("fast"))
      : ($(".active").removeClass("active"),
        $(this.parentNode).toggleClass("active"),
        $(this).toggleClass("active"),
        $(".collapsible-body").slideUp("fast"),
        $($(this.parentNode).find(".collapsible-body")).slideDown("fast"));
    // $($(this.parentNode).find('.collapsible-body')).slideToggle("slow");
  });
  /* **************************************
   * Slide Bar End
   ****************************************
   */
  $("#registerButton").click(function (e) {
    console.log(e);
    e.preventDefault;
    console.log("Hey bro u r start Use js");
    $.ajax({
      url:"/signIn",
      type:'POST',
      datatype:'json',
      timeout:2500,
      success:function(result){
        console.log(result)
      }
    });
  });
});
