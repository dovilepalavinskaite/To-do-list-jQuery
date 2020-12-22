$(document).ready(function() {


// Create new Task TO-DO:

$('input[type=submit]').click(function(){
	var newTask = $('#new-task').val();
	$('new-task').val("");
	$('ul').append('<li>' + newTask + '</li>');
});




});


