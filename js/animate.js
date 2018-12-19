function animate(obj, styles, start, end, time) {
	// 需要做的动画次数
	var count = Math.ceil(time / 1000) * 20;
	// 步进值
	var step = (end - start) / count;
	// 时间片
	var timeOut = time / count;

	// 定时器
	var t = setInterval(function() {
		start += step;
		count--;
		if(count <= 0) {
			clearInterval(t);
		}
		obj.style[styles] = start + 'px';
	}, timeOut);
}