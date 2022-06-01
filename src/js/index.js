document.getElementById('hardwareConcurrency').innerHTML = 'Ваш процессор' + ' ' + navigator.hardwareConcurrency + ' ' + 'ядерный';
document.getElementById('deviceMemory').innerHTML = 'Оперативной памяти' + ' ' + navigator.deviceMemory;

navigator.userAgentData
	.getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList'])
	.then(ua => {
		document.getElementById('platform').innerHTML = navigator.userAgentData.platform + ' ' + ua.platformVersion;
		document.getElementById('model').innerHTML = 'Ваша модель' + ' ' + ua.model;
	});


// console.log(navigator.userAgentData);
// console.log(alert('Привет!'));