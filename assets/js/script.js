 /**
  * calc_weeks  - returns the first, second and third_week week coming up in the rotation based on the current date
  * @param Date -  reference_date (fresh start of the rotation)
  * @return Integer - week number between 0 and 7
  */ 
function calc_weeks(reference_date){
	var d = new Date();
	var diffDays = Math.round((d.getTime() - reference_date.getTime())/(24*60*60*1000));
	var diffWeeks = Math.floor(diffDays/7);
	var w = (diffWeeks%8);
	var weeks = {"first_week":w, "second_week":w+1, "third_week":w+2};
	for(index in weeks){
		(weeks[index] >= 8) ? weeks[index] = weeks[index] - 8 : null;
	}
	return weeks;
}

/*
 *		Variables
 */

var reference_date_eu = new Date(Date.UTC(2017, 2, 29, 7, 0, 0)); //Patch 7.2 launch date
var reference_date_us = new Date(Date.UTC(2017, 2, 28, 15, 0, 0)); //Patch 7.2 launch date
var schedule = [
	{ "first_affix": { "name": "raging", "difficulty": "med" }, "second_affix": { "name": "volcanic", "difficulty": "easy" }, "third_affix": { "name": "tyrannical", "difficulty": "hard" }},
	{ "first_affix": { "name": "teeming", "difficulty": "med" }, "second_affix": { "name": "explosive", "difficulty": "easy" }, "third_affix": { "name": "fortified", "difficulty": "hard" }},
	{ "first_affix": { "name": "?", "difficulty": "easy" }, "second_affix": { "name": "?", "difficulty": "easy" }, "third_affix": { "name": "?", "difficulty": "hard" }},
	{ "first_affix": { "name": "?", "difficulty": "easy" }, "second_affix": { "name": "?", "difficulty": "easy" }, "third_affix": { "name": "?", "difficulty": "hard" }},
	{ "first_affix": { "name": "?", "difficulty": "easy" }, "second_affix": { "name": "?", "difficulty": "easy" }, "third_affix": { "name": "?", "difficulty": "hard" }},
	{ "first_affix": { "name": "?", "difficulty": "easy" }, "second_affix": { "name": "?", "difficulty": "easy" }, "third_affix": { "name": "?", "difficulty": "hard" }},
	{ "first_affix": { "name": "?", "difficulty": "easy" }, "second_affix": { "name": "?", "difficulty": "easy" }, "third_affix": { "name": "?", "difficulty": "hard" }},
	{ "first_affix": { "name": "?", "difficulty": "easy" }, "second_affix": { "name": "?", "difficulty": "easy" }, "third_affix": { "name": "?", "difficulty": "hard" }}
];

/*
 *		Runtime
 */

var eu = calc_weeks(reference_date_eu);
var us = calc_weeks(reference_date_us);

//EU

document.getElementsByClassName("weekly_eu")[0].innerHTML = "EU | <span class='"+schedule[eu.first_week].first_affix.difficulty+"'>" + schedule[eu.first_week].first_affix.name + "</span>, "+
															"<span class='"+schedule[eu.first_week].second_affix.difficulty+"'>" + schedule[eu.first_week].second_affix.name + "</span>, "+
															"<span class='"+schedule[eu.first_week].third_affix.difficulty+"'>" + schedule[eu.first_week].third_affix.name + "</span>";

document.getElementsByClassName("nextweekeu")[0].innerHTML = "EU | <span class='"+schedule[eu.second_week].first_affix.difficulty+"'>" + schedule[eu.second_week].first_affix.name + "</span>, "+
															"<span class='"+schedule[eu.second_week].second_affix.difficulty+"'>" + schedule[eu.second_week].second_affix.name + "</span>, "+
															"<span class='"+schedule[eu.second_week].third_affix.difficulty+"'>" + schedule[eu.second_week].third_affix.name + "</span>";

document.getElementsByClassName("weekafternexteu")[0].innerHTML = "EU | <span class='"+schedule[eu.third_week].first_affix.difficulty+"'>" + schedule[eu.third_week].first_affix.name + "</span>, "+
															"<span class='"+schedule[eu.third_week].second_affix.difficulty+"'>" + schedule[eu.third_week].second_affix.name + "</span>, "+
															"<span class='"+schedule[eu.third_week].third_affix.difficulty+"'>" + schedule[eu.third_week].third_affix.name + "</span>";

//US

document.getElementsByClassName("weekly_us")[0].innerHTML = "US | <span class='"+schedule[us.first_week].first_affix.difficulty+"'>" + schedule[us.first_week].first_affix.name + "</span>, "+
															"<span class='"+schedule[us.first_week].second_affix.difficulty+"'>" + schedule[us.first_week].second_affix.name + "</span>, "+
															"<span class='"+schedule[us.first_week].third_affix.difficulty+"'>" + schedule[us.first_week].third_affix.name + "</span>";

document.getElementsByClassName("nextweekus")[0].innerHTML = "US | <span class='"+schedule[us.second_week].first_affix.difficulty+"'>" + schedule[us.second_week].first_affix.name + "</span>, "+
															"<span class='"+schedule[us.second_week].second_affix.difficulty+"'>" + schedule[us.second_week].second_affix.name + "</span>, "+
															"<span class='"+schedule[us.second_week].third_affix.difficulty+"'>" + schedule[us.second_week].third_affix.name + "</span>";

document.getElementsByClassName("weekafternextus")[0].innerHTML = "US | <span class='"+schedule[us.third_week].first_affix.difficulty+"'>" + schedule[us.third_week].first_affix.name + "</span>, "+
															"<span class='"+schedule[us.third_week].second_affix.difficulty+"'>" + schedule[us.third_week].second_affix.name + "</span>, "+
															"<span class='"+schedule[us.third_week].third_affix.difficulty+"'>" + schedule[us.third_week].third_affix.name + "</span>";