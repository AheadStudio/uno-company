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
						autoplaySpeed: "5000",
						speed: 700,
						slidesToShow: 1,
					});

					$itemSlider.on("mousedown", function() {
						item = $(this);
						item.css("cursor", "-webkit-grab");
					})

					$itemSlider.on("mouseup", function() {
						item = $(this);
						item.css("cursor", "pointer");
					})
				}
			}
		};

	})();

	UNOCOMPANY.page.slider();

})(jQuery);
