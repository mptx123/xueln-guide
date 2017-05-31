$(function(){
var $oCan=$('#calendar');
	$oCan.eCalendar({weekDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
months: ['Janeiro', 'Fevereiro', 'Mar?o', 'Abril', 'Maio', 'Junho',
         'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
textArrows: {previous: '-', next: '+'},
eventTitle: 'Events',
url: '',
events: [
    {title: 'Event Title 1', description: 'job', datetime: new Date(2016, 9, 12, 17)},
    {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2016, 9, 17, 16)}
]})
})