 	
$(document).ready(function(){

	$('#start').attr("disabled", false);
	$('#stop').attr("disabled", false);
	$('#result').text("");

	$.slots = {
		"s1" : "",
		"s2" : "",
		"s3" : "",
	};

	$('#start').click(function(){

		$(this).attr("disabled", true);	

		$('#carousel-1').carousel({ "warp": "cycle" });
		$('#carousel-2').carousel({ "warp": "cycle" });
		$('#carousel-3').carousel({ "warp": "cycle" });

		$("#carousel-1").on("slide.bs.carousel", function() {
			var x = Math.floor((Math.random() * 7) + 1);
			$(".slot1.item.active").text(x)
		});

		$("#carousel-2").on("slide.bs.carousel", function() {
			var x = Math.floor((Math.random() * 7) + 1);
			$(".slot2.item.active").text(x)
		});

		$("#carousel-3").on("slide.bs.carousel", function() {
			var x = Math.floor((Math.random() * 7) + 1);
			$(".slot3.item.active").text(x)
		});
	});

	function check() {
		//console.log($.slots);
		if($.slots.s1 != "" && $.slots.s2 != "" && $.slots.s3 != "" ) {
			if($.slots.s1 == $.slots.s2 && $.slots.s2 == $.slots.s3) {
				$('#result').text("You Won !!!");
				//location.reload();
			}
			else {
				$('#result').text("You Loose !!!");
				//location.reload();
			}
		}
	}


	$('#stop').click(function(){

		$(this).attr("disabled", true);	

		$('#carousel-1').carousel("pause");

		$('#carousel-1').on("slid.bs.carousel", function(e) {
			$.slots.s1 = $(e.relatedTarget).text();
			$('#carousel-2').carousel("pause");
			check();
		});

		$('#carousel-2').on("slid.bs.carousel", function(e) {
			$.slots.s2 = $(e.relatedTarget).text();
			$('#carousel-3').carousel("pause");
			check();
		});

		$('#carousel-3').on("slid.bs.carousel", function(e) {
			$.slots.s3 = $(e.relatedTarget).text();
			check();
		});

	});

	
});