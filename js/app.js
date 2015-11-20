var app = angular.module('Twitchtv',[])

app.controller('MainController', ['$scope','$http', function($scope, $http) {
	
	
	
  /* TWITCHTV USERS */
	$scope.userNames = ['freecodecamp','storbeck','imaqtpie','amazHS','terakilobyte','brunofin','comster404 ','habathcx','RobotCaleb','thomasballinger','noobs2ninjas','beohoff'];
  
	
	/* LIST OF USERS AND STREAM INFO */
	$scope.users = [];
	
	
	/* JSON CALLS TO GET USER AND STREAM DATA  */
	$scope.userNames.forEach(function(user) { 
		var temp = {};
		
		$http.jsonp('https://api.twitch.tv/kraken/users/'+user+'?&format=json&callback=JSON_CALLBACK').success(function(data){
			if( !("error" in data) ){
				temp.name = user;
				temp.logo = data.logo ? data.logo : "http://s.jtvnw.net/jtv_user_pictures/hosted_images/GlitchIcon_purple.png";
				
				$http.jsonp('https://api.twitch.tv/kraken/streams/'+user+'?&format=json&callback=JSON_CALLBACK').success(function(data){
					if (data.stream != null){
						temp.presence = "online";
						temp.streamInfo = "Now Playing: " + data.stream.game;
					}
					else {
						temp.presence = "offline";
						temp.streamInfo = "Currently offline";
					}	
				});
			}
			else {
				temp.name = user;
				temp.logo = "https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-128.png";
				temp.streamInfo = "User can not be found!";
				temp.presence = "notfound";
			}
			
		});
		
		
		$scope.users.push(temp);
	
	});
	
	/* DETERMINE ONLINE 7 OFFLINE BACKGROUND COLOR */
  $scope.whichBG = function(user) {
    if (user.presence === "online"){
      return 'online';
    }
    else if (user.presence === "offline"){
      return 'offline';
    }
    else {
      return 'notfound';
    }
  }
  
  
}]);