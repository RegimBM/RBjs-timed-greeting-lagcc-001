function isMorning(time){
	if (time >= 6 && time <= 11){
		return true;
	}
	else {
		return false;
	}

};

module.exports = isMorning;
