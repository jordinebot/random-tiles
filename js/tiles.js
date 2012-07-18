// Tiles array
var tiles = [];

/**
 * Get random integer
 */
function get_random_integer(upper_limit) {
	Math.floor((Math.random() * upper_limit) + 1);
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
function create_tile(width) {
	var new_t = [];
	new_t.push(width);
	new_t.push(get_random_integer(300));
	new_t.push(get_random_color());
}