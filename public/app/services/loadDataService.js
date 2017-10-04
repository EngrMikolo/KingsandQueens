angular.module("loadDataService", [])

.factory("dataService", function($timeout, $http){
   
  return {
    loadExecutives: function () {
      var executives = [];

      return $timeout(function() {
           return $http.get('JSON/Choristers.json').then(function(response) {

                var choristers = response.data.members
                
                  for(var i = 0; i<choristers.length; i++){

                    if(choristers[i].Executive){
                      executives.push(choristers[i]);
                    }
    
                  }
                    return executives;
                  });
            }, 0);
    },

    loadChoristers: function () {
        return $timeout(function() {
           return $http.get('JSON/Choristers.json').then(function(response) {
                return response.data;
                });
            }, 0);
    },

    loadEvents: function () {
        return $timeout(function() {
           return $http.get('JSON/Events.json').then(function(response) {
                return response.data;
                });
            }, 0);
    },

    getChoristerbyId: function(id) {
      var chorister = null;

      return $timeout(function() {
           return $http.get('JSON/Choristers.json').then(function(response) {

                var choristers = response.data.members
                
                  for(var i = 0; i<choristers.length; i++){

                    if(choristers[i].id === id){
                      chorister = choristers[i]
                                      break;
                    }
    
                  }
                    return chorister;
                  });
            }, 0);
    }

  };
});