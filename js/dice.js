$(document).ready(function () {
	$('.dot4').hide();

	pressBtn('#shaker');

	$('#shaker').on('click', function() {
		
			$('header').text('Shake, shake, shake...');
			$('header').addClass('shake');

		setTimeout(function(){
			var roll1 = makeDieFace('#first-die');
			var roll2 = makeDieFace('#second-die');

			$('header').removeClass('shake');

			if (roll1+roll2 == 2){
				$('header').text('Snake eyes!');
			} else {
				$('header').text(roll1 + roll2);				
			}

		}, 1000);

	});

	function pressBtn(button) {
		$('#shaker').on('mousedown', function() {
			$(this).removeClass('btn_up');
			$(this).addClass('btn_down');
		});
		$('#shaker').on('mouseup', function() {
			$(this).removeClass('btn_down');
			$(this).addClass('btn_up');
		});
	}


	function makeDieFace(dieId) {
		var roll = Math.floor(Math.random() * 6 + 1);
		var all = dieId + ' .dots';
		var dot1 = dieId + '.dot1';
		var dot2 = dieId + '.dot2';
		var dot3 = dieId + '.dot3';
		var dot4 = dieId + '.dot4';
		var dot5 = dieId + '.dot5';
		var dot6 = dieId + '.dot6';
		var dot7 = dieId + '.dot7';
		

		if (roll == 1){
			$(all).hide();
			$(dot4).show();
		}
		if (roll == 2){
			$(all).hide();
			$(dot1 + ', ' + dot7).show();
		}
		if (roll == 3){
			$(all).hide();
			$(dot1 + ', ' + dot4 + ', ' + dot7).show();
		}
		if (roll == 4){
			$(all).show();
			$(dot2 + ', ' + dot4 + ', ' + dot6).hide();
		}
		if (roll == 5){
			$(all).show();
			$(dot2 + ', ' + dot6).hide();
		}
		if (roll == 6){
			$(all).show();
			$(dot4).hide();
		}

		return roll;
	}	
});