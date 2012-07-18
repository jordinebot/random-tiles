// Tiles array
var tiles = [];
var 

/**
 * Get random integer
 */
function get_random_integer(upper_limit) {
	var number = Math.floor((Math.random() * upper_limit) + 1);
	return number;
}

/**
 * Get random HTML color
 */
function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

/**
 * Create a random tile
 */
function create_tile(width, max_height) {
	var new_t = new Array();
	new_t['width'] = width;
	new_t['height'] = get_random_integer(max_height);
	new_t['color'] = get_random_color();
	return new_t;
}

/**
 * Init tiles array
 */
function init_tiles(number_of_tiles, width, max_height) {
	for (var i = 0; i < number_of_tiles; i++) {
		var new_t = create_tile(width, max_height);
		tiles.push(new_t);
	}
}





