// Fade in initial page content.
$(window).on('load', function() 
{
	$("body").fadeIn(1000);
	$(".index-container").fadeIn(1000);
});

// Fade out current page, fade in new page.
function loadContent(content)
{
	$(".content").fadeOut(500).promise().done(function()
	{
		$(`.${content}-container`).fadeIn(1000);
	});	
}

// Play / pause current audo.
function toggleAudio()
{
	var state = $("#state");
	var music = $("#music");
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

