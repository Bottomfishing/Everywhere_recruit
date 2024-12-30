document.addEventListener('DOMContentLoaded', function () {

	const sliderWrapper = document.querySelector('.slider-wrapper');
	const dots = document.querySelectorAll('.dot');
	let currentIndex = 0;
	const totalImages = sliderWrapper.children.length;

	function showImage(index) {
		currentIndex = index;
		const offset = -index * 100 + '%';
		sliderWrapper.style.transform = `translateX(${offset})`;
		dots.forEach((dot, i) => {
			dot.classList.toggle('active', i === index);
		});
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % totalImages;
		showImage(currentIndex);
	}

	setInterval(nextImage, 4500); // 每4.5秒切换一次

	// 手动切换
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			showImage(index);
		});
	});
});

//当页面滚动到轮播图片下面时候，导航栏收起不显示
const navbar = document.getElementWById('navbar');
const slider = document.getElementById('slider');
let isAnimating = false;

window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const sliderTop = slider.offsetTop;
	const sliderHeight = slider.offsetHeight;

	if (scrollTop >= sliderTop + sliderHeight && !isAnimating) {
		isAnimating = true;
		navbar.classList.add('hidden');
		setTimeout(() => {
			isAnimating = false;
		}, 300);
	} else if (scrollTop < sliderTop + sliderHeight && navbar.classList.contains('hidden')) {
		isAnimating = true;
		navbar.classList.remove('hidden');
		setTimeout(() => {
			isAnimating = false;
		}, 300);
	}
});