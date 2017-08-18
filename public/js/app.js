const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http) {
  const controller=this;
  this.devMovies = [];
  this.indexOfEditFormToShow = 0;


  this.getDevMovies =function(){

    $http({
      method: 'GET',
      url: '/devMovies'
    }).then(
      function(response){
        controller.devMovies = response.data;
      },
      function(error){

      }
    );
  }

  this.createDevMovie = function(){
    $http({
      method: 'POST',
      url: '/devMovies',
      data: {
        title: this.title,
        year: this.year
        }
      }).then(
        function(response){
          controller.getDevMovies();
        },
        function(error){

        }
    )
  }



    this.editDevMovie = function(devMovie){
        $http({
          method: 'PUT',
          url: '/devMovies/' + devMovie._id,
          data: {
            title: this.updatedTitle,
            year: this.updatedYear
          }
        }).then(
          function(response){
            controller.getDevMovies();
          },
          function(error){

          }
        );
      }

   this.deleteDevMovie = function(devMovie){
     $http({
       method: 'DELETE',
       url: '/devMovies/' + devMovie._id,
     }).then(
       function(response){
         controller.getDevMovies();
       },
       function(error){

        }
     );
   }

  // this.createDevMovie();
  this.getDevMovies();
}])
