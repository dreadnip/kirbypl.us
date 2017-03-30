 /**
  * calc_weeks  - returns the current, next and third week coming up in the rotation based on the current date
  * @param Date -  reference_date
  * @return Integer - week number between 1 and 8
  */ 
function calc_weeks(reference_date){
	var d = new Date();
	var diffDays = Math.round(Math.abs((reference_date.getTime() - d.getTime())/(24*60*60*1000)));
	var diffWeeks = Math.floor(diffDays/7);
	var w = (diffWeeks%8);
	var weeks = [w, w+1, w+2];
	for(index in weeks){
		if(weeks[index] >= 9){
			weeks[index] = weeks[index] - 8;
		}
	}
	return weeks;
}

/*
 *		Variables
 */

var reference_date_eu = new Date(Date.UTC(2017, 2, 29, 7, 0, 0));
var reference_date_us = new Date(Date.UTC(2017, 2, 28, 15, 0, 0));
var schedule = [
	[{ "name": "raging", "difficulty": 1 },{ "name": "volcanic", "difficulty": 0 },{ "name": "tyrannical", "difficulty": 2 }],
	[{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 2 }],
	[{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 2 }],
	[{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 2 }],
	[{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 2 }],
	[{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 2 }],
	[{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 2 }],
	[{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 0 },{ "name": "?", "difficulty": 2 }],
];
var difficulties = ["easy", "med", "hard"]; //Difficulty in the schedule is on a 0, 1, 2 scale instead of 1,2,3 for easier array access later

/*
 *		Runtime
 */

var weeks_eu = calc_weeks(reference_date_eu);
var weeks_us = calc_weeks(reference_date_us);

//EU

document.getElementsByClassName("weekly_eu")[0].innerHTML = "EU | <span class='"+difficulties[schedule[weeks_eu[0]][0].difficulty]+"'>" + schedule[weeks_eu[0]][0].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_eu[0]][1].difficulty]+"'>" + schedule[weeks_eu[0]][1].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_eu[0]][2].difficulty]+"'>" + schedule[weeks_eu[0]][2].name + "</span>";

document.getElementsByClassName("nextweekeu")[0].innerHTML = "EU | <span class='"+difficulties[schedule[weeks_eu[1]][0].difficulty]+"'>" + schedule[weeks_eu[1]][0].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_eu[1]][1].difficulty]+"'>" + schedule[weeks_eu[1]][1].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_eu[1]][2].difficulty]+"'>" + schedule[weeks_eu[1]][2].name + "</span>";

document.getElementsByClassName("weekafternexteu")[0].innerHTML = "EU | <span class='"+difficulties[schedule[weeks_eu[2]][0].difficulty]+"'>" + schedule[weeks_eu[2]][0].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_eu[2]][1].difficulty]+"'>" + schedule[weeks_eu[2]][1].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_eu[2]][2].difficulty]+"'>" + schedule[weeks_eu[2]][2].name + "</span>";

//US

document.getElementsByClassName("weekly_us")[0].innerHTML = "US | <span class='"+difficulties[schedule[weeks_us[0]][0].difficulty]+"'>" + schedule[weeks_us[0]][0].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_us[0]][1].difficulty]+"'>" + schedule[weeks_us[0]][1].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_us[0]][2].difficulty]+"'>" + schedule[weeks_us[0]][2].name + "</span>";

document.getElementsByClassName("nextweekus")[0].innerHTML = "US | <span class='"+difficulties[schedule[weeks_us[1]][0].difficulty]+"'>" + schedule[weeks_us[1]][0].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_us[1]][1].difficulty]+"'>" + schedule[weeks_us[1]][1].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_us[1]][2].difficulty]+"'>" + schedule[weeks_us[1]][2].name + "</span>";

document.getElementsByClassName("weekafternextus")[0].innerHTML = "US | <span class='"+difficulties[schedule[weeks_us[2]][0].difficulty]+"'>" + schedule[weeks_us[2]][0].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_us[2]][1].difficulty]+"'>" + schedule[weeks_us[2]][1].name + "</span>, "+
															"<span class='"+difficulties[schedule[weeks_us[2]][2].difficulty]+"'>" + schedule[weeks_us[2]][2].name + "</span>";