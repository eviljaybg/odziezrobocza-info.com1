function doAjax(url, target, params) {
	$.ajax({
		url: url,
		data: params,
		beforeSend: function () {
			$(target).html('<div class="loading"></div>');
		},
		success: function(data) {
			$(target).html(data);
		},
		error: function(data) {
			$(target).html(data).addClass('ajaxerror');
		}
	});
}

function kasujZdjecie(url, target, params) {

	var answer = confirm("Na pewno usunąć zdjęcie ?")
	if (answer){
		$(target).css('border', '1px solid #EEE').css('text-align', 'center');
		
		$.ajax({
			url: url,
			data: params,
			success: function(data) {
				$(target).html(data);
				$(target).delay(2000).fadeOut('slow');
			},
			error: function(data) {
				$(target).html(data).addClass('ajaxerror');
			}
		});
	}
}

function searchAutocomplete(target) {
	console.log(target);
}















