/*POKEDEX*/
(function($) {
	var quantity = 12;
	console.log(quantity);
	var url = 'http://pokeapi.co/api/v1/pokemon/?limit=';
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', url + quantity, true);
	xhttp.send(null);
	xhttp.onreadystatechange = function() {
		if(xhttp.readyState === 4 && xhttp.status === 200) {
			var json = eval('(' + xhttp.responseText + ')');
			for(i = 0; i < json.objects.length; i++) {
				console.log(json.objects[i].national_id);
					$('.small-card-section').append($('<div class="small-card">' +
				'<img src="http://pokeapi.co/media/img/' + json.objects[i].national_id + '.png">' +
				'<h2 class="title">' + json.objects[i].name +
				'<span class="title-2">' + json.objects[i].national_id + '</span>' + '</h2>' +
				'<p><span class="title-2">Type</span>' +
				'<span class="type">' + json.objects[i].types[0].name + '</span>' + '</p>' + 
				'<p><span class="title-2">Attack</span>' +
				'<span class="title-2">' + json.objects[i].attack + '</span></p>' +
				'<p><span class="title-2">Defense</span>' +
				'<span class="title-2">' + json.objects[i].defense + '</span></p>' +
				'<p><span class="title-2">HP</span>' +
				'<span class="title-2">' + json.objects[i].hp + '</span></p>' +
				'<p><span class="title-2">SP Attack</span>' +
				'<span class="title-2">' + json.objects[i].sp_atk +
				'<p><span class="title-2">SP Defense</span>' +
				'<span class="title-2">' + json.objects[i].sp_def +
				'<p><span class="title-2">Speed</span>' +
				'<span class="title-2">' + json.objects[i].speed +
				'<p><span class="title-2">Weight</span>' +
				'<span class="title-2">' + json.objects[i].weight +
				'<p><span class="title-2">Total moves</span>' +
				'<span class="title-2">' + json.objects[i].moves.length + '</span></p>'+'</div>'));
			}
			$('.small-card').click(function() {
				$('.new-card').remove();
				$(this).clone().prependTo($('.hight-card-section')).removeClass().addClass('new-card');
				$('.new-card .title-2').removeClass().addClass('new-title-2');
				console.log(this);
			});

			$('.more').click(function() {
				
				xhttp.onreadystatechange();
				quantity += 12;
				// return d;
				console.log(quantity);
			});
		}
	}
}(jQuery));
