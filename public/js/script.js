function jQFormSerializeArrToJson(formSerializeArr) {
  var jsonObj = {};
  jQuery.map(formSerializeArr, function (n, i) {
      jsonObj[n.name] = n.value;
  });

  return jsonObj;
}

// Animations init
// new WOW().init();

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
    e.preventDefault();
    e = e.currentTarget;
    let form = `<form class="text-center p-5" action="/authOTP" method="POST">
        <p class="h4 mb-4">Confirm OTP</p>
        <input type="number" id="userOTP" class="form-control" placeholder="Enter OTP" aria-describedby="defaultOtpHelpBlock">
        <small id="defaultOtpHelpBlock" class="form-text text-muted mb-4">
          Enter 5 digit code that we will sendon your Email</small>
        <button class="btn btn-info my-4 btn-block waves-effect waves-light" type="submit">Submit</button>
        </form>`;
    let data = jQFormSerializeArrToJson($(e.parentNode).serializeArray());
    let postUrl = $(e.parentNode).attr('action');
    console.log(postUrl);
    $.ajax({
      url:postUrl,
      type:'POST',
      data: data,
      datatype:'json',
      timeout:5000,
      success:function(result){
        console.log("success"+ result)
        $('#register').html(form);
      }
    });
  });
});
