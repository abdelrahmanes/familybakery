// changing the nav when scroll down
$(window).scroll(function () {
  let scrollT = $("body,html").scrollTop();
  if (scrollT > 200) {
    $("#nav")
      .css("backgroundColor", "#fff")
      .css("padding", "0")
      .removeClass("navbar-dark")
      .addClass("navbar-light");
    $("#logo")
      .attr("src", "./images/bakery-color.png")
      .css("padding", "5px 10px");
    $(".nav-link").css("color", "#000").css("padding", "3px");
    $(".navbar-nav").css("padding", "0 10px");
    $("#btn-up").fadeIn(300);
  } else {
    $("#nav").css("backgroundColor", "transparent");
    $("#logo").attr("src", "./images/bakery-light-1.png");
    $(".nav-link").css("color", "#fff").css("padding", "3px");
    $("#btn-up").fadeOut(300);
  }
});

// scroll with smooth behavior - travel to the clicked section
$("a").click(function (e) {
  let aHref = $(e.target).attr("href");
  // console.log(aHref);
  let sectionOffset = $(aHref).offset().top;
  // console.log(sectionOffset);
  $("html,body").animate({ scrollTop: sectionOffset - 50 }, 1300);
});
// scroll icon scrolling smoothly
$("#scroll-btn").click(function () {
  $("html, body").animate({ scrollTop: 600 }, 2000);
});
// scoll up btn
$("#btn-up").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1300);
});

// sidebar toggler
$("#toggle").click(function () {
  let sideWidth = $("#side-panel").innerWidth();
  if ($("#side-panel").css("right") == "0px") {
    $("#side-panel").width("249px", 1000);
    // $('#side-panel').animate({width: '249px'},1000)
    $("#side-panel").animate({ right: `-${sideWidth}` }, 1000);
  } else {
    $("#side-panel").animate({ right: `0px` }, 1000);
    $("#side-panel").width("249");
  }
});

// changing color when clicking on a specified color
$(".color-box").eq(0).css("backgroundColor", "#FFAEBC");
$(".color-box").eq(1).css("backgroundColor", "#A0E7E5");
$(".color-box").eq(2).css("backgroundColor", "#B4F8C8");
$(".color-box").eq(3).css("backgroundColor", "#353643");
$(".color-box").eq(4).css("backgroundColor", "#F51720");
$(".color-box").eq(5).css("backgroundColor", "#FA26A0");
$(".color-box").eq(6).css("backgroundColor", "#F8D210");
$(".color-box").eq(7).css("backgroundColor", "#2FF3E0");
$(".color-box").eq(8).css("backgroundColor", "#4A7212");
$(".color-box").eq(9).css("backgroundColor", "#274472");
$(".color-box").eq(10).css("backgroundColor", "#5885AF");
$(".color-box").eq(11).css("backgroundColor", "#000C66");
$(".color-box").eq(12).css("backgroundColor", "#7EC8E3");
$(".color-box").eq(13).css("backgroundColor", "#050A30");
$(".color-box").eq(14).css("backgroundColor", "#FFA384");
$(".color-box").eq(15).css("backgroundColor", "#7E6E13");
$(".color-box").eq(16).css("backgroundColor", "#74BDCB");
$(".color-box").eq(17).css("backgroundColor", "#543855");

$(".color-box").click(function (e) {
  let itemRgb = $(e.target).css("backgroundColor");
  // console.log(itemRgb);
  $(".custom-btn").css("backgroundColor", itemRgb);
  $(".custom-i").css("color", itemRgb);
});
