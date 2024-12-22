
//实现了自动播放和手动切换功能。
//showImage函数用于显示指定索引的图片，并更新小圆点的状态。
//nextImage函数用于切换到下一张图片，并通过setInterval实现自动播放。
//最后，为每个小圆点添加了点击事件监听器，以实现手动切换

document.addEventListener('DOMContentLoaded', function () 
{
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

    // 自动播放
    setInterval(nextImage, 3000); // 每3秒切换一次

    // 手动切换
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImage(index);
        });
    });
});