angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('BrowseCtrl', function($scope) {
  $scope.redirect = function(){
    window.location = "#/app/testview";
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { 
      title: 'Reggae', 
      image: 'img/a.png', 
      des: '', 
      id: 1 
    },
    { 
      title: 'Chill', 
      image: 'img/b.png', 
      des: '', 
      id: 2 
    },
    { 
      title: 'Dubstep', 
      image: 'img/c.png', 
      des: '', 
      id: 3 
    },
    { 
      title: 'Indie', 
      image: 'img/d.png', 
      des: '', 
      id: 4 
    },
    { 
      title: 'Rap', 
      image: 'img/e.png', 
      des: '', 
      id: 5 
    },
    { 
      title: 'Cowbell', 
      image: 'img/f.png', 
      des: '', 
      id: 6 
    }
  ];
})

/* Active side-bar */
.controller('HeaderController', function($scope, $location){
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
  
})

/* Playlist item controller */
.controller('PlaylistCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate) {
  //Next slide function
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
});
