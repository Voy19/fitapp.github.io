$(document).mouseup(function (e) { // событие клика по веб-документу 
	var x = document.getElementById('myTopnav');
	var icon_menu = document.getElementById("icon_menu");
	var overlay = document.getElementById("main-overlay");
	var div = $("#myTopnav"); // тут указываем ID элемента 
	if ($("body").width() <= 768) {
		if (!div.is(e.target) || icon_menu.is(e.target) // если клик был не по нашему блоку 
			&&
			div.has(e.target).length === 0) { // и не по его дочерним элементам 
			if (x.classList.contains("open")) {
				x.classList.remove("open");
				overlay.style.opacity = "0";
				icon_menu.style.zIndex = "1";
				overlay.style.zIndex = "-1";
			}
		}
	}

});

function hideMenu() {
	var x = document.getElementById('myTopnav');
	var icon_menu = document.getElementById("icon_menu");
	var overlay = document.getElementById("main-overlay");
	x.classList.toggle("open");

	if ($("body").width() <= 768) {
		if (x.classList.contains("open")) {
			overlay.style.opacity = ".6";
			overlay.style.zIndex = "2";
		} else {
			overlay.style.opacity = "0";
			overlay.style.zIndex = "-1";
		}
	} else {
		x.classList.remove("open");
		icon_menu.style.display = "none";
	}
}