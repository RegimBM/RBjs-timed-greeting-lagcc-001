function isAfternoon (time) {
	if (time >= 12 && time <= 19){
		return true;
	}
	else {
		return false;
	}

};

module.exports = isAfternoon;
