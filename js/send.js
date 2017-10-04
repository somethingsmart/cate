//ajax post
$(function() {
	$('form.ajax').on(
		var url = $(this).attr('action'),
			type = $(this).attr('method'),
			data = {};
		$(this).find('[name]').each(function(index, value) {
			var name = $(this).attr('name'),
				value = $(this).val();
			data[name] = value;
		});
		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function() {
				//
				$('form.ajax').find('[name]').each(function(index, value) {
					$(this).html = "";
				});
			};
		});
	);
});