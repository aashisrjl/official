
$(document).ready(function(){
    $('.course-overlay').slideUp();
});

$('.course-card').mouseenter(function(){
   $(this).children('.course-overlay').slideDown();
});

$('.course-card').mouseleave(function(){
    $(this).children('.course-overlay').slideUp();
});

$(document).ready(function(){
    $('#show').slideUp();

  });
  $('#sh').click(function(){
    $('#show').slideDown();

  });
  /*$('#show').slideDown(function(){
    $('#sh').hide();

  });
  */

  var password = "2020"; 
$(document).ready(function(){
  $("#sh").click(function(){
    var inputPassword = prompt("Enter password:");
    if (inputPassword === password) {
      alert("Result opened!");
    } else {
      alert("Invalid password.");
      window.location="https://www.facebook.com/aashis.rijal.92/";
    }
  });
});
/*<!--hide
var password;
var pass1="2020";
password=prompt('Enter password to view page','');
if(password==pass1)
alert('correct pasword, click OK to enter page.');
else
{
alert('Wrong! Plz Take Permission From AASHIS RIJAL');
window.location="https://www.facebook.com/aashis.rijal.92/";
}
*/

$('#myy,.my').mouseenter(function(){
  $('.my').css('text-shadow','red -3px 0, blue 0 3px');
});
$('#myy,.my').mouseleave(function(){
  $('.my').css('text-shadow','none');

});

$('.click').mouseenter(function(){
  $('.c').css('text-shadow','blue -3px 0, blue 0 3px');
  $('.p').css('text-shadow','blue -3px 0, blue 0 3px');
});
$('.click').mouseleave(function(){
  $('.c').css('text-shadow','none');
  $('.p').css('text-shadow','none');
});

$(document).ready(function(){
  $('.c, .p').hide();
});
$('.click').mouseenter(function(){
  $('.c,.p').show(100);
});
$('.click').mouseleave(function(){
  $('.c,.p').hide(500);
});

$('.aas-glry').mouseenter(function(){
  $('#album').css('background-color','yellow');
  $('#album').css('font-size','1.7em');
});
$('.aas-glry').mouseleave(function(){
  $('#album').css('background-color','transparent');
  $('#album').css('font-size','1.5em');
});

$('.card').mouseenter(function(){
  $('u').css('font-size','1.2em');
  $('u').css('color','yellow');
});


/*Projects*/

$('.dip1').mouseenter(function(){
  $('#h1').css('text-shadow','red 4px 3px');
  $('#h1').css('color','yellow');
});
$('.dip1').mouseleave(function(){
  $('#h1').css('text-shadow','');
  $('#h1').css('color','');
});

$('.dip2').mouseenter(function(){
  $('#h2').css('text-shadow','red 4px 3px');
  $('#h2').css('color','yellow');
});
$('.dip2').mouseleave(function(){
  $('#h2').css('text-shadow','');
  $('#h2').css('color','');
});

$('.dip3').mouseenter(function(){
  $('#h3').css('text-shadow','red 4px 3px');
  $('#h3').css('color','yellow');
});
$('.dip3').mouseleave(function(){
  $('#h3').css('text-shadow','');
  $('#h3').css('color','');
});

$('.dip4').mouseenter(function(){
  $('#h4').css('text-shadow','red 4px 3px');
  $('#h4').css('color','yellow');
});
$('.dip4').mouseleave(function(){
  $('#h4').css('text-shadow','');
  $('#h4').css('color','');
});

$('.dip5').mouseenter(function(){
  $('#h5').css('text-shadow','red 4px 3px');
  $('#h5').css('color','yellow');
});
$('.dip5').mouseleave(function(){
  $('#h5').css('text-shadow','');
  $('#h5').css('color','');
});

$('.dip6').mouseenter(function(){
  $('#h6').css('text-shadow','red 4px 3px');
  $('#h6').css('color','yellow');
});
$('.dip6').mouseleave(function(){
  $('#h6').css('text-shadow','');
  $('#h6').css('color','');
});
$('.dip7').mouseenter(function(){
  $('#h7').css('text-shadow','red 4px 3px');
  $('#h7').css('color','yellow');
});
$('.dip7').mouseleave(function(){
  $('#h7').css('text-shadow','');
  $('#h7').css('color','');
});


/* info in hover*/
$(document).ready(function(e){
  $('.text').text("Welcome to my Portfolio !");

  $('.text').animate({
    padding:'20px 10px',
    backgroundcolor:'yellow',
    float:'left',
    transition:'3s all ease-in-out'

  },1500);
});
$('.text').mouseenter(function(){
  $('.text').css('display','none');
});

/*portfolio*/

$(document).ready(function(){
  $('#tb').hide();
  $('#gp').hide();
  $('#intt').hide();
  $('#supp').hide();


});
$('.edu').click(function(){
  $('#tb').toggle();
});

$('.lvl').click(function(){
  $('#gp').toggle();
});

$('.int').click(function(){
  $('#intt').toggle();
});

$('.sup').click(function(){
  $('#supp').toggle();
});

/*info*/
$(document).ready(function(){
  $('#al').hide();
});

$('#h2').mouseenter(function(){
  $('#al').fadeIn(1500);
});
$('#h2').mouseleave(function(){
  $('#al').fadeOut(500);
});





