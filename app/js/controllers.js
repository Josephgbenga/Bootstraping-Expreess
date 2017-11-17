// 'use strict';

/* Controllers */

angular.module('myApp',[]).
  controller('SiteController', function($scope) {
  		$scope.publisher= 'Sitepoint';
  		$scope.type="Web Development";
  		$scope.name= "Scope for SiteController";
  		

  });



  angular.module('myApp').controller('BookController',function($scope){
  	$scope.books=['Jump Start Html5', 'Jump Start Css', 'Jump Start Responsive Web Design'];
  	$scope.name="Scope for BookController"
  	$scope.addToWishList= function(book){
  		$scope.wishListCount++;
  	};
  	$scope.wishListCount=0;
  	$scope.$watch('wishListCount',function(newValue,oldValue){
  		console.log('called'+ newValue+'times');
  		if(newValue==2){
  			alert('Great! You have 2 items in your wish List. Time to buy what you love')
  		}
  	})


  })
  // .controller('MyCtrl2', [function() {

  // }]);