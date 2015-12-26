
      $.ajax('https://tsl-awesome-tasks.herokuapp.com/tasks.json').done(function(responseData) {
      	var tasks = responseData;

	for (var i = 0; i < tasks.length; i++){
$('#tasks').append('<li>' + tasks[i].description + '</li>');
}
      });


$.ajax('https://tsl-awesome-tasks.herokuapp.com/tasks/35.json').done(function(responseTask) {

	$('#mytask').append('<li>' + responseTask.description + '</li>');
});

$.ajax('http://www.google.com')
	.done(function(allofGoogle) {
		$('#google').append(allofGoogle);
})
	.fail(function(response) 
		{$('#google').append('<h2>Sorry, Google said no.</h2>');
		}); 
