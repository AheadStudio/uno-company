(function($) {
	var UNOCOMPANY = (function() {

		var $sel = {};
		$sel.window = $(window);
		$sel.html = $("html");
		$sel.body = $("body", $sel.html);

		return {
			page: {
				slider: function() {
					var self = this,
						$itemSlider = $(".main-slider-item");

					$(".slick-slider").slick({
						dots: false,
						arrows: false,
						infinite: true,
						autoplay: true,
						autoplaySpeed: "1500",
						speed: 1000,
						slidesToShow: 1,
						cssEase: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
					});

					$itemSlider.on("mousedown", function() {
						item = $(this);
						item.css("cursor", "-webkit-grab");
					})

					$itemSlider.on("mouseup", function() {
						item = $(this);
						item.css("cursor", "pointer");
					})
				},

				preloader: function() {
					$sel.window.on("load", function() {

						setTimeout(function() {
							$(".animate").removeClass("hide");
						}, 500);

					});
				}
			}
		};

	})();

	UNOCOMPANY.page.preloader();
	UNOCOMPANY.page.slider();

})(jQuery);
