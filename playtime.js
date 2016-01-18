var miliseconds = 1000;

function seconds (x) {
	return x * miliseconds;
}

function minutes (x) {
	return x * seconds(60);
}

function hours (x) {
	return x * minutes(60);
}

function PlayTimeService (browserStorage) {
	var service = {};
	var timer;

	function persist () {
		browserStorage.setItem('playTime', JSON.stringify(service.playTime));
	}

	service.playTime = JSON.parse(browserStorage.getItem('playTime') || '0');

	service.addPlaytime = function(time) {
		service.playTime += time;
		persist();
	};

	service.play = function() {
		timer = $interval(function() {
			service.playTime -= seconds(1);
			persist();

			if (service.playTime === 0) {
				service.pause();
				service.alarm();
			}
		}, seconds(1));
	};

	service.pause = function() {
		$interval.clear(timer);
	};

	service.reset = function() {
		service.playTime = 0;
		persist();
	};

	service.alarm = function() {
		alert('Playtime is OVER!');
	}

	return service;
}
