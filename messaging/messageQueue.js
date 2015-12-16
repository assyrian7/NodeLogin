
module.exports = function(messageQueue, channel){

	messenger.connect(function(){
	  		// emits events for each new message on the channel 
	  	messenger.on(channelName, function(message){
	    	console.log(channelName, message);
	  	});
	});

	messenger.subscribe(channelName, true); //subscribe 
	messenger.subscribe(channelName, false); //unsubscribe 
	 
	 
	// you can send without connect() first. 
	messenger.send(channelName, {some: 'message'}, function(err){
		console.log(err);
	  	console.log('Sent message');
	});
}