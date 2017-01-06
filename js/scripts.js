$(".allbut").click(function(){
  $(".land").show();
  $(".arch").show();
  $(".plant").show();
}
                   
                   );

//click illustration
$(".landbut").click(function(){
  $(".plant").hide();
  $(".land").show();
  $(".arch").hide();
}

);


//click posters

// ill land post arch plant pho

$(".archbut").click(function(){
  $(".arch").show();
  $(".plant").hide();
  $(".land").hide();
  
}

);



//click photos

$(".plantbut").click(function(){
  $(".plant").show();
  $(".land").hide();
   $(".arch").hide();
}

);

$("#gallery a").click(function(event) {
	event.preventDefault();
});