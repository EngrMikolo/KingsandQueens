angular.module("utilsService", [])

.factory("utilitiesService", function($timeout, $http){
   
  return {
          SendMail: function (from, subject, text) {

                    var isSent = false;
                    var parameter = JSON.stringify({from:from, subject:subject, text:text});

            return $timeout(function() {
                 return $http.post('/sendmail', parameter).then(function(res) {
            
                      
                           isSent = true;
                           return isSent;
                        });

                  }, 0);

          }

        };
});