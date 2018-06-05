/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconfont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-train': '&#xe909;',
		'icon-camera-outline': '&#xe901;',
		'icon-shopping-cart2': '&#xe902;',
		'icon-camera2': '&#xe903;',
		'icon-shopping-cart': '&#xe904;',
		'icon-home4': '&#xe90a;',
		'icon-cart': '&#xe905;',
		'icon-shopping': '&#xe905;',
		'icon-ecommerce': '&#xe905;',
		'icon-buy': '&#xe905;',
		'icon-purchase': '&#xe905;',
		'icon-home': '&#xe906;',
		'icon-home2': '&#xe907;',
		'icon-home3': '&#xe908;',
		'icon-office': '&#xe90b;',
		'icon-droplet': '&#xe90c;',
		'icon-play': '&#xe912;',
		'icon-film': '&#xe913;',
		'icon-video-camera': '&#xe914;',
		'icon-library': '&#xe921;',
		'icon-coin-dollar': '&#xe93b;',
		'icon-coin-euro': '&#xe93c;',
		'icon-coin-pound': '&#xe93d;',
		'icon-coin-yen': '&#xe93e;',
		'icon-credit-card': '&#xe93f;',
		'icon-phone': '&#xe942;',
		'icon-location': '&#xe947;',
		'icon-location2': '&#xe948;',
		'icon-mobile': '&#xe958;',
		'icon-mobile2': '&#xe959;',
		'icon-search': '&#xe986;',
		'icon-stats-bars2': '&#xe99d;',
		'icon-gift': '&#xe99f;',
		'icon-airplane': '&#xe9af;',
		'icon-arrow-up-left2': '&#xea39;',
		'icon-arrow-up2': '&#xea3a;',
		'icon-arrow-up-right2': '&#xea3b;',
		'icon-arrow-right2': '&#xea3c;',
		'icon-arrow-down-right2': '&#xea3d;',
		'icon-arrow-down2': '&#xea3e;',
		'icon-arrow-down-left2': '&#xea3f;',
		'icon-arrow-left2': '&#xea40;',
		'icon-circle-up': '&#xea41;',
		'icon-circle-right': '&#xea42;',
		'icon-circle-down': '&#xea43;',
		'icon-circle-left': '&#xea44;',
		'icon-opt': '&#xea51;',
		'icon-dropbox': '&#xeaae;',
		'icon-libreoffice': '&#xeae3;',
		'icon-train2': '&#xe90d;',
		'icon-gamepad2': '&#xe90e;',
		'icon-gamepad': '&#xe90f;',
		'icon-joystick': '&#xe90f;',
		'icon-plane': '&#xe910;',
		'icon-camera': '&#xe900;',
		'icon-ctrl': '&#xea50;',
		'icon-travel-train': '&#xe911;',
		'icon-location-hotel': '&#xe915;',
		'icon-airplane2': '&#xe916;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
