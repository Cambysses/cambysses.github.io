$(window).on('load', function() 
{
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	
	$("a.transition").click(function(event)
	{
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);      
	});

	function redirectPage() 
	{
		window.location = linkLocation;
	}
});

function adjustAudio()
{
	var state = document.getElementById("state");
	var music = document.getElementById("music");
	music.volume = 0.25;
	if (state.innerHTML == "▶")
	{
		music.play();
		state.innerHTML = "⏸";
	}
	else
	{
		music.pause();
		state.innerHTML = "▶";
	}
}

