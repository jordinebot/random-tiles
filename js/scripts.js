$(document).ready(function(e) {
	arrange_tiles(BEST_FIT);
	$(window).resize(function() { arrange_tiles(BEST_FIT); });
});