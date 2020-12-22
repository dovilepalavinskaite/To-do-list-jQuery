$(document).ready(function() {

var newTask = $('#new-task').val();
$('#new-task').on("input", function(){
	 newTask = $(this).val();
});

// Create new Task TO-DO with button:

$('input[type=submit]').click(function(){
	if (newTask.length) {
	appendNew(); 
	$(this).val('');	
	}
});

// Create new Task TO-DO with ENTER:

$('#new-task').keypress(function (e) {
 var key = e.which;
 if(key == 13 && newTask.length){  // the enter key code
  appendNew();
  $(this).val('');
  }
});  

// Function for creating new list:

function appendNew(){
	$('ul').append('<li><div class="remove-class"><i class="fas fa-trash-alt"></i></div><span>' + newTask + '</span></li>');
}


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





