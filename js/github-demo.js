/* ----------------------------------------------------------------------
THIS IS A NON-WORKING VERSION
for the Github page only

DO NOT USE THIS
---------------------------------------------------------------------- */


$(function () {

	/*** THE CONTENT ***/
	var slideTexts = {
		slide1: '<div class="onboarding-heading">New in this app</div>\
							<img src="/img/onboarding_slide1.jpg">\
							<div class="onboarding-subheading">Use it everywhere, including your garden</div>\
							<p>The app runs on every device, including your smartphone and tablet</p>',

		slide2: '<div class="onboarding-heading">Trade online anytime</div>\
							<img src="/img/onboarding_slide2.jpg">\
							<div class="onboarding-subheading">All your stocks in one single screen</div>\
<p>Insight in your positions, everywhere</p>',

		slide3: '<div class="onboarding-heading">“That works easy”</div>\
							<img src="/img/onboarding_slide3.jpg">\
							<div class="onboarding-subheading">Designed together with our customers for ease of use</div>\
							<p>Do more in fewer clicks</p>',

		slide4: '<div class="onboarding-heading">Curious about all the changes?</div>\
							<img src="/img/onboarding_slide4.jpg">\
							<div class="onboarding-subheading"><a href="" class="btn btn-default close-modal">See the change log</a>&nbsp;&nbsp;&nbsp;<a href="" class="btn btn-success close">Or start NOW! <i class="fa fa-angle-right"></i></a></div>'
	};

	var totalSlides = Object.keys(slideTexts).length;

	//some initial variables
	var $modal, $prev, $next, $mc, $step, whichStep, pages, w, h;


	/*** FUNCTIONS ***/

	function createModal() {
		$('body').append('<div id="modal-whatsnew" class="modal-css"><div class="modal-content"><a href="" class="close top"><i class="fa fa-close"></i></a><div class="arrow prev top-button"></div><div class="arrow next top-button"></div><div class="modal-copy"><div class="slide-wrapper"></div></div><div class="modal-footer"><div class="arrow prev"></div><div class="arrow next"></div><div class="markers"></div><div class="checkbox"><input type="checkbox" name="close-explanation" id="close-explanation" checked="checked"><label for="close-explanation">Do not show this screen again</label></div></div></div><div class="modal-overlay"></div></div>');
	}

	function createSlides() {
		var $wrap = $modal.find('.slide-wrapper');
		var $markers = $modal.find('.markers');
		$.each(slideTexts, function (index, value) {
			$wrap.append('<div class="step step-' + index + '">' + value + '</div>');
			$markers.append('<div class="marker"></div>');
		});

		$markers.find('.marker').eq(0).addClass('active');
	}

	function setDimensions() {
		// set the dimensions for the individual slides
		$step.height(h).width(w);

		// set the width of the slider wrapper
		$('.slide-wrapper').width(w * pages);
	}

	// this function activates the right slide marker below the slides
	function checkMarkers() {
		if (whichStep == 0) {
			$prev.removeClass('active');
		} else {
			$prev.addClass('active');
		}
		if (whichStep == (pages - 1)) {
			$next.removeClass('active');
		} else {
			$next.addClass('active');
		}
		$modal.find('.marker').eq(whichStep).addClass('active').siblings().removeClass('active');
	}


	createModal();

	$modal = $('#modal-whatsnew');
	$prev = $modal.find('.arrow.prev');
	$next = $modal.find('.arrow.next');
	$mc = $modal.find('.modal-copy');

	createSlides();

	$step = $modal.find('.step');
	whichStep = 0;
	pages = $step.length;
	w = $mc.width();
	h = $mc.height();

	setDimensions();
	checkMarkers();

	/*** EVENTS ***/

		// a generic link that activates the modal screen
		$('.activate-modal').on('click', function () {
			$modal.addClass('active');
			return false;
		});

		function setSlideCss(whichStep) {
			// test which marker needs to be activated
			checkMarkers();

			// calculate the left margin based on the width of
			// the slide and the index of the selected slide
			marginChange = -Math.abs(whichStep * w);

			// adjust the left margin so the slide wrapper div moves
			// to the left by the width of a single slide.
			// CSS takes care of the animation
			$mc.find('.slide-wrapper').css('marginLeft', marginChange);
		}

		// click on button for next slide
		$next.on('click', function (e) {
			whichStep++;
			setSlideCss(whichStep);
			e.preventDefault();
		});

		// see comments in previous step
		$prev.click(function (e) {
			whichStep--;
			setSlideCss(whichStep);
			e.preventDefault();
		});

		// when the close modal link is clicked
		$modal.on('click', '.close, .close-modal', function () {
			// close the modal
			$modal.removeClass('active');
			return false;
		});
});
