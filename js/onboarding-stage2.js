/* ----------------------------------------------------------------------
* File name:		onboarding-stage2.js
* Description:	shows am onboarding slideshow on first visit
* Version:			1.3
* Date:					19-1-2018
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */


$(function () {

	/*** DE TEKSTEN ***/
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
							<div class="onboarding-subheading"><a href="" target="_blank" class="btn btn-default">See the change log</a>&nbsp;&nbsp;&nbsp;<a href="" class="btn btn-success close">Or start NOW! <i class="fa fa-angle-right"></i></a></div>'
	};

	$('head').append('<style>.modal-css{width:100%;margin:0;opacity:0;position:absolute;top:-60%;visibility:hidden;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.4s ease-in-out;-o-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out}.modal-css .arrow{margin-top:-16px;width:32px;line-height:29px;height:32px;top:23px;position:absolute;font-family:"FontAwesome";display:inline-block;border-radius:50%;color:#707f94;border:solid 1px #a2aabd;text-align:center;cursor:pointer;font-size:20px;vertical-align:-2px;-webkit-transition:0.3s all;-o-transition:0.3s all;transition:0.3s all;z-index:1000;visibility:hidden;opacity:0}.modal-css .arrow.top-button{top:50%;display:none}.modal-css .arrow.top-button.prev{left:30px}.modal-css .arrow.top-button.next{right:30px}.modal-css .arrow.active{visibility:visible;opacity:1}.modal-css .arrow:hover{background:#707f94;color:#fff;border-color:#707f94}.modal-css .arrow.prev{margin-right:10px;padding-right:1px;left:10px}.modal-css .arrow.next{margin-left:10px;padding-left:3px;right:10px}.modal-css.active{top:0;visibility:visible;opacity:1}.modal-css .modal-content{position:fixed;background:#fff;max-width:100%;text-align:center;top:0;left:0;bottom:0;right:0;z-index:20;padding:1rem;overflow:hidden;border-radius:0}.modal-css .modal-content .close.top{position:absolute;right:10px;top:10px;z-index:1000;color:#707e94;opacity:.5;-webkit-transition:0.3s all;-o-transition:0.3s all;transition:0.3s all}.modal-css .modal-content .close.top:hover{opacity:1}.modal-css .modal-content .onboarding-heading{font-size:30px;margin:15px 0 30px}.modal-css .modal-content .onboarding-subheading{font-size:20px;margin:12px 0 0;font-weight:600}.modal-css .modal-content .onboarding-subheading .btn{display:block}.modal-css .modal-content .onboarding-subheading .btn.btn-success{font-size:inherit;color:#fff;opacity:1;text-shadow:none;float:none}.modal-css .modal-content .modal-copy{width:100%;overflow:hidden;position:relative}.modal-css .modal-content .modal-copy .slide-wrapper{-webkit-transition:1s all;-o-transition:1s all;transition:1s all}.modal-css .modal-content .modal-copy .slide-wrapper .step{float:left;overflow:hidden}.modal-css .modal-content .modal-copy .slide-wrapper .step img{max-width:100%;height:auto}.modal-css .modal-content .modal-footer{padding:0;border:0 none;position:relative}.modal-css .modal-content .modal-footer .arrow{display:block}.modal-css .modal-content .modal-footer .markers{text-align:center;padding:12px 0 0}.modal-css .modal-content .modal-footer .markers .marker{display:inline-block;width:12px;height:12px;margin:0 2px;border-radius:50%;background:#CBD1E0;-webkit-transition:.3s all;-o-transition:.3s all;transition:.3s all}.modal-css .modal-content .modal-footer .markers .marker.active{background:#2FA8F5}.modal-css .modal-content .modal-footer .checkbox{margin-top:30px;text-align:center}.modal-css .modal-content .modal-footer .checkbox input[type=checkbox]{display:none}.modal-css .modal-content .modal-footer .checkbox input[type=checkbox]+label{line-height:100%;display:inline-block;color:#a2aabd;font-weight:600;font-size:12px;cursor:pointer;-webkit-transition:0.3s all;-o-transition:0.3s all;transition:0.3s all;font-weight:normal}.modal-css .modal-content .modal-footer .checkbox input[type=checkbox]+label:hover{color:#364151}.modal-css .modal-content .modal-footer .checkbox input[type=checkbox]+label:before{content:"";color:#fff;text-align:center;font-size:14px;line-height:18px;display:inline-block;width:18px;height:18px;border-radius:4px;border:solid 1px #CBD1E0;font-family:"FontAwesome";margin-right:5px}.modal-css .modal-content .modal-footer .checkbox input[type=checkbox]:checked+label{color:#364151}.modal-css .modal-content .modal-footer .checkbox input[type=checkbox]:checked+label:before{color:#2FA8F5}.modal-css .modal-overlay{background-color:#444;background:rgba(0, 0, 0, 0.5);height:100%;left:0;position:fixed;top:0;width:100%;z-index:10}@media only screen and (max-width:767px){.modal-css .modal-content .modal-copy .slide-wrapper .step{height:auto!important}.step-slide4 .close:before{clear:both;display:table;content:""}}@media only screen and (min-width:768px){.modal-css{left:50%;width:700px;height:auto;max-width:96%;position:fixed;margin:-250px 0 0 -350px}.modal-css .btn.top-button{display:block}.modal-css.active{top:10%;margin:0 0 0 -365px}.modal-css .modal-content{position:relative;height:auto;-webkit-box-shadow:0 3px 8px rgba(0, 0, 0, 0.25);box-shadow:0 3px 8px rgba(0, 0, 0, 0.25);border-radius:4px}.modal-css .modal-content .modal-copy{height:300px}.modal-css .modal-content .modal-copy .slide-wrapper{position:absolute}.modal-css .modal-content .onboarding-subheading .btn{display:inline-block}.modal-css .modal-footer .btn{display:none}} </style>');
	var totalSlides = Object.keys(slideTexts).length;

	//some initial variables
	var $modal, $prev, $next, $mc, $step, whichStep, pages, w, h,
		cookieName = 'no-onboarding',
		cookieValue = 1,
		cookieDays = 1000;


	/*** FUNCTIONS ***/

	function createModal() {
		$('body').append('<div id="modal-onboarding" class="modal-css"><div class="modal-content"><a href="" class="close top"><i class="fa fa-close"></i></a><div class="arrow prev top-button"></div><div class="arrow next top-button"></div><div class="modal-copy"><div class="slide-wrapper"></div></div><div class="modal-footer"><div class="arrow prev"></div><div class="arrow next"></div><div class="markers"></div><div class="checkbox"><input type="checkbox" name="close-explanation" id="close-explanation" checked="checked"><label for="close-explanation">Do not show this screen again</label></div></div></div><div class="modal-overlay"></div></div>');
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

	// the next 3 functions are cookie functions
	function createCookie(cookieName, cookieValue, cookieDays) {
		if (cookieDays) {
			var date = new Date();
			date.setTime(date.getTime() + (cookieDays * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		} else var expires = "";
		document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
	}

	function readCookie(cookieName) {
		var nameEQ = cookieName + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		return null;
	}

	function eraseCookie(cookieName) {
		createCookie(cookieName, "", -1);
	}


	createModal();

	$modal = $('#modal-onboarding');
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

	$modal.addClass('active');


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
		$modal.on('click', '.close', function () {
			// check if a no show cookie needs to be set
			if ($modal.find(':checkbox').prop('checked')) {
				createCookie(cookieName, cookieValue, cookieDays)
			} else {
				eraseCookie(cookieName);
			}
			// close the modal
			$modal.removeClass('active');
			return false;
		});
});
