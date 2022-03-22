import AOS from 'aos';

const init = () => {
	AOS.init({
		once: true,
	});
}

export default {
	init,
}
