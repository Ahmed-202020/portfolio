$(window).scroll(function () {

    if ($(this).scrollTop() >= 200) {
        $("#navbar").addClass("noTransparrent")
    }
    else {
        $("#navbar").removeClass("noTransparrent")
    }
});
$(document).ready(function () {
    $("a.scroll").on("click", function (event) {
        var hash = this.hash
        $("html , body").animate({ scrollTop: $(hash).offset().top }, 800)
    });
    $(".circle").circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on("circle-animation-progress", function (event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + "%");
        $("#commentForm").validate();


    });

    $(".work-gallery input.item-type-all").on("click", function () {
       $(".items .item-type-1 , .items .item-type-2 , .items .item-type-3").css(
         {
           cursor: "pointer",
           "pointer-events": "visible",
         }
       );
    });
    $(".work-gallery input.item-type-1").on("click", function () {
      $(".items .item-type-2 , .items .item-type-3").css({
        cursor: "auto",
        "pointer-events": "none",
      });
      $(".items .item-type-1").css({
        cursor: "pointer",
        "pointer-events": "visible",
      });
    });
    $(".work-gallery input.item-type-2").on("click", function () {
      $(".items .item-type-1 , .items .item-type-3").css({
        cursor: "auto",
        "pointer-events": "none",
      });
      $(".items .item-type-2").css({
        cursor: "pointer",
        "pointer-events": "visible",
      });
    });
    $(".work-gallery input.item-type-3").on("click", function () {
      $(".items .item-type-1 , .items .item-type-2").css({
        cursor: "auto",
        "pointer-events": "none",
      });
      $(".items .item-type-3").css({
        cursor: "pointer",
        "pointer-events": "visible",
      });
    });
});