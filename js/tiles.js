// Tiles array
var tiles = [];

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
		new_t['id'] = i;
		tiles.push(new_t);
	}
}

/**
 * Calculate absolute coordinates for each tile
 */
function arrange_tiles() {
	var external_gap = 20;
	var internal_gap  = 10;
	var num_columns = Math.floor(($(window).width() - external_gap) / ($('.tile').outerWidth(true) + internal_gap));
	var col = 0;
	var vertical_position = new Array();
	
	for (var i = 0; i < num_columns; i++)
		vertical_position.push(0);
	
	$('.tile').each(function(index, element) {
		
		$(this).css('left', (col + 1)  * 10 + col * $(this).outerWidth() + 'px');
		$(this).css('top', vertical_position[col] + 10 + 'px');
		vertical_position[col] += $(this).outerHeight() + 10;
		col = (col + 1 ) % num_columns;
    });
	
}
