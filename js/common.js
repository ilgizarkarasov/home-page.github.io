$(function() {
	var typed = new Typed('#typed', {
	    strings: ["Создание адаптивных сайтов.^500", "С помощью современных технологий.^500", "Быстрые сайты от нас, по версии Google Page Speed.^500", "Недорогие сайты и быстрые дедлайны!^500"],
	    loop: true,
	    typeSpeed: 40,
	    backSpeed: 20,
	});

	var videobackground = new $.backgroundVideo($('#home-page'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "img/",
      "filename": "background",
      "types": ["mp4","ogg","webm"],
      "preload": true,
      "autoplay": true,
      "loop": true
    });
});
