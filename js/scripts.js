$(".allbut").click(function(){
  $(".pho").show();
  $(".ill").show();
  $(".post").show();
}
                   
                   );

//click illustration
$(".illbut").click(function(){
  $(".pho").hide();
  $(".ill").show();
  $(".post").hide();
}

);


//click posters

$(".postbut").click(function(){
  $(".post").show();
  $(".ill").hide();
  $(".pho").hide();
  
}

);



//click photos

$(".phobut").click(function(){
  $(".pho").show();
  $(".ill").hide();
   $(".post").hide();
}

);

$("#gallery a").click(function(event) {
	event.preventDefault();
});