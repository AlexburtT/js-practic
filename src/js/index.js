document.getElementById('hardwareConcurrency').innerHTML = 'Ваш процессор' + ' ' + navigator.hardwareConcurrency + ' ' + 'ядерный';
document.getElementById('deviceMemory').innerHTML = 'Оперативной памяти' + ' ' + navigator.deviceMemory;

navigator.userAgentData
	.getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList'])
	.then(ua => {
		document.getElementById('platform').innerHTML = ua.platform + ' ' + ua.platformVersion;
		document.getElementById('model').innerHTML = 'Ваша модель' + ' ' + ua.model;
	});

let sayHello = (nameUser) => {
	return "Доброго дня, " + nameUser.toUpperCase();
}
let getCurrentYear = () => {
	return new Date().getFullYear();
}

let nameUser = prompt('Как тебя зовут?', '');
let age = prompt('Сколько тебе лет?', 51);
let isBoss = confirm("Ты здесь главный?");


console.log(isBoss); // true, если нажата OK

document.getElementById('showUser').innerHTML = sayHello(`${nameUser}`) + ` Тубу лет ${age}` + ` Сейчас ` + getCurrentYear();