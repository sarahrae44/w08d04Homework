const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http) {

  const controller=this;


  this.getDevMovies =function(){

    $http({
      method: 'GET',
      url: '/devMovies'
    }).then(
      function(response){
        controller.devMovies=response.data

      },
      function(error){

      }
    )
  }

  this.createDevMovie =function(){
console.log("createTodo");
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
    );
  }

  this.updateDevMovie = function(todo){
    let NewComplete;
    if(todo.complete === true){
      newComplete = false;
    } else {
        newComplete = true;
      }
      $http({
        method: 'PUT',
        url: '/devMovies/' + devMovie._id,
        data: {
          description: todo.description,
          complete: newComplete
        }
      }).then(
        function(response){
          controller.getDevMovies();
        },
        function(error){

        }
      );
    }

    this.editDevMovie = function(todo){
    console.log(todo);
        $http({
          method: 'PUT',
          url: '/devMovies/' + devMovie._id,
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
        );
      }

   this.deleteDevMovie = function(todo){
     console.log(todo);
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


  this.getDevMovies();
}])
