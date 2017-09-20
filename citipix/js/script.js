//Don't run javascript until page has loaded
$(document).ready(function(){

	var button = $("#submit-btn").attr("type", "submit")
	var cityInput = $("#city-type")

	// User clicks on button to call the anonymous function that changes the background image

	button.click(function(event){
		// Page prevented from refreshing
		event.preventDefault();
		// Program gets input value and stores it as the variable "city"
		var city = cityInput.val();
		// Program displays corresponding background-image 
		if (city === "Austin" || city === "ATX"){
			$("body").css("background-image", "url(images/austin.jpg)");
		}
		else if (city === "Los Angeles" || city === "LA" || city === "LAX"){
			$("body").css("background-image", "url(images/la.jpg)");
		}
		else if (city === "New York City" || city === "New York" || city === "NYC"){
			$("body").css("background-image", "url(images/nyc.jpg)");
		}
		else if (city === "San Francisco" || city === "SF" || city === "Bay Area"){
			$("body").css("background-image", "url(images/sf.jpg)");
		}
		else if (city === "Sydney" || city === "SYD"){
			$("body").css("background-image", "url(images/sydney.jpg)");
		}
		// Program resets input field
		cityInput.val("")
	})

})