
var topOff = $(window).height()/8 + 240;
$('#home-content').css('top', topOff + 'px');

var today = new Date(),
	hour = today.getHours(),
	week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	day = week[today.getDay()],
	nday = today.getDate(),
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	month = months[today.getMonth()];
$('#pwnhs-date').text(day + ', ' + nday + ' ' + month);

var greeting = 'Good '
if (hour < 4) {
	greeting += 'Night.'
} else if (hour < 11) {
	greeting += 'Morning.'
} else if (hour < 18) {
	greeting += 'Afternoon.'
} else {
	greeting += 'Evening.'
}
$('#read').text(greeting)
$('#read').css('color', rColor2);

function dateDiff(date) {
	var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
	date = new Date(date);
	var timediff = date - today;
	return Math.floor(timediff / day) + 2;
}

$('#hoursDue').text(dateDiff('2016-12-01') + ' days');
$('#hoursDue, #penHoursAdd, #word').css('color', rColor);

var words = [
	'fantastic',
	'wonderful',
	'excellent',
	'tremendous',
	'enjoyable',
	'dynamite',
	'stupendous',
	'wondrous',
	'sensational',
	'outstanding',
	'incredible',
	'sublime',
	'wicked',
	'swell',
	'terrific'
];
var word = words[Math.floor(Math.random()*words.length)]
$('#word').text(word);
var aan = word.charAt(0);
if (aan == 'a' || aan == 'e' || aan == 'i' || aan == 'o' || aan == 'u'){
	aan = 'an ';
} else {
	aan = 'a ';
}
$('#aan').text(aan);
