// this is for responsive menu
$('.hide').hide();
$('.mobile-menu-item').hide();

$('.show').click(function(){
  $('.hide').show();
  $('.show').hide();
  $('.mobile-menu-item').show();
  $('.mobile-menu-item').toggleClass('toggle-class');
});

$('.hide').click(function(){
  $('.show').show();
  $('.hide').hide();
  $('.mobile-menu-item').toggleClass('toggle-class');
});



// accordion start

$(".hide1").hide();
$(".hide2").hide();
$(".hide4").hide();
$(".hide5").hide();



$(".ans1").hide();
$(".ans2").hide();
$(".ans4").hide();
$(".ans5").hide();



$('.show1').click(function(){
  $(".hide1").show();
  $(".show1").hide();
  $(".ans1").slideDown();
});

$('.hide1').click(function(){
  $(".show1").show();
  $(".hide1").hide();
  $(".ans1").slideUp();
});



$('.show2').click(function(){
  $(".hide2").show();
  $(".show2").hide();
  $(".ans2").slideDown();
});

$('.hide2').click(function(){
  $(".show2").show();
  $(".hide2").hide();
  $(".ans2").slideUp();
});












$('.show4').click(function(){
  $(".hide4").show();
  $(".show4").hide();
  $(".ans4").slideDown();
});

$('.hide4').click(function(){
  $(".show4").show();
  $(".hide4").hide();
  $(".ans4").slideUp();
});

$('.show5').click(function(){
  $(".hide5").show();
  $(".show5").hide();
  $(".ans5").slideDown();
});

$('.hide5').click(function(){
  $(".show5").show();
  $(".hide5").hide();
  $(".ans5").slideUp();
});





// accordion end