var Cut4 = function(game) {
	var video;
};

Cut4.prototype = {
    create: function(){
		console.log('cut3');
		video = game.add.video('cut3');
		video.addToWorld();
		video.play(false);

	},
	update: function(){
		game.time.events.add(27000, function () { game.state.start('MainMenu')});
    }
};
