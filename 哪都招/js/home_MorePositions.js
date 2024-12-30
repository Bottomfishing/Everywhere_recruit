document.addEventListener('DOMContentLoaded', function () {
	const jobList = document.getElementById('jobList');
	const jobDetails = document.getElementById('jobInfo');

	const jobData = {
		1: {
			title: '前端开发工程师',
			company: '示例公司1',
			logo: 'company1_logo.png',
			salary: '10K - 20K',
			description: '负责公司产品的前端开发工作，使用 HTML、CSS、JavaScript 等技术实现页面交互效果。',
			requirements: '熟悉前端框架，如 Vue 或 React；具备良好的代码规范。'
		},
		2: {
			title: '后端开发工程师',
			company: '示例公司2',
			logo: 'company2_logo.png',
			salary: '12K - 25K',
			description: '负责公司后端服务的开发与维护，使用 Java、Python 等语言编写高效的服务器端代码。',
			requirements: '熟悉数据库操作，掌握至少一种后端框架。'
		},
		3: {
			title: '数据分析师',
			company: '示例公司3',
			logo: 'company3_logo.png',
			salary: '8K - 15K',
			description: '对公司业务数据进行收集、整理和分析，为决策提供数据支持。',
			requirements: '熟练使用数据分析工具，如 SQL、Python 数据分析库。'
		}
	};

	// 获取第一个职位的数据
	const firstJob = jobData[1];
	if (firstJob) {
		jobDetails.innerHTML = `
            <h3>${firstJob.title}</h3>
            <img src="${firstJob.logo}" alt="${firstJob.company} Logo" class="company-logo">
            <span class="company-name">${firstJob.company}</span>
            <span class="right-panel-salary">${firstJob.salary}</span>
            <p>${firstJob.description}</p>
            <h4>职位要求:</h4>
            <p>${firstJob.requirements}</p>
        `;
		// 为第一个职位添加选中样式类
		const firstJobItem = jobList.querySelector('li.job-item');
		if (firstJobItem) {
			firstJobItem.classList.add('selected');
		}
	}

	jobList.addEventListener('click', function (event) {
		if (event.target.closest('.job-item')) {
			// 先移除所有职位的选中样式
			const allJobItems = jobList.querySelectorAll('li.job-item');
			allJobItems.forEach(item => item.classList.remove('selected'));
			const jobId = event.target.closest('li').dataset.jobId;
			const job = jobData[jobId];
			jobDetails.innerHTML = `
                <h3>${job.title}</h3>
                <img src="${job.logo}" alt="${job.company} Logo" class="company-logo">
                <span class="company-name">${job.company}</span>
                <span class="right-panel-salary">${job.salary}</span>
                <p>${job.description}</p>
                <h4>职位要求:</h4>
                <p>${job.requirements}</p>
            `;

			// 为点击的职位添加选中样式类
			const clickedJobItem = event.target.closest('li.job-item');
			if (clickedJobItem) {
				clickedJobItem.classList.add('selected');
			}
		}
	});
});