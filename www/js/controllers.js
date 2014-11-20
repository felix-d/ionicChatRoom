angular.module('starter.controllers', [])

.controller('DashCtrl', ["$scope", "chatMessages", function($scope, chatMessages ) {
    $scope.messages = chatMessages;
    $scope.mess = {};
    $scope.addMessage = function(message) {
      $scope.messages.$add({content: message});
      $scope.mess.m = "";
    };
// if the messages are empty, add something for fun!
    $scope.messages.$loaded(function(messages) {
        if( messages.length === 0 ) {
            messages.$add({content: 'Hello world!'});
        }

    });
}])
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
