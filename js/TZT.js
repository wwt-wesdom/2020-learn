/**
 * Created by 中焯（九指神丐) on 2015/7/19.
 * 2019-09-16 fastclick 判断wkwebview
 * 2018-12-17增加无码埋点
 * 2018-12-7增加md5方法，以及reqxml统一增加tztsno字段（页面id）九指神丐
 * 2017-10-31getGGQQAccountList 方法增加股东账号市场中文出参 will
 * 2017-07-18 wk防止webkit的reqno重复
 * 2017-07-11增加UrlEncode和UrlDecode方法，安卓上会自动解码一次
 * 2017-07-11增加10054功能
 * 2017-4-14 增加wkwebview 九指神丐
 * 2017-5-4增加请求超时的timeout参数，默认30000ms ，自定义请求里增加{timeout：ms} will
 */
 !function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	 *
	 * @type boolean
	 */
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
					case 'button':
					case 'checkbox':
					case 'file':
					case 'image':
					case 'radio':
					case 'submit':
						return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month'&& targetElement.type !== 'number') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];
		var nodeName = targetElement.nodeName.toLowerCase();
		var typeAttribute = targetElement.getAttribute('type');
		if (nodeName === "select" || (typeAttribute === 'date' && nodeName === "input") || (typeAttribute === 'datetime' && nodeName === "input")){
			return false;
		}
		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

				// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		// return new FastClick(layer, options);
		TZT.readLocalMesg(['tztwkwebview'],function(data){
			if(data.TZTWKWEBVIEW != 1){
				new FastClick(layer, options);
			}
		});
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());
!(function(window,$){
	var
		rootTZT,
		core_strundefined = typeof undefined,
		location = window.location,
		document = window.document,
		docElem = document.documentElement,
	//防止和外部TZT冲突
		_TZT = window.TZT,
		_change = window.onJsOverrideUrlLoading,
	//防止和外部T冲突
		_T = window.T,
		core_version = "1.0.0",
		app = navigator.appVersion,
		appversion = app.toLocaleLowerCase(),
		TZT = function( selector, context ) {
			return new TZT.fn.init( selector, context, rootTZT );
		};
	/*$(function(){
	 FastClick.attach(document.body);
	 });*/
	//url进行跳转
	window.onJsOverrideUrlLoading = function(str){
		if(appversion.indexOf("windows phone")>0){
			window.external.notify(str);
		}else if(appversion.indexOf("iphone")>0){
			window.location.href=str;
		}else if(appversion.indexOf("android")>0){
			window.MyWebView.onJsOverrideUrlLoading(str);
		}else{
			window.location.href = str;
		}
	};
	// $(document).on("click", '.tzt_mdBtn', function () {
	//     var dom = $(this)[0];
	//     var Id = getBtnIdFun(dom);
	//        var eventobj = {
	//            id: Id,
	//        }
	//     var funName = 'tztTraceEventByID';
	//     var mobarg = [JSON.stringify(eventobj)];
	//     T.tztmobstats(funName,mobarg)
	// });
	window.onerror=function(message,url,line){
		T.log("出错详情:\n错误提示："+message+"\nUrl："+url+"\n行号："+line,'error');
		return true;//屏蔽系统事件
	};
	TZT.fn=TZT.prototype={
		tzt: core_version,
		constructor: TZT,
		flag10061: true,
		init:function(){},
		changeurl:onJsOverrideUrlLoading,
		changeURL:onJsOverrideUrlLoading,
		action10002:function(obj) {
			//返回前一页10002
			var tUrl = 'http://action:10002/?';
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		action1964: function(obj){
			//关闭当前页面打开另一个页面1964
			if(typeof obj.url == core_strundefined){
				this.action10002();
				return;
			}
			var tUrl = 'http://action:1964/?url=' + encodeURIComponent(obj.url);
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		action3413: function(obj){
			//关闭一组webview3413
			var tUrl = 'http://action:3413/?';
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		action10402: function(str,text){
			//系统登出
			var sUrl = '',txt='';
			if(typeof text == 'string'){
				txt = 'context='+text+'&&';
			}else{
				var iscont = false;
				for(var x in text){
					if(x == 'context'){
						iscont = true;
					}
					txt+=x+'='+text[x]+'&&';
				}
				if(!iscont){
					txt+='context=&&';
				}
			}
			if(typeof str != core_strundefined){
				sUrl = txt+'url='+encodeURIComponent(str);
			}
			this.changeurl('http://action:10402/?'+sUrl);
		},
		action10302: function(obj){
			//系统登出
			var tUrl = 'http://action:10302/?';
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		action10407: function(obj){
			//融资融券登出
			var tUrl = 'http://action:10407/?';
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		action10090: function(obj){
			/*
			 *功能：常用判断登陆用action10090全屏打开页面地址
			 *参数：url 要打开的url地址 Y
			 *参数：fuc 要执行的js方法名
			 *参数：logintype @0系统登录@1是普通交易登陆@2是融资融券登陆@8是个股期权登陆@9融资融券担保品划转登录
			 */
			var config = {
				logintype:1,
				loginkind:2,
				isExport:false,
				url:'',
				isaction:false
			},sUrl = 'http://action:10090/?';
			TZT.extend(config,obj);
			/*if (typeof config.fuc != core_strundefined){
			 sUrl = 'http://action:10090/?logintype='+config.logintype+'&&loginkind='+config.loginkind+'&&jsfuncname=' + config.fuc;
			 }else if(config.isaction){
			 sUrl = 'http://action:10090/?logintype='+config.logintype+'&&loginkind='+config.loginkind+'&&url='+config.url;
			 }else{
			 sUrl = 'http://action:10090/?logintype='+config.logintype+'&&loginkind='+config.loginkind+'&&url=' + (config.url ? /!*encodeURIComponent(this.action10061({isExport:true,url:*!/config.url/!*}))*!/ : '');
			 }*/
			for(x in config){
				if (x && config[x] != ''){
					if(x == 'isExport' || x == 'isaction'){
						continue;
					}else{
						sUrl+=x+'='+config[x]+'&&';
					}
				}
			}
			if(config.isExport){
				return sUrl.slice(0,-2);
			}else{
				this.changeurl(sUrl.slice(0,-2));
			}
		},
		/**
		 Action:10097
		type: 类型 0-表示在标题中增加分段，1-在标题栏下增加tab
		title: 标题文字，在type=0时，无效，不显示；不传默认空
		tips: 提示信息，用于显示在标题栏下方，默认为空
		index: 分段或tab的默认选中位置，不传默认0
		params: 对应界面信息，为一个encode之后的字符串，内容为json格式，json内容为数组类型，单个元素定义：
				itemtitle: 文字
				itemtype: 类型 0-web，1-行情列表，后面其他待定
				itemtips: 提示信息，不传默认空
				itemreq: 请求信息，若itemtype=0，则为对应的url；若itemtype=1为对应的列表请求完整数据
		另外需要支持左右按钮的定制，同10061
		*/
		action10097: function(obj){
			var config = {
				secondtype:9,
				fullscreen:1,
				type:1,
			},aParam = [];
			if(!obj || !obj.params) return console.log('数据传递无效');
			config = $.extend(config,obj);
			var x;
			for(x in config){
				if (x && (typeof config[x] != 'undefined'||typeof config[x] != 'null')){
					if(x == 'params'){
						aParam.push(x+"=" + encodeURIComponent(JSON.stringify(config.params)));
						continue;
					}
					aParam.push(x+"=" + config[x]);
				}
			}
			var exportUrl = '';
			if(aParam.length !=0){
				exportUrl = 'http://action:10097/?' + aParam.join('&&');
			}
			if(typeof obj.isExport == core_strundefined){
				this.changeurl(exportUrl);
			}else{
				return encodeURIComponent(exportUrl);
			}
		},
		action10061: function(obj){
			var that = this;
			var flag = that.flag10061;
			if(flag) {
				that.flag10061 = false;
				setTimeout(function() {
					that.flag10061 = true;
				}, 1000);
				//打开一个新的webview10061
				/*
				* type/secondtype
				*  @0、个股查询
				*  @1、修改字体(客户端处理)
				*  @2、订阅(后面需要带上订阅点击打开的地址）
				*  @3、修改(需要带上修改所要打开的地址）
				*  @4、我要开户(需要带上开户地址）
				*  @5、在线客服(需要带上在线客服地址）
				*  @6、筛选 （文字）(需要带上筛选链接地址）
				*  @7、筛选1（图片）(需要带上筛选链接地址）
				*  @8、快捷方式@9、右侧没有按钮
				*  @98:自定义(显示对应图片)
				*  @99:自定义(设置为默认底图，显示对应文本)
				* fullScreen@是否全屏展示 0-否，1-是
				* url@当前需要打开的url地址
				* secondurl@右侧按钮根据type不同，返回的链接地址，用于type(或secondtype)对应按钮点击的界面跳转，未设置secondjsfuncname有效
				* secondjsfuncname@页面对应JS函数名(就是函数的调用'js()')
				* firstjsfuncname@页面对应JS函数名
				* firsturl@左侧按钮根据firsttype不同，返回的链接地址，用于firsttype对应按钮点击的界面跳转，未设置firstjsfuncname有效
				* firsttext@firsttype=99时有效，显示对应文本或firsttype=98时有效，显示对应图片
				* skintype:   默认背景色 0-黑色 1-白色，为空，则默认当前使用的主题颜色
				* */
				var config = {
					secondtype: 9,
					fullscreen: 1
				},aParam = [];
				if(typeof obj == 'string'){
					config.url = obj;
				}
				if(typeof obj != core_strundefined && (typeof obj != 'string')){
					TZT.extend(config,obj);
					if('isExport' in config){
						delete config['isExport'];
					}
				}
				var x;
				for(x in config){
					if (x && config[x] != undefined){
						if(x == 'url'){
							aParam.push(x+"=" + encodeURIComponent(config.url));
							continue;
						}
						aParam.push(x+"=" + config[x]);
					}
				}
				var exportUrl = '';
				if(aParam.length != 0){
					exportUrl = 'http://action:10061/?' + aParam.join('&&');
				}
				if(typeof obj.isExport == core_strundefined){
					this.changeurl(exportUrl);
				}else{
					return encodeURIComponent(exportUrl);
				}
				
			}
		},
		action10054: function(obj){
			var aURL = [];
			if(typeof obj == core_strundefined){
				alert('请写入文件信息，tzttitle文件名称，tztfiletype文件类型，url文件地址');
				return;
			}
			var key;
			for(key in obj){
				if (obj[key] != ''){
					if(key == 'tztfiletype'){
						aURL.push(key+"=" + obj[key]);
					}else{
						aURL.push(key+"=" + encodeURIComponent(obj[key]));
					}
				}
			}
			var tUrl = 'http://action:10054/?tztfiledata=sContent&&' + aURL.join('&&');
			this.changeurl(tUrl);
		},
		action10055: function(obj){
			var aURL = [];
			//分享渠道 0:微信  1:微信朋友圈  2:QQ好友 3:QQ空间 4:腾讯微博 5:新浪微博 99:客户端选择
			/*
			 * @sharetype分享渠道
			 * @img_url分享图片URL
			 * @url分享的URL
			 * @title分享标题
			 * @message分享内容
			 * */
			if(typeof obj == core_strundefined){
				alert('请写sharetype分享渠道，img_url分享图片URL，url分享的URL，title分享标题，message分享内容');
				return;
			}
			var key;
			for(key in obj){
				if (obj[key] != ''){
					if(key == 'title' || key == 'message'){
						aURL.push(key+"=" + obj[key]);
						continue;
					}
					aURL.push(key+"=" + encodeURIComponent(obj[key]));
				}
			}
			var tUrl = 'http://action:10055/?' + aURL.join('&&');
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		actiontel: function(obj){
			//拨打电话
			if(!obj || !obj.tel){
				alert('请输入拨打的号码！');
				return;
			}
			var tUrl = 'http://tel:' + obj.tel;
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		action10073: function(obj){
			//打开第三方应用
			/*
			 * content@下载前的提示内容
			 * opentype@调用三方软件方式@0通过scheme打开@1包名打开@2Activity打开
			 * appurl@第三方应用调用url
			 * activityurl@要打开的第三方应用的activity值
			 * downloadurl@下载地址
			 * @当opentype等于0或1时activityurl为空，当为2时activityurl为要打开的activity值
			 * */
			var config = {
				content:'是否下载',
				opentype:0
			},aParam=[];
			TZT.extend(config,obj);
			var name;
			for(name in config){
				aParam.push(name+"=" + encodeURIComponent(config[name]));
			}
			var tUrl = 'http://action:10073/?'+aParam.join('&&');
			if(obj && obj.isExport){
				return tUrl;
			}
			this.changeurl(tUrl);
		},
		tradeaction: function(obj){
			/*
			 * 通用新版调用交易功能
			 *1、若只要使用客户端界面，则无须传入url，客户端根据是否有url判断是使用页面的方式还是原生的
			 *2、datetype用于日期选择，历史类的查询需要选择日期，页面只传入url，客户端第一次打开，自己补上begindate和enddate作为入参打开，以后每次修改日期，都执行界面的js，js函数固定refreshhistorydata(开始日期，结束日期)，url不再传入
			 *http://tradeaction:原先交易功能号/?title=标题&&stockcode=股票代码&&url=要打开的url&&datetype=1
			 * */
			var config = {
				title:'',
				stockcode:'',
				url:'',
				datetype:0,
				action:'',
				secondtype:'9', //右侧不需要显示搜索框，如果需要自行添加   历史tradeaction沿用10061
			},aParam = '/?';
			TZT.extend(config,obj);
			for(var x in config){
				if(config[x] == '' || x == 'isExport'){
					delete config[x];
				}else{
					if(x == 'action'){
						continue;
					}
					aParam += x+'='+config[x]+'&&';
				}
			}
			if(!config.action || (typeof config.action == core_strundefined)){
				/*alert('请输入交易功能号');
				 return;*/
				config.action = '';
			}
			if(aParam.length > 2){
				aParam = aParam.slice(0,-2)
			}
			var exportUrl = 'http://tradeaction:'+config.action+aParam;
			if(typeof obj.isExport == core_strundefined || !obj.isExport){
				this.changeurl(exportUrl);
			}else{
				return exportUrl;
			}
		}
	};
	TZT.fn.init.prototype = TZT.fn;
	TZT.extend = TZT.fn.extend = function(){
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
		if ( typeof target === "boolean" ) {
			deep = target;
			target = arguments[1] || {};
			i = 2;
		}
		if ( typeof target !== "object" && !$.isFunction(target) ) {
			target = {};
		}
		if ( length === i ) {
			target = this;
			--i;
		}
		for ( ; i < length; i++ ) {
			if ( (options = arguments[ i ]) != null ) {
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
					if ( target === copy ) {
						continue;
					}
					if ( deep && copy && ( $.isPlainObject(copy) || (copyIsArray = $.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && $.isArray(src) ? src : [];
						} else {
							clone = src && $.isPlainObject(src) ? src : {};
						}
						target[ name ] = TZT.extend( deep, clone, copy );
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
		return target;
	};
	TZT.extend({
		appversion:{
			v:appversion,
			iphone:function(){
				if(appversion.indexOf("iphone")>0){
					return true;
				}else{
					return false;
				}
			},
			andriod:function(){
				if(appversion.indexOf("android")>0){
					return true;
				}else{
					return false;
				}
			},
			win:function(){
				if(appversion.indexOf("windows phone")>0){
					return true;
				}else{
					return false;
				}
			}
		},
		objunit:{},
		UrlEncode:function(str){
				if(this.appversion.andriod()){
					return encodeURIComponent(encodeURIComponent(str));
				}else{
					return encodeURIComponent(str);
				}
		},
		UrlDecode:function(str){
				return decodeURIComponent(str);
		},
		Template:function(id,data){
			//Html模版
			/*
			 * <script type="text/html" id="user_tmpl">
			 * <ul>
			 *        <% for ( var i = 0; i < users.length; i++ ) { %>
			 *           <li>
			 *               <a href="<%=users[i].url%>">
			 *                  <%=users[i].name%>
			 *               </a>
			 *           </li>
			 *       <% } %>
			 *   </ul>
			 *   </script>
			 */

			var html=document.getElementById(id).innerHTML;
			var result="var p=[]; with(oData){p.push('"
				+html.replace(/[\r\n\t]/g,"").replace(/    /g,"")
					.replace(/<%=(.*?)%>/g,"');p.push($1);p.push('")
					.replace(/<%/g,"');")
					.replace(/%>/g,"p.push('")
				+" ');}return p.join('');";
			//console.log(result);
			var fn=new Function("oData",result);
			return fn(data);
		},
		pagecount:21,
		REQ:{//兼容之前老版本
			XML: "/reqxml?",
			LOCAL: "/reqlocal?",
			BINARY: "/reqbinary?",
			SAVEMAP: "/reqsavemap?",
			READMAP: "/reqreadmap?",
			SAVEFILE: "/reqsavefile?",
			READFILE: "/reqreadfile?",
			SOFTTODO: "/reqsofttodo?",
			LOADFILE: "reqloadfile?",
			SIGNATURE: "reqsignature?",
			TZTVEDIO: "/tztvideo?"
		},
		objBlur:function(id,time){
			if(!this.appversion.iphone){return false;}
			if(typeof id != "string") throw new Error("objBlur()参数错误");
			var obj = $(id),
				time = time || 300,
				docTouchend = function(event){
					if(event.target!= obj){
						setTimeout(function(){
							obj.blur();
							document.removeEventListener("touchend", docTouchend,false);
						},time);
					}
				};
			if(obj){
				obj.unbind().on("focus", function(){
					document.addEventListener("touchend", docTouchend,false);
				});
			}else{
				throw new Error("objBlur()没有找到元素");
			}
		},
		getStringWidth:function(str){
			var width = ln = str.length;
			for(var i=0;i<ln;i++){
				if(str.charCodeAt(i)>=57){
					width++;
				}
			}
			return width;
		},
		addcont:function(str,index,ZZPINDEX,DATEFORMINDEX){
			var numlength = str.replace(/\D/g, '').length;
			if(str.indexOf('.')==0 && numlength != 0){
				return '0'+str;
			}else{
				if(!ZZPINDEX || !index){
					return T.dateform(str,index,DATEFORMINDEX);
				}
				var arrIndex = ZZPINDEX.split(','),arrNum=[],arrSuo=[];
				for(var i=0;i<arrIndex.length;i++){
					arrNum[i]=arrIndex[i].split('|')[0];
					arrSuo[i]=arrIndex[i].split('|')[1];
				}
				if(index){
					var suoindex = arrNum.indexOf(index);
					if(suoindex>=0){
						return T.unit(str,arrSuo[suoindex]);
					}else{
						return T.dateform(str,index,DATEFORMINDEX);
					}
				}else{
					return T.dateform(str,index,DATEFORMINDEX);
				}
			}
		},
		mathpow:function(num){
			return Math.round(num*Math.pow(10,Number(2)))/Math.pow(10,Number(2));
		},
		format: function(num,dig) {
			//数字转换成小数两位
			//return Math.round(num*Math.pow(10,Number(dig)))/Math.pow(10,Number(dig));
			var f = parseFloat(num);
			var s = f.toString();
			var rs = s.indexOf('.');
			if (rs < 0 && dig>0) {
				rs = s.length;
				s += '.';
			}
			while (s.length <= rs + Number(dig)) {
				s += '0';
			}
			if(rs>=1 && (f.toString().length-rs>dig)){

				if(Number(dig)>0){
					var l = (num.toString().indexOf('.'))+1;
					s = num.toString().slice(0,l+Number(dig));
				}else{
					//s = Math.round(num*Math.pow(10,Number(dig)))/Math.pow(10,Number(dig));
					var wz = num.toString().indexOf('.');
					if(wz > 0){
						s = num.toString().substr(0,wz);
					}else{
						s = num;
					}
				}

			}
			return s;
		},
		unit:function(num,digit){
			var dig = digit || 0;
			if(num=='' || typeof num == core_strundefined){
				return '';
			}
			if(isNaN(num)){
				return num;
			}
			var arrNum = num.split('.');
			var arrln = arrNum[0].length;
			if(!digit){
				return num;
			}
			if(arrln>=6 && arrln<9){
				return (T.format(num/10000,dig)+'万');
			}else if(arrln>=9){
				return (T.format(num/100000000,dig)+'亿');
			}else{
				return (T.format(num,dig));
			}
		},
		zzpindex:function(str,index,ZZPINDEX){
			if(!ZZPINDEX){
				return str;
			}
			var arrIndex = ZZPINDEX.split(','),arrNum=[],arrSuo=[];
			for(var i=0;i<arrIndex.length;i++){
				arrNum[i]=arrIndex[i].split('|')[0];
				arrSuo[i]=arrIndex[i].split('|')[1];
			}
			if(index){
				var suoindex = arrNum.indexOf(index);
				if(suoindex>=0){
					return T.unit(str,arrSuo[suoindex]);
				}else{
					return str;
				}
			}
		},
		//时间日期转换
		dateform:function(str,index,DATEFORMINDEX){
			if(!DATEFORMINDEX || !index){
				return str;
			}
			var arrIndex = DATEFORMINDEX.split(','),arrNum=[],arrSuo=[];
			for(var i=0;i<arrIndex.length;i++){
				arrNum[i]=arrIndex[i].split('|')[0];
				arrSuo[i]=arrIndex[i].split('|')[1];
			}
			var suoindex = arrNum.indexOf(index);
			if(suoindex>=0){
				if(arrSuo[suoindex] && arrSuo[suoindex].indexOf('yyyy')=='0'){
					var s = arrSuo[suoindex].replace(/yyyy/g,'$1').replace(/mm/g,'$2').replace(/dd/g,'$3');
					return str.replace(/\-/g,'').replace(/^(\d{4})(\d{2})(\d{2})$/i,s);
				}else if(arrSuo[suoindex] && arrSuo[suoindex].indexOf('hh')=='0'){
					if(str.length==5 || str.length == 7){
						str='0'+str;
					}
					//金证返回《2016-12-27 15:09:56.483》数据处理
					if(str.indexOf(".") >= 0){
						str = str.replace(/\S*\s/g,'').replace(/\.\S*/g,'');
					}
					var s = arrSuo[suoindex].replace(/hh/g,'$1').replace(/mm/g,'$2').replace(/ss/g,'$3');
					return str.replace(/\:/g,'').substr(0,6).replace(/^(\d{2})(\d{2})(\d{2})$/i,s);
				}else{
					return str;
				}
			}else{
				return str;
			}
		},
		/**
		 * [nullValueFun 空值的处理函数]
		 * @param  {String} val  具体值
		 * @param  {String} type 类型如果传1表示原文输出，如果不传undefined null ''等情况处理成'--'
		 */
		nullValueFun:function(val,type){ //空值函数的处理
			if(type=='1') return val;
			if(typeof val == 'undefined' || typeof val == 'null' || val==='' || val===' ') return '--';
			return val;
		},
		judge: function(name,data,reg){
			//1.个参数的时候就是返回正则，2个参数的时候返回真假
			var _reg = {
				"NAME": /^[\u4e00-\u9fa5]{2,8}$/i,
				"MONEY": /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/,
				"SPACE": /[\s\p{Zs}]{0,}/,
				"PHONE": /^1(33|42|44|46|48|49|53|80|81|89|30|31|32|41|43|45|55|56|85|86|34|35|36|37|38|39|40|47|50|51|52|57|58|59|82|83|87|88|77|76|84|78|70|66|98|99)[0-9]{8}$/,
				"SIXNUM": /^\d{6}$/,
				"SIXNUM_changcheng": /^\w{1,16}$/,
				"SIXNUM_changcheng_ggqq": /^\w{6,8}$/,
				"ISSUING": /^[\u4e00-\u9fa5]{4,}/,
				"PASSWORD": /^\w{6}$/,
				"QQ": /^[1-9][0-9]{4,12}$/,
				"EMAIL": /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
				"BANKNUM": /^\d{16,19}$/,
				"TELNO": /^0\d{2,3}-?\d{7,8}-?(\d{1,6})?$/,
				"DATE": /^(?:(?:1[0-9]|[0-9]{2})[0-9]{2}([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:(?:1[6-9]|[2-9][0-9])(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)([-/.]?)0?2\2(?:29))$/,
				"HTMLTAG": /<[^>]*?>/g,
				"STOCKCODE":/(((002|000|300|900|200|399|400|420|430|899)[\d]{3})|60[\d]{4}|83[\d]{4})/g,
				"ISANDROID": (/android/i).test(app),
				"ISIOS": (/iphone|ipad/i).test(app),
				"ISPLAYBOOK": (/playbook/i).test(app),
				"ISTOUCHPAD": (/hp-tablet/i).test(app)
			};
			if(typeof reg != core_strundefined){
				TZT.extend(_reg,reg);
			}
			if(!(name in _reg)){
				alert('无相关正则');
				return;
			}
			if(typeof name != core_strundefined && typeof data != core_strundefined){
				return (_reg[name].test(data));
			}else{
				return _reg[name];
			}
		},
		islogin:function(){

		},
		//阻止事件冒泡函数
		stopBubble:function(e){
			if (e && e.stopPropagation)
				e.stopPropagation();
			else
				window.event.cancelBubble=true
		},
		readLocalMesg: function(sArray, fnSuccess){
			var sSendURL = "",
				oThis = this,
				isSlice=true;
			if(typeof sArray == 'string'){
				sSendURL = sArray;
			}else{
				for (var x = 0; x < sArray.length; x++) {
					if(sArray[x].indexOf('=')>0){
						sSendURL += sArray[x]+"&";
						isSlice = false;
					}else{
						sSendURL += sArray[x] + "=" + "&";
						isSlice = true;
					}
				}
				sSendURL = sSendURL.slice(0, -1);
			}
			var config = {
				newUrl:'/reqlocal?',
				fnSuccess:fnSuccess,
				tztWebdataEncrypt:1
			};
			TZT.tztWebdataEncrypt(config,sSendURL,'setDataEncrypt');
			// $.ajax({
			//     url: "/reqlocal?" + sSendURL,
			//     success: function(oData) {
			//         fnSuccess && fnSuccess(oData)
			//     }
			// })
		},
		saveMapMesg: function(obj, fnSuccess) {
			var sSendURL = "",
				oThis = this,
				isSlice=true;
			if(typeof obj == 'string'){
				sSendURL = obj;
			}else{
				for (var x in obj) {
					sSendURL += x +'='+encodeURI(obj[x])+'&'
				}
				sSendURL = sSendURL.slice(0, -1);
			}
			// $.ajax({
			//     type: "POST",
			//     url: "/reqsavemap?",
			//     data: obj,
			//     contentType: "application/x-www-form-urlencoded;",
			//     success: function(oData) {
			//         fnSccess && fnSccess(oData)
			//     }
			// })
			var config = {
				newUrl:'/reqsavemap?',
				fnSuccess:fnSuccess,
				tztWebdataEncrypt:1
			};
			TZT.tztWebdataEncrypt(config,sSendURL,'setDataEncrypt');
		},
		readMapMesg: function(sArray, fnSuccess) {
			var sSendURL = "",
				oThis = this;
			if(typeof sArray != 'string'){
				for (var x = 0; x < sArray.length; x++) {
					sSendURL += sArray[x] + "=" + "&"
				}
				sSendURL = sSendURL.slice(0, -1);
			}else{
				sSendURL = sArray;
			}
			// $.ajax({
			//     url: "/reqreadmap?" + sSendURL,
			//     success: function(oData) {
			//         fnSuccess && fnSuccess(oData)
			//     }
			// })
			var config = {
				newUrl:'/reqreadmap?',
				fnSuccess:fnSuccess,
				tztWebdataEncrypt:1
			};
			TZT.tztWebdataEncrypt(config,sSendURL,'setDataEncrypt');
		},
		saveFileMesg: function(saveMesg, fileName, fnSuccess) {
			var SAVEDATA = '';
			if(typeof saveMesg == 'string'){
				SAVEDATA = saveMesg;
			}else{
				SAVEDATA = JSON.stringify(saveMesg);
			}
			var sSendURL = "/reqsavefile?filename=" + fileName;
			// $.ajax({
			//     url: sSendURL,
			//     type: "POST",
			//     data: encodeURI(SAVEDATA),
			//     success: function(oData) {
			//         fnSuccess && fnSuccess(oData)
			//     }
			// })
			var config = {
				newUrl:sSendURL,
				fnSuccess:fnSuccess,
				tztWebdataEncrypt:1
			};
			TZT.tztWebdataEncrypt(config,encodeURI(SAVEDATA),'setDataEncrypt');
		},
		readFileMesg: function(fileName, fnSuccess) {
			var sSendURL = "/reqreadfile?filename=" + fileName;
			// $.ajax({
			//     url: sSendURL,
			//     success: function(oData) {
			//         fnSuccess && fnSuccess(oData);
			//     }
			// });
			var config = {
				newUrl:sSendURL,
				fnSuccess:fnSuccess,
				tztWebdataEncrypt:1
			};
			TZT.tztWebdataEncrypt(config,'','setDataEncrypt');
		},
		loadFileMesg: function(str, fnSuccess) {
			var sSendURL = "/reqloadfile?";
			if(typeof str == 'string'){
				sSendURL = sSendURL + str;
			}else{
				for(var t in str){
					sSendURL+=t+'='+str[t]+'&'
				}
				sSendURL = sSendURL.slice(0, -1);
			}
			// $.ajax({
			//     url: sSendURL,
			//     success: function(oData) {
			//         fnSuccess && fnSuccess(oData);
			//     }
			// });
			var config = {
				newUrl:sSendURL,
				fnSuccess:fnSuccess,
				tztWebdataEncrypt:1
			};
			TZT.tztWebdataEncrypt(config,'','setDataEncrypt');
		},
		reqsofttodo: function(obj, fnSuccess) {
			var sSendURL = "/reqsofttodo?";
			if(obj == ''){
				return;
			}
			if(typeof obj == 'string'){
				sSendURL = sSendURL + obj;
			}else{
				for (var x in obj) {
					sSendURL += x + "=" + obj[x] + "&"
				}
				sSendURL = sSendURL.slice(0, -1);
			}
			// $.ajax({
			//     url: sSendURL,
			//     success: function(oData) {
			//         fnSuccess && fnSuccess(oData);
			//     }
			// });
			var config = {
				newUrl:sSendURL,
				fnSuccess:fnSuccess,
				tztWebdataEncrypt:1
			};
			TZT.tztWebdataEncrypt(config,'','setDataEncrypt');
		},
		loadHtml:function(url, func){//加载网页
			var v = '';
			if(typeof config != 'undefined'){
				v = config.version;
			}else{
				v = '0.0.1';
			}
			$.ajax({
				url: url + "?v=" + v,
				type: "get",
				dataType: "html",
				headers:{acessfr0mtztwebv1ew:'acess-fr0m-andr0id-tzt-webv1ew'},
				beforeSend: function() {
				},
				success: function(data) {
					data ? func && func(data) : alert("请求html页面异常或者页面不存在！：" + url)
				},
				complete: function() {

				},
				error: function(data) {
					console.log(data);
					// alert(JSON.stringify(data));
					if(data.status == '200'||data.status == '0'){
						data.responseText ? func && func(data.responseText) : alert("请求html页面异常或者页面不存在！：" + url);
					}else{
						alert("请求html页面异常！：" +  url);
					}
				}
			})
		},
		getAccountList:function(fn,obj,type){
			var newArray = ['AccountList'];
			if(obj){
				for(var x in obj){
					if(obj[x] && obj[x] != ''){
						newArray.push(x+'='+obj[x]);
					}else{
						newArray.push(x);
					}
				}
			}
			T.readLocalMesg(newArray,function(oData){
				var acclist = [],
					account={};
				//兼容发包工具取出的ACCOUNTLIST，这样便于数据模拟
				if(oData.ACCOUNTLIST.indexOf('')>-1){
					acclist = oData.ACCOUNTLIST.replace(//g,'&').split('&');
				}else{
					acclist = oData.ACCOUNTLIST.replace(/\r\n/g,'&').split('&');
				}
				if(acclist){
					for(var i=0;i<acclist.length;i++){
						var list = acclist[i].split('|');
						if(list[0] && list[0]!= '' && list[2] && list[2] != ''){
							if(!(list[0] in account)){
								account[list[0]] = (type?list[type]:list[2]);
							}
						}
					}
				}
				fn && fn(account);
			});
		},
		// 两融账号登录得到的股东账号
		getRZRQAccountList:function(fn,obj,type){
			var newArray = ['AccountList', 'tokentype=1'];
			if(obj){
				for(var x in obj){
					if(obj[x] && obj[x] != ''){
						newArray.push(x+'='+obj[x]);
					}else{
						newArray.push(x);
					}
				}
			}
			T.readLocalMesg(newArray,function(oData){
				var acclist = [],
					account={};
				//兼容发包工具取出的ACCOUNTLIST，这样便于数据模拟
				if(oData.ACCOUNTLIST.indexOf('')>-1){
					acclist = oData.ACCOUNTLIST.replace(//g,'&').split('&');
				}else{
					acclist = oData.ACCOUNTLIST.replace(/\r\n/g,'&').split('&');
				}
				if(acclist){
					for(var i=0;i<acclist.length;i++){
						var list = acclist[i].split('|');
						if(list[0] && list[0]!= '' && list[2] && list[2] != ''){
							if(!(list[0] in account)){
								account[list[0]] = (type?list[type]:list[2]);
							}
						}
					}
				}
				fn && fn(account);
			});
		},
		getGGQQAccountList:function(fn){//20160115
			var newArray = ['tztGGQQ_WTAccountList','tokentype=8'];
			T.readLocalMesg(newArray,function(oData){
				var acclist = [],
					account={};
				//兼容发包工具取出的ACCOUNTLIST，这样便于数据模拟
				if(oData.TZTGGQQ_WTACCOUNTLIST.indexOf('')>-1){
					acclist = oData.TZTGGQQ_WTACCOUNTLIST.replace(//g,'&').split('&');
				}else{
					acclist = oData.TZTGGQQ_WTACCOUNTLIST.replace(/\r\n/g,'&').split('&');
				}
				if(acclist){
					for(var i=0;i<acclist.length;i++){
						var list = acclist[i].split('|');
						if(list[0] && list[0]!= '' && list[1] && list[1] != ''){
							if(!(list[0] in account)){
								account[list[0]] = list[1];
							}
						}
					}
				}
				fn && fn(account);
			});
		},
		filterCdata: function() {
			str.replace(new RegExp(/\>\<\!\[CDATA\[/g), "").replace(/\]\]/g, '"')
		},
		isundefind:function(a,b){
			return "undefined" == typeof a || "" === a ? b : a
		},
		trim:function(str) {
			var re = /(^\s*)|(^\r\n*)|(\r\n*$)|(\s*$)/g;
			return str.replace(re, '');
		},
		ajaxError: function(XMLHttpRequest, textStatus, errorThrown,fnErr) {
			var errorno = XMLHttpRequest.readyState;
			var oMessage = {
				"timeout": errorno+"请求超时",
				"error": errorno+"请求超时",
				"notmodified": errorno+"请求超时",
				"parsererror": errorno+"数据格式出错"
			};
			if(fnErr){
				fnErr();
				return;
			}
			// alert("errorno：" + errorno + "textStatus：" + textStatus);
			if(!textStatus && errorThrown){
				alert(errorThrown);
			}
			if(textStatus){
				switch (textStatus) {
					case "timeout":
						// alert(oMessage.timeout);
						break;
					case "parsererror":
						alert(oMessage.parsererror);
						break;
					default:
						break
				}
			}
		},
		getUrlParameter:function(parameterName,str){
			//获取url参数值
			var reg = new RegExp("(^|&|\\?)" + parameterName + "=([^&]*)(&|$)", "i"),arr,arr1;
			if(str){
				arr = str.match(reg);
				arr1 = str.match(reg);
			}else{
				arr = location.search.substr(1).match(reg);
				arr1 = location.hash.substr(2).match(reg);
			}

			if (arr) {
				return arr[2];
			}else if(arr1){
				return arr1[2];
			} else return null;
		},
		slippage:function(element,options){
			return new MyDropLoad(element, options);
		},
		skipPage:function(element,options) {
			return new MyScrollLoadPage(element, options);
		},
		styleTime:function(){
			return new chooseTime();
		},
		loadJs:function(a, b){//id,路径
			var c = document.getElementById(a),
				d = document.getElementsByTagName("head").item(0),
				e = document.createElement("script");
			c && d.removeChild(c), e.id = a, e.type = "text/javascript", e.src = b, d.appendChild(e)
		},
		loadCss:function (a, b) {
			var G = null;
			var c = [];
			a instanceof Array ? c = c.concat(a) : a && c.push(a);
			var link = $('link'),dfg = document.getElementsByTagName("head").item(0);
			for(var i=0;i<link.length;i++){
				if(c.indexOf($(link[i]).attr('href'))>=0){
					$(link[i]).remove();
				}
			}
			for (var d = 0, e = c.length; e > d; d++) {
				var f = document.createElement("link");
				f.charset = "utf-8", f.rel = "stylesheet", f.href = c[d], document.querySelector("head").appendChild(f)
				T.objunit[c[d]] = '';
			}
			//G && (clearTimeout(G), G = null), G = setTimeout(b, 100)
		},
		clearCss:function(){
			var link = $('link');
			for(var i=0;i<link.length;i++){
				var listLink = $(link[i]).attr('href');
				if(listLink in T.objunit){
					link.eq(i).remove();
				}
			}
			T.objunit={};
		},
		addCSS:function(cssText){
			/*
			 * 使用方法：addCSS('#demo{ height: 30px; background:#f00;}');
			 * */
			var style = document.createElement('style'),  //创建一个style元素
				head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
			style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
			if(style.styleSheet){ //IE
				var func = function(){
					try{ //防止IE中stylesheet数量超过限制而发生错误
						style.styleSheet.cssText = cssText;
					}catch(e){

					}
				};
				//如果当前styleSheet还不能用，则放到异步中则行
				if(style.styleSheet.disabled){
					setTimeout(func,10);
				}else{
					func();
				}
			}else{ //w3c
				//w3c浏览器中只要创建文本节点插入到style元素中就行了
				var textNode = document.createTextNode(cssText);
				style.appendChild(textNode);
			}
			head.appendChild(style); //把创建的style元素插入到head中
		},
		tipln:0,
		loadTips:function(obj){
			/*
			 * @url图片路径
			 * @img生成base64之后的数据
			 * @istip是否需要提示true打开false关闭
			 * */
			var config = {
				url:'',
				istip:false,
				img:'data:image/gif;base64,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'
			};

			T.extend(config,obj);
			var _ques_ldtipId = "_loadingTip", _ques_ldLocktipId = "_loadingCLock";
			var _loadingTip = document.getElementById(_ques_ldtipId);
			var _loadingCLock = document.getElementById(_ques_ldLocktipId);

			if(config.istip){
				showLoadingTip();
			}else{
				closeLoadingTip();
			}

			function showLoadingTip() {
				T.tipln++;
				if (!_loadingCLock) {
					_loadingCLock = document.createElement("div");
					_loadingCLock.id = _ques_ldLocktipId;
					_loadingCLock.setAttribute("style", "z-index:10;width:100%;height:100%;position:absolute;top:0;left:0;display:none;background-color:#2a2a2a;opacity:0.001;background-size:100% 100%;color:#fff;font-size:15px;-webkit-transform: translateZ(0);");
					document.body.appendChild(_loadingCLock);
				}
				if (!_loadingTip) {
					_loadingTip = document.createElement("div");
					_loadingTip.id = _ques_ldtipId;
					_loadingTip.setAttribute("style", 'z-index:100;width:215px;height:54px;line-height:64px;position:absolute;top:40%;left:50%;margin-left:-107px;display:none;text-align:center;');
					_loadingTip.innerHTML += "<img style='width:22px;height:22px;' src='"+config.img+"' /></div>";
					document.body.appendChild(_loadingTip);
					_loadingTip.addEventListener("click", function (e) {
						closeLoadingTip();
					});
				}
				document.getElementById(_ques_ldLocktipId).style.display = "block";
				document.getElementById(_ques_ldtipId).style.display = "block";
			}

			//关闭加载提示的方法
			function closeLoadingTip() {
				T.tipln--;
				if(T.tipln<=0 && _loadingTip){
					document.getElementById(_ques_ldLocktipId).style.display = "none";
					document.getElementById(_ques_ldtipId).style.display = "none";
				}

			}
		},
		convertImgToBase64:function(url, callback, outputFormat){
			//图片转成base格式
			/*目前只支持png和jpg
			 * @url图片地址
			 * @callback回调函数
			 * @outputFormat输出格式
			 * */
			var canvas = document.createElement('CANVAS');
			var ctx = canvas.getContext('2d');
			var img = new Image;
			img.crossOrigin = 'Anonymous';
			img.onload = function(){
				canvas.height = img.height;
				canvas.width = img.width;
				ctx.drawImage(img,0,0);
				var dataURL = canvas.toDataURL(outputFormat || 'image/png');
				callback.call(this, dataURL);
				// Clean up
				canvas = null;
			};
			img.src = url;
		},
		/**
		 * [attrUrl 一级页面跳转方法]
		 * @param  {Object} oDom [dom元素]
		 * @description 描述性说明
		 * data-url 直接按链接跳转
		 * data-acId 按元素功能
		 * data-href9 登录重新打开一个新的页面 需要登录的锁屏
		 * data-href 重新打开一个页面
		 * data-rzrqurl9 融资融券登录重新打开一个新的页面 需要登录的锁屏
		 */

		attrUrl:function(oDom){
			var jDom = oDom;
			$.each(jDom,function(index,obj){
				$(obj).unbind().on('click',function(){
					if($(obj).attr('data-url')!='' && typeof $(obj).attr('data-url')!='undefined'){
						var url = $(obj).attr('data-url');
						T.fn.changeurl(url);
					}else if($(obj).attr('data-acId')!='' && typeof $(obj).attr('data-acId')!='undefined'){
						var acId = $(obj).attr('data-acId').split('|');
						//var type = $(obj).attr('data-type') || '1';
						var traObj = {
							action:acId[0]
						};
						var isaction = true;
						if(acId.length>1){
							traObj.url = encodeURIComponent(acId[1]);
							if(acId[2]){
								traObj.datetype = acId[2];
							}
							if(acId[3]){
								traObj.title = encodeURIComponent(acId[3]);
							}
							if(acId[4]){
								traObj.stockcode = acId[4];
							}
							isaction = false;
						}
						T.fn.tradeaction(traObj);
					}else if($(obj).attr('data-href9')!='' && typeof $(obj).attr('data-href9')!='undefined'){
						T.fn.action10090({url:T.fn.action10061({url:$(obj).attr('data-href9'),isExport:true,tztlockscreen:$(obj).attr('data-lock')})})
					}else if($(obj).attr('data-href')!='' && typeof $(obj).attr('data-href')!='undefined'){
						T.fn.action10061({url:$(obj).attr('data-href')})
					}else if($(obj).attr('data-rzrqurl9')!='' && typeof $(obj).attr('data-rzrqurl9')!='undefined'){
						T.fn.action10090({url:T.fn.action10061({url:$(obj).attr('data-rzrqurl9'),isExport:true}),logintype:2})
					}
				})
			})
		},
		log:function(message,type){//error(message)：将错误消息记录到控制台、info(message)：将信息消息记录到控制台、log(message)：将一般消息记录到控制台、warn(message)：将警告消息记录到控制台
			if(typeof console == "object"){
				if(type){
					console[type](message);
				}else{
					console.log(message);
				}

			}else if(typeof opera == "object"){
				opera.postError(message);
			}else if(typeof java == "object" && typeof java.lang == "object"){
				java.lang.System.out.println(message);
			}
		},
		refresh:function(obj){
			/*
			 * @style 定制样式
			 * @bg 只定制图片
			 * @fn 回调函数
			 * */
			var config = {
				dom:'j_chicanglist',
				time:'300',
				bg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAnCAYAAABwtnr/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0ExNTRFRDQwMDVDMTFFNUFCQzdFOEM1RjMxMENGMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0ExNTRFRDUwMDVDMTFFNUFCQzdFOEM1RjMxMENGMzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTE1NEVEMjAwNUMxMUU1QUJDN0U4QzVGMzEwQ0YzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTE1NEVEMzAwNUMxMUU1QUJDN0U4QzVGMzEwQ0YzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po2SrKAAAAZYSURBVHjavFltTFNn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'
			};
			T.extend(config,obj);
			var aResh = [];
			aResh[0] = 'height: 36px;width: 36px;';
			aResh[1] = 'background:#4f4f4f url('+config.bg+') center center no-repeat;';
			aResh[2] = 'background-size: 23px 20px;';
			aResh[3] = 'position: fixed;right: 16px;';
			aResh[4] = 'bottom: 51px;';
			aResh[5] = 'opacity: 0.3;border-radius: 5px;z-index:999999;';
			var res = aResh.join('');
			if(typeof config['style'] != core_strundefined){
				res = config['style'];
			}
			resh = '<div class="newlist j_refresh" style="' + res + '"></div>';
			if($('.j_refresh').length>0){
				$('.j_refresh').remove();
			}
			$("body").append(resh);
			$(".j_refresh").on('click', function () {
				$("."+config.dom).animate({ scrollTop: "0" }, config.time, function () {
					/*listNamber = 0;
					 loadtype = pagecount;
					 loadData();*/
					config.fn && config.fn();
				});
			});
		},
		popupCreate:function(obj) {
			T.addCSS('.tc-cue{position:absolute; top:0; right:0; bottom:0; left:0; z-index:995; font-size:140%; line-height:1.5; color:#333;}.tc-cue .cue-bg{background:#000; opacity:.6; position:fixed; top:0; right:0; bottom:0; left:0; z-index:996;}.tc-cue .cue-main{border-radius: 3px; background:#fff; position:fixed;  z-index:999;left:3%;width:94%;}.tc-cue .cue-main.middle{top:40%;right:15px; left:15px;border:1px solid #d2d2d2;}.tc-cue .cue-main.bottom{bottom: 0;right: 0;left: 0;border-radius:0;top: initial;}.cue-main .cue-title{border-top-left-radius:3px;border-top-right-radius:3px;padding:5px; font-size:16px; font-weight:normal; text-align:center; line-height:24px; border-bottom:1px solid #ddd; color:#000;display: inline-block;vertical-align: middle;width: 100%;background:#ededed}.cue-main .cue-title span {display:block; width:18px; height:18px; float:right; background:url(/common/img/close.png) no-repeat; background-size:15px auto;}.cue-main .cue-cont{font-size:16px;padding:15px; text-align:center;}.cue-main .cue-cont table td {text-align:left; vertical-align:top;}.cue-cont .cue-txet{padding:5px 0; font-size:14px; line-height:14px; color:#303030;}.cue-cont .cue-list{padding:4px 0 4px 110px; position:relative;}.cue-list .cue-name{width:90px; margin:-7px 0 0; font-size:14px; text-align:right; line-height:14px; position:absolute; top:50%; left:0;}.cue-list .cue-val{min-height:20px; font-size:14px; line-height:20px;}.cue-main .cue-btn{padding:0 5px 10px; text-align:center;}.cue-btn p{width:100%; padding:0 5px; display:inline-block; text-align:center;}.cue-btn p a{padding:10px 0; font-size:16px;background:#cb2323; color:#fff; display:inline-block; text-align:center; width:45%; border-radius:3px; -webkit-border-radius:3px;font-size: 16px;}.cue-btn p a.cue-no{float:right; background:#0074c8; color:#fff;}.cue-loading { text-align: center; z-index: 997; } .cue-loading img {background:rgba(0,0,0,0.3); padding:5px; border-radius:3px; width:60px; }.tc-cue .inputItem{position: relative;height: 40px;line-height: 40px;margin-top: 5px;padding: 0;}.tc-cue .inputItem span{position: absolute;width: 60px;height: 40px;line-height: 40px;text-align: left;left: 0;top:2px;}.tc-cue .inputItem div{margin-left:55px;line-height: 45px;position: relative;}.tc-cue .inputItem div input{line-height:40px;width: 100%;background: #f5f5f5;color: #000;height: 40px;padding-left: 9px;}.tc-cue .cue-p{text-align: left;color: #848484;display: block;padding:10px 0 5px;}.tc-cue .cue-cont .cue-ch{display: inline-block;margin: 5px 0;text-align: left;width: 100%;}.tc-cue .cue-cont .cum-jtcont{display: inline-block;text-align: left;text-indent:24px;margin: 10px 0;}.cue-btn p a.all{width:100%;}.tc-cue .cue-main .tipIcon{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACLCAYAAABiDrezAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NUQwNTk2RUI1NTExRTVBMDcxQ0E2Qzk1MTNFREVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NUQwNTk3RUI1NTExRTVBMDcxQ0E2Qzk1MTNFREVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk1RDA1OTRFQjU1MTFFNUEwNzFDQTZDOTUxM0VERUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk1RDA1OTVFQjU1MTFFNUEwNzFDQTZDOTUxM0VERUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4TaafyAABY+UlEQVR42tR9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") no-repeat;background-size: 22px auto;display: inline-block;width: 22px;height: 30px;vertical-align: middle;text-align: center;margin-right: 30px;}.tc-cue .cue-main .closeIco{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDOEVFMDc2RUE4ODExRTVBQzU0ODExMjQ0OEU1NDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDOEVFMDc3RUE4ODExRTVBQzU0ODExMjQ0OEU1NDA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0M4RUUwNzRFQTg4MTFFNUFDNTQ4MTEyNDQ4RTU0MDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0M4RUUwNzVFQTg4MTFFNUFDNTQ4MTEyNDQ4RTU0MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7DlKcdAAABA0lEQVR42qzWsQrCMBAG4HoU30fwJRQUcRBXfYVuFRdRnPoA3VyLgjoU38IH6uQdRAghae6aC/wdLqUf5Zqjo7quM1wHzBfzyfTXArPDbHO8HDEnTIdZKYMEPTBjTAPmjTpTeGFmStDSguj5N8JazFoZJOhuQRvMG8ymJuiFaAOsmzTAIORiqWAv5MOGglEohElBFtSHcUE2FMNioAjiYCHwIoW4mA8spZAE+4OVU6u4kBSjHhVOrZAcfBh4YK9OD+damO+rK50ePjkgJEyGVgpC4ggSgZA6giQgJEIiEBQgNghKEAsERSgKgjLUCxK2V4ZC4DQ3QEP/dYqQC04w558AAwDZ1o/FEGT9jgAAAABJRU5ErkJggg==") no-repeat;display: inline-block;width: 15px;background-size: 15px auto;height: 15px;position: absolute;top:10px;right: 15px;}.tc-cue .cue-main .cue-item{position: relative;display: inline-block;width: 100%;padding: 2px 0 2px 140px;text-align: left;font-size: 14px;line-height: 16px;}.tc-cue .cue-main .cue-item span{display: inline-block;position: absolute;top: 2px;left: 0;width: 130px;text-align: right;word-wrap: break-word;word-break: normal;white-space: normal;line-height: 16px;}');
			var setting = {
				title: '系统提示',
				cont: '提示内容',
				cueYes: '确定',
				cueNo: '取消',
				sClass: 'duihao', //默认是弹窗
				yesBtn: function() {}, //点击确认
				noBtn: function() {}, //点击取消
				yesNone: true, //点击确认时关闭窗口
				noNone: true, //点击取消时关闭窗口
				loadText: '',
				isHiddenYes: false, //是否隐藏确认按钮
				isHiddenNo: false, //是否隐藏取消按钮
				isShowClose: true, //是否显示右上角的查查图标
				closeBtn: '', //关闭回调函数
				isHtml: false, //传进来的是否html
				addCss: '',
				titleShow:true,
			};
			if (typeof obj == 'string') {
				setting.cont = obj;
				setting.yesNone = true;
				setting.isHiddenNo = true;
			} else if (typeof obj == 'object') {
				setting = $.extend(setting, obj);
			}
			if ($(".tc-cue")[0]) {
				if (setting.sClass == "loading") {
					if ($(".tc-cue .cue-main")[0]) {
						$(".tc-cue .cue-main").remove();
						DrawLoading();
					}
				} else {
					if ($(".tc-cue .cue-loading")[0])
						$(".tc-cue .cue-loading").remove();
					else
						$(".tc-cue .cue-main").remove();
					DrawCont();
				}
			} else {
				$("body").append("<div class=\"tc-cue\"><div class=\"cue-bg\"></div></div>");
				if (setting.sClass == "loading") {
					DrawLoading();
				} else {
					DrawCont();
				}
			}
			function DrawCont() {
				switch (setting.sClass) {
					case "loading":
						DrawLoading();
						break;
					case "duihao":
						sHtml = '<div class="cue-main ' + (setting['addCss'] != '' ? setting['addCss'] : '') + '">';
						sHtml += !!setting.titleShow?('<h2 class="cue-title" '+(!!setting.cuetitleStyle?('style="'+setting.cuetitleStyle+'"'):'')+'>'+(!!setting.tipIconShow?'<i class="tipIcon"></i>':'') + setting['title'] + (!!setting['isShowClose'] ? '<em class="closeIco"></em>' : '')+'</h2>'):'';
						sHtml += '<div class="cue-cont" '+(!!setting.cuecontStyle?('style="'+setting.cuecontStyle+'"'):'')+'>' + setting['cont'] + '</div><div class="cue-btn"><p>';
						if (!setting.isHiddenYes) {
							sHtml += '<a href="javascript:;" class="cue-yes">' + setting['cueYes'] + '</a>';
						}
						if (!setting.isHiddenNo) {
							sHtml += '<a href="javascript:;" class="cue-no">' + setting['cueNo'] + '</a>';
						}
						sHtml += '</p></div>';
						$(".tc-cue .cue-bg").after(sHtml);
						$(".tc-cue .cue-bg").css("opacity", "0.4");
						var nHeightAll = (document.body.clientHeight > $(window).height()) ? document.body.clientHeight : $(window).height();
						var nHeightCon = $('.tc-cue .cue-cont').outerHeight(true);
						!!setting.isYesAll?$('.tc-cue .cue-yes').addClass('all'):''; //按钮全部展示
						// if (nHeightCon > (nHeightAll - 280)) {
						//     !!setting.marginTop&&setting.marginTop=='none'?'':$('.tc-cue .cue-cont').css('height', nHeightAll - 280);
						//     !!setting.marginTop&&setting.marginTop=='none'?'':$('.tc-cue .cue-cont').css('overflow', 'scroll');
						// }
						if(!!setting.ifShowAll){
							$('.tc-cue .cue-main').css('top',((nHeightAll-$('.tc-cue .cue-main').outerHeight(true))/2+'px'));
						}else{
							!!setting.marginTop&&setting.marginTop=='none'?'':($('.tc-cue .cue-main').css('top', '30%'));
						}
						setting.dateEvent && setting.dateEvent(); //日期控件初始化
						$('.cue-yes').on('click', function() {
							!obj.yesBtn ? setting.yesBtn : obj.yesBtn();
							if (setting.yesNone == true) {
								$('.tc-cue').remove();
							}
						});
						$('.cue-no').on('click', function() {
							!obj.noBtn ? setting.noBtn() : obj.noBtn();
							//!obj.noNone ? setting.noNone = true : setting.noNone = false;
							if (setting.noNone == true) {
								$('.tc-cue').remove();
							}
						});
						setting.closeBtn=function(){
							$('.cue-main,.cue-bg,.tc-cue').remove();
							//location.reload();
						}
						//定义叉点击事件
						if (typeof setting['closeBtn'] == 'function') {
							$('.cue-main .closeIco').unbind().on('click', function() {
								setting.closeBtn && setting.closeBtn();
							})
						}
						!!setting.fnFinally && setting.fnFinally();
						break;
				}
			}
			function DrawLoading() {
				sHtml = "<div class=\"cue-loading\"><img src=\"data:image/gif;base64,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\"/ style=\"background-size:46px 46px;width:46px;height:46px;\"><span style=\"display: block;width: 100%;font-size: 20px;margin-top:10px;color:#3C3C3C;\" id=\"cont_text\">" + setting.loadText + "</span></div>"
				$(".tc-cue .cue-bg").after(sHtml);
				var nHeightAll = (document.body.clientHeight > $(window).height()) ? document.body.clientHeight : $(window).height();
				$(".tc-cue .cue-loading").css("margin-top", (nHeightAll - 126) / 2 + "px");
			};
		},
		popupDestroy:function() {
			if ($(".tc-cue")[0]) $(".tc-cue").remove();
			return true;
		},
		alertBox:function(note,fn){
			var _this = this;
			_this.popupCreate({title:'温馨提示',cont:'<div>'+note+'</div>',cueYes:'确定',isHiddenNo:true,yesNone:false,yesBtn:function(){
				fn && _this.popupDestroy() && fn();
			}});
		},
		/*
		* @name arg {string} 盒子ID
		*/
		noBarsOnTouchScreen:function(arg){ //兼容安卓2.3版本，可以滑动
			var index = navigator.appVersion.indexOf("Android");
			if(index >= 0){
				if (navigator.appVersion.substr(index + 8, 3) > 2.3){
					return;
				};
			}else{
				return;
			};
			var elem, tx, ty;
			if ("ontouchstart" in document.documentElement) {
				if (elem = document.getElementById(arg)) {
					elem.style.overflow = "hidden";
					elem.ontouchstart = ts;
					elem.ontouchmove = tm
				};
			};

			function ts(e){
				var tch;
				if(e.touches.length == 1){
					e.stopPropagation();
					tch = e.touches[0];
					tx = tch.pageX;
					ty = tch.pageY
				};
			};

			function tm(e){
				var tch;
				if(e.touches.length == 1){
					e.preventDefault();
					e.stopPropagation();
					tch = e.touches[0];
					this.scrollTop += ty - tch.pageY;
					ty = tch.pageY
				};
			}
		}
	});
	var MyDropLoad = function(element, options){
		var me = this;
		me.$element = $(element);
		me.insertDOM = false;
		me.loading = false;
		me.isLock = false;
		me.init(options);
		me.$element.parent().css({'position':'absolute','left':'0','top':'0','width':'100%','height':'100%','display':'-webkit-box','display':'-webkit-flex','display':'-ms-flexbox','display':'flex','-ms-flex-direction':'column','-webkit-box-orient':'vertical','box-orient':'vertical','-webkit-flex-direction':'column','flex-direction':'column'});
		TZT.addCSS('.dropload-down,.dropload-up{position:relative;height:0;overflow:hidden;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.dropload-load,.dropload-refresh,.dropload-update{position:absolute;left:50%;bottom:0;width:100%;height:50px;line-height:50px;text-align:center;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.dropload-load .loading{display:inline-block;height:15px;width:15px;border-radius:100%;margin:6px;border:2px solid #666;border-bottom-color:transparent;vertical-align:middle;-webkit-animation:rotate .75s 0 linear infinite;animation:rotate .75s 0 linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0)}50%{-webkit-transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}');
	};

	// 初始化
	MyDropLoad.prototype.init = function(options){
		var me = this;
		me.opts = $.extend({}, {
			domUp : {                                                            // 上方DOM
				domClass   : 'dropload-up',
				domRefresh : '<div class="dropload-refresh">↓'+(!!options.upText?options.upText:'下拉刷新')+'</div>',
				domUpdate  : '<div class="dropload-update">↑'+(!!options.upSfText?options.upSfText:'释放更新')+'</div>',
				domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
			},
			domDown : {                                                          // 下方DOM
				domClass   : 'dropload-down',
				domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
				domUpdate  : '<div class="dropload-update">↓释放加载</div>',
				domLoad    : '<div class="dropload-load">○加载中...</div>'
			},
			distance : 50,                                                       // 拉动距离
			loadUpFn : '',                                                       // 上方function
			loadDownFn : ''                                                      // 下方function
		}, options);

		// 绑定触摸
		me.$element.on('touchstart',function(e){
			if(!me.loading && !me.isLock){
				me.fnTouches(e);
				me.fnTouchstart(e, me);
			}
		});
		me.$element.on('touchmove',function(e){
			if(!me.loading && !me.isLock){
				me.fnTouches(e, me);
				me.fnTouchmove(e, me);
			}
		});
		me.$element.on('touchend',function(){
			if(!me.loading && !me.isLock){
				me.fnTouchend(me);
			}
		});
	};

	// touches
	MyDropLoad.prototype.fnTouches = function(e){
		if(!e.touches){
			e.touches = e.originalEvent.touches;
		}
	};

	// touchstart
	MyDropLoad.prototype.fnTouchstart = function(e, me){
		me._startY = e.touches[0].pageY;
		me._loadHeight = me.$element.height();
		me._childrenHeight = me.$element.children().height();
		if(me.$element.children().size()>1){
			var aTDoms = me.$element.children();
			for(var i=0,len=aTDoms.length;i<len;i++){
				var sDisplay = aTDoms.eq(i).css('display');
				if(sDisplay!='none') me._childrenHeight = aTDoms.eq(i).height();
			}
		}
		console.log(me._childrenHeight);
		me._scrollTop = me.$element.scrollTop();
		me._Top = me.$element.parent().parent().position().top;
	};

	// touchmove
	MyDropLoad.prototype.fnTouchmove = function(e, me){
		me._curY = e.touches[0].pageY;
		me._moveY = me._curY - me._startY;

		if(me._moveY > 0){
			me.direction = 'down';
		}else if(me._moveY < 0){
			me.direction = 'up';
		}

		var _absMoveY = Math.abs(me._moveY);

		// 加载上方
		if(me.opts.loadUpFn != '' && me._scrollTop <= 0 && me.direction == 'down'){
			e.preventDefault();
			if(!me.insertDOM){
				me.$element.prepend('<div class="'+me.opts.domUp.domClass+'"></div>');
				me.insertDOM = true;
			}

			me.$domUp = $('.'+me.opts.domUp.domClass);
			me.fnTransition(me.$domUp,0);

			// 下拉
			if(_absMoveY <= me.opts.distance){
				me._offsetY = _absMoveY;
				me.$domUp.html('').append(me.opts.domUp.domRefresh);
				// 指定距离 < 下拉距离 < 指定距离*2
			}else if(_absMoveY > me.opts.distance && _absMoveY <= me.opts.distance*2){
				me._offsetY = me.opts.distance+(_absMoveY-me.opts.distance)*0.5;
				me.$domUp.html('').append(me.opts.domUp.domUpdate);
				// 下拉距离 > 指定距离*2
			}else{
				me._offsetY = me.opts.distance+me.opts.distance*0.5+(_absMoveY-me.opts.distance*2)*0.2;
			}
			//console.log(me._curY);
			me.$domUp.css({'height': me._offsetY});
			if(me._curY>=me._loadHeight){
				if(!me.loading && !me.isLock){
					me.fnTouchend(me);
				}
			}
		}

		// 加载下方
		if(me.opts.loadDownFn != '' && me._childrenHeight <= (me._loadHeight+me._scrollTop) && me.direction == 'up'){
			e.preventDefault();
			if(!me.insertDOM){
				me.$element.append('<div class="'+me.opts.domDown.domClass+'"></div>');
				me.insertDOM = true;
			}

			me.$domDown = $('.'+me.opts.domDown.domClass);
			me.fnTransition(me.$domDown,0);

			// 上拉
			if(_absMoveY <= me.opts.distance){
				me._offsetY = _absMoveY;
				me.$domDown.html('').append(me.opts.domDown.domRefresh);
				// 指定距离 < 上拉距离 < 指定距离*2
			}else if(_absMoveY > me.opts.distance && _absMoveY <= me.opts.distance*2){
				me._offsetY = me.opts.distance+(_absMoveY-me.opts.distance)*0.5;
				me.$domDown.html('').append(me.opts.domDown.domUpdate);
				// 上拉距离 > 指定距离*2
			}else{
				me._offsetY = me.opts.distance+me.opts.distance*0.5+(_absMoveY-me.opts.distance*2)*0.2;
			}

			me.$domDown.css({'height': me._offsetY});
			me.$element.scrollTop(me._offsetY+me._scrollTop);
			//console.log(me._curY);
			if(me._curY<=me._Top){
				if(!me.loading && !me.isLock){
					me.fnTouchend(me);
				}
			}
		}
	};

	// touchend
	MyDropLoad.prototype.fnTouchend = function(me){
		var _absMoveY = Math.abs(me._moveY);
		if(me.insertDOM){
			if(me.direction == 'down'){
				me.$domResult = me.$domUp;
				me.domLoad = me.opts.domUp.domLoad;
			}else if(me.direction == 'up'){
				me.$domResult = me.$domDown;
				me.domLoad = me.opts.domDown.domLoad;
			}

			me.fnTransition(me.$domResult,300);

			if(_absMoveY > me.opts.distance){
				me.$domResult.css({'height':me.$domResult.children().height()});
				me.$domResult.html('').append(me.domLoad);
				me.fnCallback(me);
			}else{
				var called = false;
				if(me.$domResult && me.$domResult.size()>=1){
					me.$domResult.css({'height':'0'}).on('webkitTransitionEnd',function(){
						called = true;
						me.insertDOM = false;
						$(this).remove();
					});
					setTimeout(function(){
						if(!called) me.$domResult.trigger('webkitTransitionEnd'); //触发该事件
					},300);
				}
			}
			me._moveY = 0;
		}
	};

	// 回调
	MyDropLoad.prototype.fnCallback = function(me){
		me.loading = true;
		if(me.opts.loadUpFn != '' && me.direction == 'down'){
			me.opts.loadUpFn(me);
		}else if(me.opts.loadDownFn != '' && me.direction == 'up'){
			me.opts.loadDownFn(me);
		}
	};

	// 锁定
	MyDropLoad.prototype.lock = function(){
		var me = this;
		me.isLock = true;
	};

	// 解锁
	MyDropLoad.prototype.unlock = function(){
		var me = this;
		me.isLock = false;
	};

	// 重置
	MyDropLoad.prototype.resetload = function(){
		var me = this,called = false;
		if(!!me.$domResult){
			me.$domResult.css({'height':'0'}).on('webkitTransitionEnd',function(){
				called = true;
				me.loading = false;
				me.insertDOM = false;
				$(this).remove();
			});
			setTimeout(function(){
				if(!called) me.$domResult.trigger('webkitTransitionEnd'); //触发该事件
			},300);
		}
	};

	// css过渡
	MyDropLoad.prototype.fnTransition=function(dom,num){
		!!dom && dom.css({
			'-webkit-transition':'all '+num+'ms',
			'transition':'all '+num+'ms'
		});
	};

	var MyScrollLoadPage = function(element, options){
		var my = this;
		my.$element = $(element);
		my.insertDOM = false;
		my.loading = false;
		my.isLock = false;
		my.init(options);
		my.$element.parent().css({'position':'absolute','left':'0','top':'0','width':'100%','height':'100%','display':'-webkit-box','display':'-webkit-flex','display':'-ms-flexbox','display':'flex','-ms-flex-direction':'column','-webkit-box-orient':'vertical','box-orient':'vertical','-webkit-flex-direction':'column','flex-direction':'column'});
		TZT.addCSS('.dropload-down,.dropload-up{position:relative;height:0;overflow:hidden;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.dropload-load,.dropload-refresh,.dropload-update{position:absolute;left:50%;bottom:0;width:100%;height:50px;line-height:50px;text-align:center;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.dropload-load .loading{display:inline-block;height:15px;width:15px;border-radius:100%;margin:6px;border:2px solid #666;border-bottom-color:transparent;vertical-align:middle;-webkit-animation:rotate .75s 0 linear infinite;animation:rotate .75s 0 linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0)}50%{-webkit-transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}');
	};

	// 初始化
	MyScrollLoadPage.prototype.init = function(options){
		var my = this;
		my.opts = $.extend({}, {
			domUp : {                                                            // 上方DOM
				domClass   : 'dropload-up',
				domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
				domUpdate  : '<div class="dropload-update">↑释放更新</div>',
				domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
			},
			domDown : {                                                          // 下方DOM
				domClass   : 'dropload-down',
				domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
				domUpdate  : '<div class="dropload-update">↓释放加载</div>',
				domLoad    : '<div class="dropload-load">○加载中...</div>'
			},
			distance : 50,                                                       // 拉动距离
			loadUpFn : '',                                                       // 上方function
			loadDownFn : ''                                                      // 下方function
		}, options);

		// 绑定触摸
		my.$element.on('touchstart',function(e){
			if(!my.loading && !my.isLock){
				my.fnTouches(e);
				my.fnTouchstart(e, my);
			}
		});
		my.$element.on('touchmove',function(e){
			if(!my.loading && !my.isLock){
				my.fnTouches(e, my);
				my.fnTouchmove(e, my);
			}
		});
		my.$element.on('touchend',function(){
			if(!my.loading && !my.isLock){
				my.fnTouchend(my);
			}
		});
	};

	// touches
	MyScrollLoadPage.prototype.fnTouches = function(e){
		if(!e.touches){
			e.touches = e.originalEvent.touches;
		}
	};

	// touchstart
	MyScrollLoadPage.prototype.fnTouchstart = function(e, my){
		my._startY = e.touches[0].pageY;
		my._loadHeight = my.$element.height();
		//console.log(me._loadHeight);
		my._childrenHeight = my.$element.children().height();
		my._scrollTop = my.$element.scrollTop();
		my._Top = my.$element.parent().parent().position().top;
	};

	// touchmove
	MyScrollLoadPage.prototype.fnTouchmove = function(e, my){
		my._curY = e.touches[0].pageY;
		my._moveY =my._curY - my._startY;

		if(my._moveY > 0){
			my.direction = 'down';
		}else if(my._moveY < 0){
			my.direction = 'up';
		}

		var _absMoveY = Math.abs(my._moveY);

		// 加载上方
		if(my.opts.loadUpFn != '' && my._scrollTop <= 0 && my.direction == 'down'){
			e.preventDefault();
			if(!my.insertDOM){
				my.$element.prepend('<div class="'+my.opts.domUp.domClass+'"></div>');
				my.insertDOM = true;
			}

			my.$domUp = $('.'+my.opts.domUp.domClass);
			my.fnTransition(my.$domUp,0);

			// 下拉
			if(_absMoveY <= my.opts.distance){
				my._offsetY = _absMoveY;
				my.$domUp.html('').append(my.opts.domUp.domRefresh);
				// 指定距离 < 下拉距离 < 指定距离*2
			}else if(_absMoveY > my.opts.distance && _absMoveY <= my.opts.distance*2){
				my._offsetY = my.opts.distance+(_absMoveY-my.opts.distance)*0.5;
				my.$domUp.html('').append(my.opts.domUp.domUpdate);
				// 下拉距离 > 指定距离*2
			}else{
				my._offsetY =my.opts.distance+my.opts.distance*0.5+(_absMoveY-my.opts.distance*2)*0.2;
			}
			//console.log(me._curY);
			my.$domUp.css({'height': my._offsetY});
			if(my._curY>=my._loadHeight){
				if(!my.loading && !my.isLock){
					my.fnTouchend(my);
				}
			}
		}
		// 加载下方
		if(my.opts.loadDownFn != '' && (my.$element.children().length*my.$element.children().height() - my._loadHeight) <= my._scrollTop && (my.$element.children().length%20 == 0)  && my.direction == 'up'){
			e.preventDefault();
			if(!my.insertDOM){
				my.$element.append('<div class="'+my.opts.domDown.domClass+'"></div>');
				my.insertDOM = true;
			}

			my.$domDown = $('.'+my.opts.domDown.domClass);
			my.fnTransition(my.$domDown,0);

			// 上拉
			if(_absMoveY <= my.opts.distance){
				my._offsetY = _absMoveY;
				my.$domDown.html('').append(my.opts.domDown.domRefresh);
				// 指定距离 < 上拉距离 < 指定距离*2
			}else if(_absMoveY > my.opts.distance && _absMoveY <= my.opts.distance*2){
				my._offsetY = my.opts.distance+(_absMoveY-my.opts.distance)*0.5;
				my.$domDown.html('').append(my.opts.domDown.domUpdate);
				// 上拉距离 > 指定距离*2
			}else{
				my._offsetY = my.opts.distance+my.opts.distance*0.5+(_absMoveY-my.opts.distance*2)*0.2;
			}

			my.$domDown.css({'height': my._offsetY});
			my.$element.scrollTop(my._offsetY+my._scrollTop);
			//console.log(me._curY);
			if(my._curY<=my._Top){
				if(!my.loading && !my.isLock){
					my.fnTouchend(my);
				}
			}
		}
	};

	// touchend
	MyScrollLoadPage.prototype.fnTouchend = function(my){
		var _absMoveY = Math.abs(my._moveY);
		if(my.insertDOM){
			if(my.direction == 'down'){
				my.$domResult = my.$domUp;
				my.domLoad = my.opts.domUp.domLoad;
			}else if(my.direction == 'up'){
				my.$domResult = my.$domDown;
				my.domLoad = my.opts.domDown.domLoad;
			}

			my.fnTransition(my.$domResult,300);

			if(_absMoveY > my.opts.distance){
				my.$domResult.css({'height':my.$domResult.children().height()});
				my.$domResult.html('').append(my.domLoad);
				my.fnCallback(my);
			}else{
				my.$domResult.css({'height':'0'}).on('webkitTransitionEnd',function(){
					my.insertDOM = false;
					$(this).remove();
				});
			}
			my._moveY = 0;
		}
	};

	// 回调
	MyScrollLoadPage.prototype.fnCallback = function(my){
		my.loading = true;
		if(my.opts.loadUpFn != '' && my.direction == 'down'){
			my.opts.loadUpFn(my);
		}else if(my.opts.loadDownFn != '' && my.direction == 'up'){
			my.opts.loadDownFn(my);
		}
	};

	// 锁定
	MyScrollLoadPage.prototype.lock = function(){
		var my = this;
		my.isLock = true;
	};

	// 解锁
	MyScrollLoadPage.prototype.unlock = function(){
		var my = this;
		my.isLock = false;
	};

	// 重置
	MyScrollLoadPage.prototype.resetload = function(){
		var my = this;
		if(!!my.$domResult){
			var timeOut = setTimeout(function(){
				if(my.loading != false){
					my.loading = false;
					my.insertDOM = false;
					$(this).remove();
				}
				clearTimeout(timeOut);
			},400);
			my.$domResult.css({'height':'0'}).on('webkitTransitionEnd',function(){
				my.loading = false;
				my.insertDOM = false;
				$(this).remove();
			});
		}
	};

	// css过渡
	MyScrollLoadPage.prototype.fnTransition=function(dom,num){
		!!dom && dom.css({
			'-webkit-transition':'all '+num+'ms',
			'transition':'all '+num+'ms'
		});
	};
	var chooseTime = function(){

	};
	chooseTime.prototype = {
		manyDays: function(n,sDate) {//当天往后加减n天，比如当天是20140915 n=3 20140918
			var d = new Date,days,dd;
			if(typeof sDate == 'string'){
				sDate = sDate.replace(/-/g,'');
				d = new Date(sDate.substr(0,4),sDate.substr(4,2)-1,sDate.substr(6,2),'00','00','00');
			}else if(typeof sDate == 'object'){
				d = sDate;
			}
			dd = d.setDate(d.getDate() + n);
			return this.strTodate(dd)
		},
		manyMonths: function(n,sDate) {//当天往后加减n月，比如当天是20140915 n=3
			var d = new Date,days,dd;
			if(typeof sDate == 'string'){
				sDate = sDate.replace(/-/g,'');
				d = new Date(sDate.substr(0,4),sDate.substr(4,2)-1,sDate.substr(6,2),'00','00','00');
			}else if(typeof sDate == 'object'){
				d = sDate;
			}
			dd = d.setMonth(d.getMonth() + n);
			return this.strTodate(dd)
		},
		manyYears: function(n,sDate) {//当天往后加减n年，比如当天是20140915 n=3
			var d = new Date,days,dd;
			if(typeof sDate == 'string'){
				sDate = sDate.replace(/-/g,'');
				d = new Date(sDate.substr(0,4),sDate.substr(4,2)-1,sDate.substr(6,2),'00','00','00');
			}else if(typeof sDate == 'object'){
				d = sDate;
			}
			dd = d.setYear(d.getFullYear() + n);
			return this.strTodate(dd)
		},
		strTodate: function(str) {//
			var startyear = 1970;
			var startmonth = 1;
			var startday = 1;
			var d, s, st;
			var sep = ":";
			d = new Date();
			d.setFullYear(startyear, startmonth, startday);
			d.setTime(0);
			d.setMilliseconds(str);
			s = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
			st = s.replace(/-$/, "").replace(/\b(\w)\b/g, "0$1").replace(/-/g, "");
			return st
		},
		getMonthBefor: function(n,newdate) {//获取前后几个月的日期，n=3,返回20141215
			var resultDate, yy, mm, dd;
			var currDate = new Date();
			yy = currDate.getFullYear();
			mm = currDate.getMonth() + 1;
			dd = currDate.getDate();
			if(newdate && newdate.length == 8) {
				newdate = newdate.toString();
				yy = parseInt(newdate.slice(0,4));
				mm = parseInt(newdate.slice(4,6));
				dd = parseInt(newdate.slice(6,8));
			}
			var dt=new Date(yy+'/'+mm+'/'+dd);

			var mm_y = dt.getFullYear();
			var mm_m = dt.getMonth()+n;

			dt.setMonth(mm_m);
			var year = dt.getFullYear();
			var m = dt.getMonth()+1;
			var month = (m < 10) ? ("0" + m) : m;
			var days = (dt.getDate() < 10) ? ("0" + dt.getDate()) : dt.getDate();
			resultDate = year+String(month)+days;
			return resultDate
		},
		aDays: function(n, sDate) {//n=3返回前后三天数组[20140915,20140916,20140917]
			var arrays = [],
				i = 1,
				num = Math.abs(n);
			if (n > 0) {
				for (i; i <= num; i++) {
					arrays.push(this.manyDays(i, sDate))
				}
			} else {
				for (i; i <= num; i++) {
					arrays.push(this.manyDays(-i, sDate))
				}
			}
			return arrays
		},
		getYTD: function(n) {//20140915转换2014年09月15日
			var year = n.substr(0, 4),
				months = n.substr(4, 2),
				days = n.substr(6);
			return year + "年" + months + "月" + days + "日"
		},
		getYTDS: function(n) {//20140915转换2014-09月-日
			var year = n.substr(0, 4),
				months = n.substr(4, 2),
				days = n.substr(6);
			return year + "-" + months + "-" + days
		},
		DateDiff:function(sDate1,  sDate2){    //sDate1和sDate2是2002-12-18格式 时间相差多少天
			var  aDate,  oDate1,  oDate2,  iDays;
			var now = new Date();
			if(!sDate1){
				sDate1 = this.dayChange(now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate());
			}
			if(sDate1.indexOf('-')<0){
				sDate1 = this.getYTDS(sDate1);
			}
			if(!sDate2){
				sDate2 = this.dayChange(now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate());
			}
			if(sDate2.indexOf('-')<0){
				sDate2 = this.getYTDS(sDate2);
			}
			aDate  =  sDate1.split("-");
			oDate1  =  (new  Date(aDate[0]  +  '/'  +  aDate[1]  +  '/'  +  aDate[2])).getTime() ;   //转换为12-18-2002格式
			aDate  =  sDate2.split("-");
			oDate2  =  (new  Date(aDate[0]  +  '/'  +  aDate[1]  +  '/'  +  aDate[2])).getTime();
			iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24);    //把相差的毫秒数转换为天数
			return  iDays
		},
		dayChange:function(yymmdd){//yyyy-mm-dd 转换成 yyyymmdd
			var days = yymmdd.split('-');
			if(days.length>1){
				return days[0]+(days[1]<=9 ? '0'+parseFloat(days[1]) : days[1])+(days[2]<=9 ? '0'+parseFloat(days[2]) : days[2])
			}else{
				return yymmdd;
			}
		},
		getDay:function(date){//根据日期返回周几
			var now = new Date();
			if(date == 'now'){
				date = this.dayChange(now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate());
			}
			var dateg = this.getYTDS(date);
			var ndate = dateg.split('-');
			if(ndate.length>1){
				var weekday=new Array(7);
				weekday[0]="日";
				weekday[1]="一";
				weekday[2]="二";
				weekday[3]="三";
				weekday[4]="四";
				weekday[5]="五";
				weekday[6]="六";
				if(ndate.length == '2'){ndate = ndate.unshift('');}

				var nowYear = ndate[0]==''?now.getFullYear():ndate[0];
				var time= nowYear +'/'+ndate[1]+'/'+ndate[2];
				var ssdate = new Date(time);//2014,05,11
				var index = ssdate.getDay();
				if(weekday[index] != undefined){
					return '周'+weekday[index] ;
				}else{
					return '';
				}
			}else{
				return '';
			}
		}
	};
	var loadXML = function(xmlString) {
		//加载xml
		var xmlDoc;
		if (window.ActiveXObject) {
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			if (!xmlDoc) {
				xmldoc = new ActiveXObject("MSXML2.DOMDocument.3.0")
			}
			xmlDoc.async = false;
			xmlDoc.loadXML(xmlString)
		} else {
			if (document.implementation && document.implementation.createDocument) {
				var domParser = new DOMParser();
				xmlDoc = domParser.parseFromString(xmlString, "text/xml")
			} else {
				return null
			}
		}
		return xmlDoc
	};
	TZT.extend({
		xmlattr: function(sXml, node, attr){
			//单个节点属性的值
			// <step inteval="182" interest_rate="0.11%"/>
			// 取inteval的值
			var aGetnode = [],
				data = loadXML(sXml),
				nodes = data.getElementsByTagName(node),
				ln = nodes.length;
			for (var i = 0; i < ln; i++) {
				aGetnode.push(nodes[i].getAttribute(attr))
			}
			return aGetnode
		},
		allAttributes: function(sXml, node, names) {
			//把所有的属性都返回
			/*
			 *<response>
			 <flag code="0" msg="success"/>
			 <procuctList>
			 <product procuctCode="000001" procuctTACode="" recommendReason1="推荐理由1" recommendReason2="推荐理由2" recommendReason3="推荐理由3" recommendReason4="推荐理由4" yieldDesc="年化收益率" annualYield="5.7%" yieldValue="年化收益率5.7%" extend1="extend1" extend2="extend2" extend3="extend3" extend4="extend4"/>
			 </procuctList>
			 </response>
			 *
			 * @sXml是xml
			 * @node节点 product
			 * @names == procuctCode
			 * 返回000001:{
			 annualYield: "5.7%"
			 extend1: "extend1"
			 extend2: "extend2"
			 extend3: "extend3"
			 extend4: "extend4"
			 procuctCode: "000001"
			 procuctTACode: ""
			 recommendReason1: "推荐理由1"
			 recommendReason2: "推荐理由2"
			 recommendReason3: "推荐理由3"
			 recommendReason4: "推荐理由4"
			 yieldDesc: "年化收益率"
			 yieldValue: "年化收益率5.7%"
			 }
			 * */
			var aGetnode = [],
				xmlobj = {},
				data = loadXML(sXml),
				nodes = data.getElementsByTagName(node),
				ln = nodes.length;
			for (var i = 0; i < ln; i++) {
				var name = nodes[i].getAttribute(names) || i;
				if (name && name in xmlobj) {} else {
					xmlobj["" + name + ""] = {}
				}
				var nln = nodes[i].attributes.length,
					x = 0;
				for (x; x < nln; x++) {
					var nodename = nodes[i].attributes[x].name;
					xmlobj["" + name + ""][nodename] = nodes[i].getAttribute(nodename)
				}
				if (!names) {
					aGetnode.push(xmlobj["" + name + ""])
				}
			}
			if (!names) {
				return aGetnode
			} else {
				return xmlobj
			}
		},
		xmltext:function(sXml,node,obj){
			//把所有的节点都放在一个数组里
			/*info中返回[{type:1,content:abc}]
			 *<flag code="0" msg="success"/>
			 *<info>
			 *   <type>1</type>
			 *   <content>abc</content>
			 * </info>
			 */
			var xmlobj=[],
				data=loadXML(sXml),
				nodes=data.getElementsByTagName(node),
				ln=nodes.length;
			for(var i=0;i<ln;i++){
				var name= i;
				if(name && name in xmlobj){
				}else{
					xmlobj[''+name+'']={};
				}
				var nln = nodes[i].childNodes.length,x=0;
				for(x;x<nln;x++){
					var nodename = nodes[i].childNodes[x].nodeName;
					if(nodename == '#text'){continue;}
					if(obj){
						if(obj.indexOf(nodename)>=0){
							xmlobj[''+name+''][nodename]=nodes[i].childNodes[x].innerHTML || nodes[i].childNodes[x].childNodes[0].nodeValue;
						}
					}else{
						xmlobj[''+name+''][nodename]=nodes[i].childNodes[x].innerHTML || nodes[i].childNodes[x].childNodes[0].nodeValue;
					}
				}
			}
			return xmlobj;
		},
		isEmptyObj: function (OBJ) {//判断对象是否为空
			/*var name;
			 for (name in OBJ) {
			 return false;
			 }
			 return true;*/
			var bIsEmpty = true, N = 0;
			for (var x in OBJ) {
				x ? N++ : '';
			}
			N > 0 ? bIsEmpty = false : '';
			return bIsEmpty;
		},
		/*
		 *tztWebdataEncrypt 处理加解密
		 *@config config对象
		 *@newData 加解密的数据
		 *@func 回调函数名
		 *@webViewFunc webview的方法 onWebdataEncrypt(加密)、OnWebDataDecrypt(解密)
		*/
		tztWebdataEncrypt: function(config,newData,func,webViewFunc){
			webViewFunc = webViewFunc || 'onWebdataEncrypt'
			if(config.tztWebdataEncrypt && typeof newData === 'string' && newData.indexOf('tztwkwebview')<0 && newData.indexOf('TZTWKWEBVIEW')<0){
				if (appversion.indexOf("android") > 0) {
					if(webViewFunc == 'OnWebDataDecrypt' && func == 'success'){
						func = 'webViewSuccess'
					}
					try {
						if(func == 'setDataEncrypt'){
							var reqno = new Date().getTime();
							reqno = '' + reqno;
							while(reqno in tztwkwebviewObj){
								reqno = reqno+''+1;
							}
							//增加 andorid无服务
							newData = window.MyWebView[webViewFunc](newData,reqno);
							config.AJAXINTERCEPT = reqno;
						}else{
							newData = window.MyWebView[webViewFunc](newData);
						}
						window[func](newData,config);
					} catch (e) {
						window[func](newData,config);
					}
				}else{
					TZT.readLocalMesg(['tztwkwebview'],function(data){
						if(webViewFunc == 'OnWebDataDecrypt' && func == 'success'){
							func = 'webViewSuccess'
						}
						if(data.TZTWKWEBVIEW == 1){
							var reqno = new Date().getTime();
							while(reqno in tztwkwebviewObj){
								reqno = reqno+''+1;
							}
							tztwkwebviewObj[reqno] = config;
							window.webkit.messageHandlers[webViewFunc].postMessage({
								func: func, //回调函数名
								data: newData, //数据
								reqno:reqno
							});
						}else{
							try {
								newData = window[webViewFunc](newData);
							} catch (e) {
							}
							window[func](newData,config);
						}
					});
				}
			}else{
				window[func](newData,config);
			}
		}
	});
	var tztwkwebviewObj = {};
	$.getData= function(obj,oSendData,fnSuccess,oConfig){
		var req = {
			XML: "/reqxml?",//请求服务器数据
			LOCAL: "/reqlocal?",//请求本地数据
			BINARY: "/reqbinary?",//请求服务器文件数据
			SAVEMAP: "/reqsavemap?",//请求本地保存数据
			READMAP: "/reqreadmap?",//读取本地保存数据
			SAVEFILE: "/reqsavefile?",//请求本地保存文件
			READFILE: "/reqreadfile?",//读取本地保存文件
			SOFTTODO: "/reqsofttodo?",//设置本地数据
			LOADFILE: "reqloadfile?",//加载本地文件
			SIGNATURE: "reqsignature?"//请求签名数据
		};
		var localtokentype = '0',tokenVal = '($Token)';
		var sPath = window.location.href.split('?')[0].replace(window.location.origin,'');
			tztsnoid = md5(JSON.stringify({'path':sPath,attributes:''}));
		// if(obj.oSendData && (obj.oSendData.tokentype || obj.oSendData.TOKENTYPE)){
		//     localtokentype = obj.oSendData.tokentype || obj.oSendData.TOKENTYPE;
		// }
		// if(window.localStorage && window.localStorage.getItem('TOKENTYPE') == localtokentype){
		//     tokenVal = window.localStorage.getItem('TOKEN') || '($Token)';
		// }
		// window.localStorage && window.localStorage.setItem("TOKENTYPE",localtokentype);
		var config = {
			logintype:1,//1普通交易2是融资融券交易8是个股期权交易9担保品划转
			sURL:req.XML,//默认请求服务器数据
			oSendData:{
				MobileCode: '($MobileCode)',
				IntactToServer: '($IntactToServer)',
				//时间戳
				Token: tokenVal,
				//请求标识
				Reqno: +new Date().getTime(),
				//请求服务器标示
				ReqlinkType: 1,
				newindex:1,
				tztsno:tztsnoid
			},//发送数据
			copyIsArray:true,//深拷贝还是潜拷贝
			fnSuccess:null,//errorno大于0的回调函数
			oConfig:null,//errorno小于o回调函数
			Error:null,//去除错误编号
			isload:true,//loading加载图
			isURL:false,//使用url传参
			isToken:true,//使用url传参
			tztWebdataEncrypt:true,//是否需要解密，默认解密
			timeout:30000
		};

		if(typeof obj == 'string'){
			config.sURL = obj;
		}
		if(oSendData && (typeof oSendData == 'object')){
			for(var oSend in oSendData){
				if(oSend.toLowerCase() === 'reqlinktype') {
					// 使用 $.getData 发请求的时候，如果传了类似ReqLinkType REQLINKTYPE的值，参数中就会有两个“ReqlinkType”
					// 因此，如果在入参里面传的 ReqlinkType, 需要覆盖掉函数内部初始化的 ReqlinkType
					config.oSendData['ReqlinkType'] = oSendData[oSend];
				} else {
					config.oSendData[oSend] = oSendData[oSend];
				}
			}
		}
		if(fnSuccess){
			config.fnSuccess = fnSuccess;
		}
		if(oConfig){
			config.oConfig = oConfig;
		}
		if(obj && obj.oSendData && (typeof obj.oSendData == 'object')){
			for(var item in obj.oSendData){
				if(item.toLowerCase() === 'reqlinktype') {
					// 使用 $.getData 发请求的时候，如果传了类似ReqLinkType REQLINKTYPE的值，参数中就会有两个“ReqlinkType”
					// 因此，如果在入参里面传的 ReqlinkType, 需要覆盖掉函数内部初始化的 ReqlinkType
					config.oSendData['ReqlinkType'] = obj.oSendData[item];
				} else {
					config.oSendData[item] = obj.oSendData[item];
				}
			}
		}
		if(typeof obj == 'object'){
			var iscopy = config.copyIsArray;
			if(typeof obj.copyIsArray != core_strundefined){
				iscopy = obj.copyIsArray;
			}
			config = $.extend(iscopy,config,obj);
		}
		//行情的功能号，去掉手机号 修改时间：20171020
		if(config.oSendData.ReqlinkType == 0 || config.oSendData.reqlinkType == 0 || config.oSendData.reqLinkType == 0 || config.oSendData.reqlinktype == 0){
			delete config.oSendData.MobileCode;
		}
		if(config.isload){
			T.loadTips({istip:true});
		}
		if(config.isURL){
			if('action' in config.oSendData){
				for(var x in config.oSendData){
					if(!config.isToken && config.oSendData[x] == 'Token'){
						continue;
					}
					config.sURL += config.oSendData[x]+'&';
				}
				config.sURL = config.sURL.slice(0,-1);
			}
			config.oSendData = '';
		}
		var newUrl = '',newData = '';
		if (config.sURL.indexOf('?') >= 0 && (config.sURL.indexOf('reqsavefile')<0) && (config.sURL.indexOf('reqreadfile')<0)) {
			var dataSurl = config.sURL.split('?');
			newUrl = dataSurl[0];
			newData = dataSurl[1];
		} else {
			newUrl = config.sURL;
		}
		config.newUrl = newUrl;
		if (config.oSendData != '') {
			if(typeof config.oSendData == "object"){
				// alert("原数据：" + JSON.stringify(oSendData));
				for (var x in config.oSendData) {
					if(!config.isToken && x == 'Token'){
						continue;
					}
					newData += x + '=' + encodeURIComponent(config.oSendData[x])+'&';
				}
				newData = newData.slice(0,-1);
			}else if(typeof config.oSendData == "string"){
				newData+='&'+config.oSendData;
			}
		}
		var errorAction = TZT.getUrlParameter('ACTION',newData.toUpperCase());
		//回调函数 data 原文 encrypt 加密数据
		newData = newData.replace(/undefined/g,'');
		
		TZT.tztWebdataEncrypt(config,newData,'setDataEncrypt');
		//sRequestURL, oSendData, fnSuccess, oConfig

	};
	window.setDataEncrypt=function(newData,config){
		if(typeof config != 'object' && config){
			config = tztwkwebviewObj[config] || {};
		}
		//发送请求
		var oDefConfig = {
				type: "POST",
				url: config.newUrl,
				data: newData,
				timeout:config.timeout || 30000,
				processData:false,
				contentType: "application/x-www-form-urlencoded;",//beforeSend发送之前complete应答之后
				success: function(oData) {
					if(typeof oData === 'string' && oData != ''){
						try{
							oData = JSON.parse(oData);
						}catch(e){
							try{
								oData = eval("("+oData+")");
							}catch(e){}
						}
					}
					if(oData && (typeof oData === 'object') && ('tztAjaxData' in oData)){
						config.tztWebdataEncrypt = 1;
						oData = oData.tztAjaxData;
						TZT.tztWebdataEncrypt(config,oData,'success','OnWebDataDecrypt');
					}else{
						window.success(oData,config);
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					//暂时屏蔽所有error弹出来的问题 修改时间：2017-12-28
					// TZT.ajaxError(XMLHttpRequest, textStatus, errorThrown);
				}
			},
			oAjaxParm = {},
			oParam = config.oSendData || {};
		if (oParam) {
			delete oParam.url;
			delete oParam.success
		}
		if(config.tztWebdataEncrypt){
			var obj = {'tztWebdataEncrypt':1};
			if(config.AJAXINTERCEPT){
				obj.AJAXINTERCEPT = config.AJAXINTERCEPT;
			}
			oDefConfig.headers = obj;
		}
		//oAjaxParm = $.extend(oAjaxParm, oParam);
		$.ajax(oDefConfig);
	};
	window.webViewSuccess = function(oData,config){
		if(typeof oData === 'string' && oData != ''){
			try{
				oData = decodeURIComponent(oData);
			}catch(e){
				
			}
		}
		window.success(oData,config);
	}
	/*
	 *success 全局的方法 ajax请求成功之后的回调
	 *@oData 返回的数据
	 *@config config
	*/
	window.success = function(oData,config){
		if(typeof oData === 'string' && oData != ''){
			try{
				oData = JSON.parse(oData);
			}catch(e){
				try{
					oData = eval("("+oData+")");
				}catch(e){}
			}
		}
		if(typeof config != 'object' && config){
			config = tztwkwebviewObj[config] || {};
		}
		var aChangeError = ['-204007', '-204009', '-207001', '-204001'];

		if(config.Error && (typeof config.Error != core_strundefined)){
			for(var i=0;i<config.Error.length;i++){
				var indexs = aChangeError.indexOf(config.Error[i]);
				if(indexs>=0){
					aChangeError = aChangeError.slice(indexs,2).concat(aChangeError.slice(indexs+1,aChangeError.length));
				}
			}
		}
		if (aChangeError.indexOf(oData.ERRORNO) >= 0) {
			T.tipln = 0;
			T.loadTips({istip:false});
			TZT.fn.action10402(TZT.fn.action10090({isExport:true,logintype:config.logintype}),{logintype:config.logintype,timeoutquit:1});
		} else if (oData.ERRORNO < 0) {
			if(config.oConfig){
				T.loadTips({istip:false});
				if(typeof config.oConfig === 'function'){config.oConfig(oData);}
				config.oConfig && config.oConfig.fnZeroLeft && config.oConfig.fnZeroLeft();
				return;
			}
			if(oData.ERRORMESSAGE != null && oData.ERRORMESSAGE != "" && (typeof oData.ERRORMESSAGE != core_strundefined)){
				T.tipln = 0;
				T.loadTips({istip:false});
				if(oData.ACTION != '' && oData.ACTION != '65535'){
					alert(oData.ERRORMESSAGE);
				}
			}else{
				TZT.readLocalMesg(['tztwkwebview'],function(data){
					if(data.TZTWKWEBVIEW == 1){
						var reqno = new Date().getTime();
						reqno = '' + reqno;
						while(reqno in tztwkwebviewObj){
							reqno = reqno+''+1;
						}
						tztwkwebviewObj[reqno] = config;
						window.webkit.messageHandlers.onWebdataEncrypt.postMessage({
							func: "setDataEncrypt", //回调函数名
							data: newData, //数据
							reqno:reqno
						});
					}else{
						try {
							newData = onWebdataEncrypt(newData);
						} catch (e) {
						}
						window.setDataEncrypt(newData,config);
					}
				});
			}

		} else {
			T.loadTips({istip:false});
			config.fnSuccess && config.fnSuccess(oData);
		}
	}

	/**
	 * [switchColor 替换主题颜色方法，供客户端调用]
	 */
	window.switchColor = function(){
		var num = $('link').length,
			arr = [],
			_baseMin = null,
			_bg = null;  
		for(var i = 0 ; i < num ; i++){
			var _this = $('link').eq(i),
				strUrl = _this.attr('href').split('?')[0];
			if(strUrl.indexOf('/bg.css')>=0){
				_bg = _this;
			}else if(strUrl.indexOf('skin/')>=0){
				_this.attr({'href':(strUrl+'?'+new Date().getTime())})
			}else if(strUrl.indexOf('base-min.css')>=0){
				_baseMin = _this;
			}
		}
		if(_baseMin){
			if(!_bg){
				var newUrl = _baseMin.attr('href').split('base-min')[0]+'skin/bg.css';
				$('head').append('<link href="'+newUrl+'?'+new Date().getTime()+'"  rel="stylesheet" />');
			}else{
				var newUrl = _bg.attr('href').split('?')[0];
				_bg.attr({'href':newUrl+'?'+new Date().getTime()});
			}
		}
	}

	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		//支持amd写法
		module.exports = TZT;
	} else {
		//支持cmd写法
		if ( typeof define === "function" /*&& define.amd*/ ) {
			define(/* "TZT", [], */function () { return TZT; } );
		}
	}
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.TZT = window.T = TZT;
	}
	if(!window.tztautotrack){
		window.tztautotrack = {};
	}
	(function(e, a) {
	if (!a.__SV) {
		a.__SV = 1.0;
		b = e.createElement("script");
		b.type = "text/javascript";
		b.async = !0;
		b.src = "/download/marketingmanage/tztautotrack.js";
		c = e.getElementsByTagName("script")[0];
		c.parentNode.insertBefore(b, c)
	}
	})(document, window.tztautotrack);
})(window,$);
