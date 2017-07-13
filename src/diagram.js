/**
 * Created by student01 on 27.06.2017.
 */

    var app = angular.module('graphApp',[]);

    app.controller('graphController', function($scope, $http){

        $scope.show;
        $scope.infoElemet = document.createElement("div");
        $scope.infoElemet.className = "info";
        $scope.infoElemet.style.zIndex = 3;
        $scope.infoElemet.style.display="none";
        document.body.appendChild($scope.infoElemet);
        $scope.isNowTarget=null;
        $scope.width = 600;
        $scope.height = 350;
        $scope.yAxis = 'Курс, BYN по отношению к USD';
        $scope.xAxis = 'Февраль 2017';
        $scope.max = 0;


        $http.get("http://www.nbrb.by/API/ExRates/Rates/Dynamics/145?startDate=2017-2-1&endDate=2017-2-28")
            .then(function(response) {
                $scope.details = response.data;
                $scope.count = $scope.details.length;
                console.log($scope.count);

                let arrLength = $scope.count;
                console.log(arrLength);
                for (let i = 0; i < arrLength; i++) {
                    if ($scope.details[i].Cur_OfficialRate > $scope.max)
                        $scope.max = $scope.details[i].Cur_OfficialRate;
                }
            });



       $scope.targetNow = (event)=>{
           let target = event.target;
           if(target.tagName == "rect" ) {
               let info = target.getAttribute("data-info");
               if(!info)return;
               $scope.infoElemet.innerHTML = info;
               let coords = target.getBoundingClientRect();
               let left = coords.left + (16 - $scope.infoElemet.offsetWidth) / 2;
               if (left < 0) left = 0;
               let top = coords.top - $scope.infoElemet.offsetHeight - 5;
               if (top < 0) {
                   top = coords.top + target.offsetHeight + 5;
               }
               $scope.infoElemet.style.left = left + 'px';
               $scope.infoElemet.style.top = top + 'px';
               $scope.show = $scope.infoElemet;
               $scope.infoElemet.style.display = "block";
           }else return;
       };
        $scope.trash = (event)=>{
            let target = event.target;
            alert(target.getAttribute("data-info"));
        };

        $scope.reset = (event)=>{
            let target = event.target;
            if ($scope.show) {
                $scope.infoElemet.style.display="none";
                $scope.show = null;
            }
        };

    });

