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
	var num_columns = Math.floor($(window).width() / $('.tile').outerWidth(true));
	var col = 0;
	var vertical_position = new Array();
	
	for (var i = 0; i < num_columns; i++)
		vertical_position.push(0);
	
	$('.tile').each(function(index, element) {
		
		$(this).css('left', col * $(this).outerWidth() + 'px');
		$(this).css('top', vertical_position[col] + 'px');
		vertical_position[col] += $(this).outerHeight() + 1;
		col = (col + 1 ) % num_columns;
    });
	
}
