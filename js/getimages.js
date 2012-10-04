var SERVICE_TUMBLR = 0;

function load_image_array(json_URI, service, width) {
	
	var max_images = 100;

	switch(service) {

		case 0: // TUMBLR
			return ng_parse_tumblr_json(json_URI, max_images, width);
			break;

		default:
			return 0;
			break;

	}

}

// JQuery Ajax version
function jquery_parse_tumblr_json(json_URI, max_images, width) {

	var array = new Array();

	// I add "callback=?" param to avoid "Origin <X> is not allowed by Access-Control-Allow-Origin" error. More info:
	// http://stackoverflow.com/questions/3595515/xmlhttprequest-error-origin-null-is-not-allowed-by-access-control-allow-origin

	$.getJSON(json_URI + '&callback=?', function(data){

		for (var i = 0; i < data.response.length; i++) {

			var item = new Array();

			item.push(data.response[i].photos[0].original_size.url);
			item.push(data.response[i].photos[0].original_size.width);
			item.push(data.response[i].photos[0].original_size.height);

			array.push(item);

		}

		// Once array is filled, we build tiles.
		init_image_tiles(array, width)

	});

}

// Angular Ajax version
function ng_parse_tumblr_json(data) {

	var array = new Array();

	for (var i = 0; i < data.response.length; i++) {

		var item = new Array();

		item.push(data.response[i].photos[0].original_size.url);
		item.push(data.response[i].photos[0].original_size.width);
		item.push(data.response[i].photos[0].original_size.height);

		array.push(item);

	}

	return array;

}




