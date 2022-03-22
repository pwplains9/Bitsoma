import './vendor';
import './helpers';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import aos from "./components/aos";
import vars from "./helpers";

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

function init() {
	console.log('init')
	aos.init();

	if(vars.isMobile()) {
		vars.$document.find('.js-open').on('click', () => {
			console.log('init')
			if(!vars.$document.find('.plug__phone.for-mobile').hasClass('is-active')) {
				vars.$document.find('.plug__phone.for-mobile').addClass('is-active');
			}
		});

		vars.$document.find('.js-close').on('click', () => {
			console.log('init')
			if(vars.$document.find('.plug__phone.for-mobile').hasClass('is-active')) {
				vars.$document.find('.plug__phone.for-mobile').removeClass('is-active');
			}
		});
	} else {
		let copyTextareaBtn = document.querySelector('.plug__popup-icon');

		copyTextareaBtn.addEventListener('click', function(event) {
			let copyTextarea = document.querySelector('.js-copytextarea');
			copyTextarea.focus();
			copyTextarea.select();

			try {
				let successful = document.execCommand('copy');
				let msg = successful ? 'successful' : 'unsuccessful';
			} catch (err) {
			}
		});
	}


}

init();
