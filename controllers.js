app.controller('GlobalController', function($scope, $location){
  $scope.go = function(path) {
    $location.path(path)
  };
  $scope.isClicked = function(path) {
    return path == $location.path()
  }
})

app.controller('HomeController', function($scope){
  $scope.message = "Hello!"
});
// app.controller('DogsController', function($scope){
//   $scope.message = "Woof Woof!"
// });
app.controller('AboutController', function($scope){
  $scope.food = "Sushi"
});

app.controller('ContactController', function($scope){
  $scope.numberz = '6097330022';
});