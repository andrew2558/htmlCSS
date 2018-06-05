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
		'icon-headphones': '&#xe910;',
		'icon-pacman': '&#xe916;',
		'icon-clubs': '&#xe918;',
		'icon-coin-dollar': '&#xe93b;',
		'icon-coin-yen': '&#xe93e;',
		'icon-phone': '&#xe942;',
		'icon-database': '&#xe964;',
		'icon-bubbles3': '&#xe96f;',
		'icon-cog': '&#xe994;',
		'icon-cogs': '&#xe995;',
		'icon-hammer': '&#xe996;',
		'icon-sphere': '&#xe9c9;',
		'icon-brightness-contrast': '&#xe9d6;',
		'icon-heart': '&#xe9da;',
		'icon-smile': '&#xe9e1;',
		'icon-command': '&#xea4e;',
		'icon-ctrl': '&#xea50;',
		'icon-twitter': '&#xea96;',
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
