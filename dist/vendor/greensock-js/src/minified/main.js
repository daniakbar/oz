(function($){

	//PAGE 1

	// jQuery
	var teks1 = $('#teks1'),
		teks2 = $('#teks2'),
		teks3 = $('#teks3'),
		mouse = $('.slmouse'),
		navbar = $('#navbar'),
		nav1 = $('#nav1'),
		nav2 = $('#nav2'),
		nav3 = $('#nav3'),
		nav4 = $('#nav4'),
		nav5 = $('#nav5'),
		nav6 = $('#nav6');

	var teks1a = '#1 HITS',
		teks2a = 'RADIO',
		teks3a = 'STATION',
		teks1b = '#4O TOP',
		teks2b = 'JOMBLO',
		teks3b = 'NGENES',
		teks1c = '#1 PRIA',
		teks2c = 'SEJATI',
		teks3c = 'AGUS NUGRAHA';


	var tlStart = new TimelineLite();
	var tlRepeat = new TimelineLite();

	// tl1.to('#ganteng', 1, {y:100}).to('#ganteng', 1, {delay:2, x:-50}).to('#ganteng', 1, {delay:2, opacity:0});

	tlStart
		.from(mouse, 1, {y:-150, opacity:0, delay:1, ease: Power2. easeOut})
		.from(nav1, 0.2, {y:-25, opacity: 0, ease: Power2. easeOut})
		.from(nav2, 0.2, {y:-25, opacity: 0, ease: Power2. easeOut}, '-=0.1')
		.from(nav3, 0.2, {y:-25, opacity: 0, ease: Power2. easeOut}, '-=0.1')
		.from(nav4, 0.2, {y:-25, opacity: 0, ease: Power2. easeOut}, '-=0.1')
		.from(nav5, 0.2, {y:-25, opacity: 0, ease: Power2. easeOut}, '-=0.1')
		.from(nav6, 0.2, {y:-25, opacity: 0, ease: Power2. easeOut}, '-=0.1')
		.from(teks1, 1, {y:-25, opacity:0, delay:0.25, ease: Power2. easeOut})
		.from(teks2, 1, {y:-25, opacity:0, ease: Power2. easeOut}, '-=0.7')
		.from(teks3, 1, {y:-25, opacity:0, ease: Power2. easeOut}, '-=0.7')
		.to(teks3, 1, {opacity:1, onComplete: startRepeatAnimation});

	function startRepeatAnimation(){
		tlRepeat
			.to(teks1, 0.4, {y:-25, opacity: 0, delay: 3, ease: Power2. easeOut})
			.to(teks2, 0.4, {y:-25, opacity: 0, ease: Power2.easeOut}, '-=0.2')
			.to(teks3, 0.4, {y:-25, opacity: 0, ease: Power2.easeOut}, '-=0.2')
			.to(teks1, 0.1, {text:teks1b})
			.to(teks2, 0.1, {text:teks2b})
			.to(teks3, 0.1, {text:teks3b})
			.to(teks1, 1, {y:25, opacity: 1, ease: Power2.easeOut})			
			.to(teks2, 1, {y:25, opacity: 1, ease: Power2.easeOut}, '-=0.7')		
			.to(teks3, 1, {y:25, opacity: 1, ease: Power2.easeOut}, '-=0.7')

			.to(teks1, 0.4, {y:-25, opacity: 0, delay: 3, ease: Power2. easeOut})
			.to(teks2, 0.4, {y:-25, opacity: 0, ease: Power2.easeOut}, '-=0.2')
			.to(teks3, 0.4, {y:-25, opacity: 0, ease: Power2.easeOut}, '-=0.2')
			.to(teks1, 0.1, {text:teks1c})
			.to(teks2, 0.1, {text:teks2c})
			.to(teks3, 0.1, {text:teks3c})
			.to(teks1, 1, {y:25, opacity: 1, ease: Power2.easeOut})			
			.to(teks2, 1, {y:25, opacity: 1, ease: Power2.easeOut}, '-=0.7')		
			.to(teks3, 1, {y:25, opacity: 1, ease: Power2.easeOut}, '-=0.7')

			.to(teks1, 0.4, {y:-25, opacity: 0, delay: 3, ease: Power2. easeOut})
			.to(teks2, 0.4, {y:-25, opacity: 0, ease: Power2.easeOut}, '-=0.2')
			.to(teks3, 0.4, {y:-25, opacity: 0, ease: Power2.easeOut}, '-=0.2')
			.to(teks1, 0.1, {text:teks1a})
			.to(teks2, 0.1, {text:teks2a})
			.to(teks3, 0.1, {text:teks3a})
			.to(teks1, 1, {y:25, opacity: 1, ease: Power2.easeOut})			
			.to(teks2, 1, {y:25, opacity: 1, ease: Power2.easeOut}, '-=0.7')		
			.to(teks3, 1, {y:25, opacity: 1, ease: Power2.easeOut, onComplete: startRepeatAnimation}, '-=0.7');
	}

	// PAGE 2

	var numberOne = ('#numberOne'),
		numberOneImg = ('#numberOneImg'),
		playControl = ('#playControl'),
		tenTopHits = ('#tenTopHits'),
		topHitsBox = ('#topHitsBox'),
		topOne = ('#topOne'),
		topTwo = ('#topTwo'),
		topThree = ('#topThree'),
		topFour = ('#topFour'),
		topFive = ('#topFive'),
		topSix = ('#topSix'),
		topSeven = ('#topSeven'),
		topEight = ('#topEight'),
		topNine = ('#topNine'),
		topTen = ('#topTen'),
		topForty = ('#topForty'),
		topHitsArray = [topOne, topTwo, topThree, topFour, topFive, topSix, topSeven, topEight, topNine, topTen, topForty],
		ads1 = ('#ads1'),
		ads2 = ('#ads2'),
		tlPage2 = new TimelineLite();

	tlPage2
		.from(numberOne, 1, {x:-50, opacity:0, ease:Power2.easeOut})
		.from(ads1, 1, {x:50, opacity:0, ease:Power2.easeOut}, '-=1')
		.from(ads2, 1, {x:50, opacity:0, ease:Power2.easeOut}, '-=1')
		.from(numberOneImg, 1, {y:-25, opacity:0, ease:Power2.easeOut}, '-=0.5')
		.from(playControl, 1, {y:-25, opacity:0, ease:Power2.easeOut}, '-=1')
		.from(tenTopHits, 1, {x:50, opacity:0, ease:Power2.easeOut}, '-=0.5')
		.from(topHitsBox, 1, {x:50, opacity:0, ease:Power2.easeOut}, '-=1')
		.staggerFrom(topHitsArray, 0.4, {opacity: 0, x: 50, ease: Power1.easeOut}, 0.2, '-=1.5');

	var controller = new ScrollMagic.Controller();
	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#trigger1"})
		.setTween(tlPage2)
		// .addIndicators({name: "1 (duration: 0"})
		.addTo(controller);

})(jQuery);