var SERVICE_TUMBLR = 0;

function get_image_array(json_URI, service) {
	
	var max_images = 100;

	switch(service) {

		case 0: // TUMBLR
			return parse_tumblr_json(json_URI, max_images);
			break;

		default:
			return 0;
			break;

	}

}

function parse_tumblr_json(json_URI, max_images) {

	var new_array = new Array();

	// I add "callback=?" param to avoid "Origin <X> is not allowed by Access-Control-Allow-Origin" error. More info:
	// http://stackoverflow.com/questions/3595515/xmlhttprequest-error-origin-null-is-not-allowed-by-access-control-allow-origin 

	$.ajax({
        url: json_URI + '&callback=?',
        async: true,
        dataType: 'json',
        success: function(data) {

	        for (var i = 0; i < data.response.length; i++) {

				var item = new Array();

				item.push(data.response[i].photos[0].original_size.url);
				item.push(data.response[i].photos[0].original_size.width);
				item.push(data.response[i].photos[0].original_size.height);

				new_array.push(item);
			}

		}

	});

	alert(new_array);

}