var app = angular.module('Twitchtv',[])

app.controller('MainController', ['$scope','$http', function($scope, $http) {
  
	$scope.userNames = ['freecodecamp','storbeck','terakilobyte','habathcx','RobotCaleb','thomasballinger','noobs2ninjas','beohoff','medrybw'];
  
  $scope.whichBG = function(user) {
    if (user.online === true){
      return 'online';
    }
    else {
      return 'offline';
    }
  }
  
  /* USERS */
  $scope.users = {
    freecodecamp : {name:"",logo:"",streamInfo:""},
    storbeck :  {name:"",logo:"",streamInfo:""},
    terakilobyte :  {name:"",logo:"",streamInfo:""},
    habathcx :  {name:"",logo:"",streamInfo:""},
    RobotCaleb :  {name:"",logo:"",streamInfo:""},
    thomasballinger :  {name:"",logo:"",streamInfo:""},
    noobs2ninjas :   {name:"",logo:"",streamInfo:""},
    beohoff :  {name:"",logo:"",streamInfo:""},
		medrybw:  {name:"",logo:"",streamInfo:""}
    };

  /* JSON CALLS TO GET USER AND STREAM DATA */
	$scope.userNames.forEach(function(user) {
		$http.jsonp('https://api.twitch.tv/kraken/users/'+user+'?&format=json&callback=JSON_CALLBACK').success(function(data){
			$scope.users[user].name = data.name;
			$scope.users[user].logo = data.logo;
		
		});
  	$http.jsonp('https://api.twitch.tv/kraken/streams/'+user+'?&format=json&callback=JSON_CALLBACK').success(function(data){
			$scope.users[user].streamInfo = data;
			if (data.stream != null){
				$scope.users[user].online = true;
				$scope.users[user].streamInfo = "Now Playing: " + data.stream.game;
			}
			else {
				$scope.users[user].online = false;
				$scope.users[user].streamInfo = "Currently offline";
			}
				
		});
		
	});
  /*$http.jsonp('https://api.twitch.tv/kraken/users/freecodecamp?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.freecodecamp.userInfo = data;});
  $http.jsonp('https://api.twitch.tv/kraken/streams/freecodecamp?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.freecodecamp.streamInfo = data;});
  
  $http.jsonp('https://api.twitch.tv/kraken/users/storbeck?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.storbeck.userInfo = data;});
  $http.jsonp('https://api.twitch.tv/kraken/streams/storbeck?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.storbeck.streamInfo = data;});
  
  $http.jsonp('https://api.twitch.tv/kraken/users/terakilobyte?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.terakilobyte.userInfo = data;});
  $http.jsonp('https://api.twitch.tv/kraken/streams/terakilobyte?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.terakilobyte.streamInfo = data;});
  
  $http.jsonp('https://api.twitch.tv/kraken/users/habathcx?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.habathcx.userInfo = data;});
  $http.jsonp('https://api.twitch.tv/kraken/streams/habathcx?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.habathcx.streamInfo = data;});
  
  $http.jsonp('https://api.twitch.tv/kraken/users/RobotCaleb?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.RobotCaleb.userInfo = data;}); 
  $http.jsonp('https://api.twitch.tv/kraken/streams/RobotCaleb?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.RobotCaleb.straemInfo = data;});
  
    $http.jsonp('https://api.twitch.tv/kraken/users/thomasballinger?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.thomasballinger.userInfo = data;}); 
  $http.jsonp('https://api.twitch.tv/kraken/streams/thomasballinger?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.thomasballinger.straemInfo = data;});
  
$http.jsonp('https://api.twitch.tv/kraken/users/noobs2ninjas?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.noobs2ninjas.userInfo = data;}); 
$http.jsonp('https://api.twitch.tv/kraken/streams/noobs2ninjas?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.noobs2ninjas.straemInfo = data;});

$http.jsonp('https://api.twitch.tv/kraken/users/beohoff?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.beohoff.userInfo = data;}); 
$http.jsonp('https://api.twitch.tv/kraken/streams/beohoff?&format=json&callback=JSON_CALLBACK').success(function(data){$scope.users.beohoff.streamInfo = data;});*/

  
  
  
}]);