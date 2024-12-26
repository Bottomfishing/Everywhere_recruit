//实现了自动播放和手动切换功能。
//showImage函数用于显示指定索引的图片，并更新小圆点的状态。
//nextImage函数用于切换到下一张图片，并通过setInterval实现自动播放。
//最后，为每个小圆点添加了点击事件监听器，以实现手动切换

//这个监听器确保DOM内容加载完毕后才执行里面的代码。这是为了防止在DOM元素还未完全加载时就尝试访问它们，从而导致错误
document.addEventListener('DOMContentLoaded', function() {
	//获取包含所有图片的容器元素
	const sliderWrapper = document.querySelector('.slider-wrapper');
	//获取所有用于表示图片索引的小圆点元素
	const dots = document.querySelectorAll('.dot');
	//当前显示的图片索引，初始化为0
	let currentIndex = 0;
	//计算图片总数，即sliderWrapper子元素的数量
	const totalImages = sliderWrapper.children.length;

	//参数：index（要显示的图片的索引）
	//更新currentIndex为传入的索引，计算并设置sliderWrapper的transform样式以实现图片的横向滚动，同时更新小圆点的状态（通过添加或移除active类）
	function showImage(index) {
		currentIndex = index;
		const offset = -index * 100 + '%';
		sliderWrapper.style.transform = `translateX(${offset})`;
		dots.forEach((dot, i) => {
			dot.classList.toggle('active', i === index);
		});
	}

	//计算下一张图片的索引（通过currentIndex + 1并对totalImages取模来实现循环），然后调用showImage函数显示该图片
	function nextImage() {
		currentIndex = (currentIndex + 1) % totalImages;
		showImage(currentIndex);
	}

	// 自动播放
	setInterval(nextImage, 4500); // 每4.5秒切换一次

	// 手动切换
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			showImage(index);
		});
	});
});

//侧栏1点击展开功能
document.getElementById('sidebar1Toggle').addEventListener('click', function() {
	const sidebar = document.getElementById('sidebar1');
	sidebar.classList.toggle('open');
});

//侧栏1关闭功能
document.getElementById('sidebar1').addEventListener('click', function() {
	const sidebar = document.getElementById('sidebar1');
	sidebar.classList.toggle('open');
});

