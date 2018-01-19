/* ----------------------------------------------------------------------
* File name:		whatsnew.js
* Description:	shows a slideshow on first visit
* Version:			1.1
* Date:					03-01-2017
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */

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

	var cookieName = 'no-onboarding';
	var x = readCookie(cookieName);
	if (!x) {
		// if cookie does not exist, do the functions necessary
		// for showing the modal
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'js/onboarding-stage2.min.js';

		document.getElementsByTagName('head')[0].appendChild(script);
	}

