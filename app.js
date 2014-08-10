angular.module('app', [])
    .controller('mainCtrl', ['$scope', function($scope) {
		$scope.techs = [
			{text:'HTML5', done:false },
			{text:'CSS3', done:false },
			{text:'SASS', done:false },
			{text:'JavaScript', done:false },
			{text:'AngularJS', done:false },
			{text:'Jekyll', done:false },
			{text:'Wintersmith.io', done:false },
			{text:'Jade', done:false }
		];

		$scope.addTech = function() {
			$scope.techs.push({text:$scope.techText, done:true});
			$scope.techText = '';
		};
	}]);