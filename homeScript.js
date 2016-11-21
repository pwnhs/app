
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

if (hour > 4 && hour < 17) {
	$('#darkMode').attr('href', './darkmode.css');
	$('#statusBar').attr('content', 'black-translucent');
}

function dateDiff(date) {
	date = new Date(date);
	
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = today.getTime()
    var date2_ms = date.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.floor(difference_ms/ONE_DAY) + 1
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
