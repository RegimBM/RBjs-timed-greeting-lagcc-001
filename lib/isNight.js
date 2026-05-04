function isNight(time){
	if ((time >= 20 && time < 24) || (time <= 5 && time >= 0)){
		return true;
	}
	else {
		return false;
	}

};

module.exports = isNight;
