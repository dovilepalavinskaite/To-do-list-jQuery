$(document).ready(function() {


// Create new Task TO-DO:

$('input[type=submit]').click(function(){
	const newTask = $('#new-task').val();
	if (newTask.length) {
		$('ul').append('<li><div class="remove-class"><i class="fas fa-trash-alt"></i></div><span>' + newTask + '</span></li>');
	}
});

// Mark Task as done:

$('span').click(function(){
	$(this).toggleClass('done-task');
});

//Hover mouse to add class with trash bin:

$('li').hover(function(){
	$(this).children('div').toggleClass("active");
});

// Delete task:

$('.remove-class').click(function(){
	$(this).closest('li').remove();
});



});

