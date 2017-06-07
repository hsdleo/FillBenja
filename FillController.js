    (function(){

     angular.module('app')
     .controller('fillController', fillController);

     fillController.$inject = ['$scope'];
     function homeController($scope) {
       $scope.format = 'mm:ss';
      $scope.mesage = "vamooooo!!";

      $scope.tocarSirene = function () {
        $scope.audioSirene.setVolume(0.2);
        $scope.audioSirene.playPause();
      };
    

           $scope.dicas = [{"id":"1","texto":"Dica do Armário"},
           {"id":"2","texto":"Dica do Feijão"},
           {"id":"3","texto":"Dica do Alface"},
           {"id":"4","texto":"Dica do Renatão"},
           {"id":"5","texto":"Dica do Dix"}];

           $scope.funcao1 = function(dica){
             $scope.message = dica.id;
             console.log(dica.id);
           };
           
        }
      })();
