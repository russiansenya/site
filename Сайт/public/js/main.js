function slowScroll(id) {
	$("html, body").animate({
		scrollTop: $(id).offset().top - 50
	}, 500);
	return false; 
}

$(".header-top .menu").on("click", function() {
	if($("header .mobile-menu").is(":visible"))
		$(this).html('<i class="fa-solid fa-bars"></i>');
	else
		$(this).html('<i class="fa-solid fa-ellipsis"></i>');

	$("header .mobile-menu").slideToggle();
});

$("#subscribe").on("click", function() {
	let email = $("#email").val();
	email = email.trim();
	if(email.split("@").length != 2 || email.split(".").length != 2) {
		$("#sub-form label").text("Вы ввели неверный email");
		$("#sub-form label").fadeIn();
	}

	setTimeout(function() {
		$("#sub-form label").fadeOut();
	}, 1500);
});

$('.video-play, #modal-video .close-button').on('click', function() {
	$("#modal-video").toggle();
	$("body").toggleClass("overflow-hidden");
	resizeVideo();
});

$(window).on('resize', function() {
	resizeVideo();
}).resize();

function resizeVideo() {
	$("iframe").each(function() {
		let width = $(this).width();
		$(this).css("height", width / 1.77 + "px");
	});
}