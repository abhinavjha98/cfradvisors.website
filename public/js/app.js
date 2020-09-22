
   AOS.init({
     duration: 1000
   });

   $(function() {
     var fadeElem = $('.about-p, #aboutP');

     $(document).on('scroll', function(){
       var currScrollpos =   $(document).scrollTop();

       fadeElem.each(function(){
         var $this = $(this),
         elemOffsetTop = $this.offset().top;
         if(currScrollpos > elemOffsetTop) $this.css('opacity', 1-(currScrollpos-elemOffsetTop)/400);
       });
     });
   });

    // $("#sbtn2").click(function(){
    //   $(".service2").removeClass("hidden");
    //   $(".service1, .service3, .service4").addClass("hidden");
    //   $("div.card-column").animate({right: '700px'});
    // });
    //
    //
    // $("#sbtn3").click(function(){
    //   $(".service3").removeClass("hidden");
    //   $(".service2, .service1, .service4").addClass("hidden");
    //   $("div.card-column").animate({right: '700px'});
    // });
    //
    //
    // $("#sbtn4").click(function(){
    //   $(".service4").removeClass("hidden");
    //   $(".service2, .service3, .service1 ").addClass("hidden");
    //   $("div.card-column").animate({right: '700px'});
    //   });

var width = $(window).width();

if(width > 1090){
  $(document).ready(function(){
      $(".thumb1").click(function(){
        $(".thumb2,.thumb3,.thumb4").fadeOut();
        $("#service1_cont").animate({  left: "500px"}, 300);
        $("#service1_cont").fadeIn(500);
      });
  });



  $(document).ready(function(){
    $(".thumb2").click(function(){
      $(".thumb1,.thumb3,.thumb4").fadeOut();
      $(".thumb2").animate({right:"200px"},400);
      $("#service2_cont").animate({  left: "400px"}, 400);
      $("#service2_cont").fadeIn();
    });
  });



  $(document).ready(function(){
    $(".thumb3").click(function(){
      $(".thumb1,.thumb2,.thumb4").fadeOut();
      $(".thumb3").animate({right:"550px"},400);
      $("#service3_cont").animate({  left: "400px"}, 400);
      $("#service3_cont").fadeIn();
    });
  });



  $(document).ready(function(){
    $(".thumb4").click(function(){
      $(".thumb1,.thumb2,.thumb3").fadeOut();
      $(".thumb4").animate({right:"830px"},400);
      $("#service4_cont").animate({  left: "400px"}, 400);
      $("#service4_cont").fadeIn();
    });
  });


}else{
  $(document).ready(function(){
      $(".thumb1").click(function(){
        $(".thumb2,.thumb3,.thumb4").fadeOut();
        $("#service1_cont").fadeIn(500);
        $("#service1_cont").animate({  left: "200px"}, 300);
      });
  });

  $(document).ready(function(){
    $(".thumb2").click(function(){
      $(".thumb1,.thumb3,.thumb4").fadeOut();
      $("#service2_cont").fadeIn(500);
      $("#service2_cont").animate({  left: "200px"}, 300);
    });
  });

  $(document).ready(function(){
    $(".thumb3").click(function(){
      $(".thumb1,.thumb2,.thumb4").fadeOut();
      $("#service3_cont").fadeIn(500);
      $("#service3_cont").animate({  left: "200px"}, 300);
    });
  });

  $(document).ready(function(){
    $(".thumb4").click(function(){
      $(".thumb1,.thumb2,.thumb3").fadeOut();
      // $(".thumb4").animate({right:"680px"},300);
      $("#service4_cont").fadeIn(500);
      $("#service4_cont").animate({  left: "200px"}, 300);
    });
  });
}

$(document).ready(function(){
  $("#back-btn1").click(function(){
    $("#service1_cont").animate({  left: "0"}, 300);
    $("#service1_cont").fadeOut(200);
    $(".thumb2,.thumb3,.thumb4").fadeIn(1000);
  });
});

$(document).ready(function(){
  $("#back-btn2").click(function(){
    $("#service2_cont").animate({  left: "0"}, 300);
    $(".thumb2").animate({right:"0"},300);
    $("#service2_cont").fadeOut(200);
    $(".thumb1,.thumb3,.thumb4").fadeIn(1000);
  });
});

$(document).ready(function(){
  $("#back-btn3").click(function(){
    $("#service3_cont").animate({  left: "0"}, 300);
    $(".thumb3").animate({right:"0"},300);
    $("#service3_cont").fadeOut(200);
    $(".thumb1,.thumb2,.thumb4").fadeIn(1000);
  });
});

$(document).ready(function(){
  $("#back-btn4").click(function(){
    $("#service4_cont").animate({  left: "0"}, 300);
    $(".thumb4").animate({right:"0"},300);
    $("#service4_cont").fadeOut(200);
    $(".thumb1,.thumb2,.thumb3").fadeIn(1000);
  });
});
