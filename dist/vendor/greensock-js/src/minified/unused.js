.to(teks1, 0.2, {delay: 4, text:teks1b, ease: Power1. easeOut})
			.to(teks2, 0.2, {text:teks2b, ease: Power1. easeOut}, '-=0.05')
			.to(teks3, 0.2, {text:teks3b, ease: Power1. easeOut}, '-=0.05')
			.to(teks1, 0.2, {delay: 4, text:teks1c, ease: Power1. easeOut})
			.to(teks2, 0.2, {text:teks2c, ease: Power1. easeOut}, '-=0.05')
			.to(teks3, 0.2, {text:teks3c, ease: Power1. easeOut}, '-=0.05')
			.to(teks1, 0.2, {delay: 4, text:teks1a, ease: Power1. easeOut})
			.to(teks2, 0.2, {text:teks2a, ease: Power1. easeOut}, '-=0.05')
			.to(teks3, 0.2, {text:teks3a, onComplete: startRepeatAnimation, ease: Power1. easeOut}, '-=0.05');