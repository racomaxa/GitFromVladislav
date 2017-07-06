/**
 * Created by student01 on 27.06.2017.
 */
(function(){

    var app = angular.module('graphApp',[]);

    app.controller('graphController', function($scope, $http){

        $scope.show;
        $scope.infoElemet = document.createElement("div");
        $scope.infoElemet.className = "info";
        $scope.infoElemet.style.display="none";
        document.body.appendChild($scope.infoElemet);
        $scope.isNowTarget=null;
        $scope.width = 600;
        $scope.height = 350;
        $scope.yAxis = 'Курс, руб';
        $scope.xAxis = 'Февраль 2016';

        $http.get('example.json').then(function(res) {
            $scope.countries = res.data;
        });

        $scope.data = [
            {
                "day": 1,
                "course":25.55
            },
            {
                "day": 2,
                "course":25.44
            },{
                "day": 3,
                "course":25.87
            },{
                "day": 4,
                "course":25.69
            },{
                "day": 5,
                "course":25.87
            },{
                "day": 6,
                "course":25.33
            },{
                "day": 7,
                "course":25.11
            },{
                "day": 8,
                "course":25.91
            },{
                "day": 9,
                "course":25.87
            },{
                "day": 10,
                "course":25.94
            },{
                "day": 11,
                "course":25.94
            },{
                "day": 12,
                "course":26.08
            },{
                "day": 13,
                "course":26.08
            },{
                "day": 14,
                "course":26.09
            },{
                "day": 15,
                "course":26.14
            },{
                "day": 16,
                "course":26.84
            },{
                "day": 17,
                "course":27.01
            },{
                "day": 18,
                "course":26.72
            },{
                "day": 19,
                "course":26.46
            },{
                "day": 20,
                "course":26.46
            },{
                "day": 21,
                "course":26.44
            },{
                "day": 22,
                "course":26.85
            },{
                "day": 23,
                "course":27.01
            },{
                "day": 24,
                "course":27.23
            },{
                "day": 25,
                "course":27.21
            },{
                "day": 26,
                "course":27.24
            },{
                "day": 27,
                "course":27.24
            },
            {
                "day":28,
                "course":27.46
            }
        ];

       $scope.targetNow = (event)=>{
           let target = event.target;
           console.log(target.getAttribute("data-info"));
           if(target.tagName == "LI") {
               let info = target.getAttribute("data-info");
               if(!info)return;
               $scope.infoElemet.innerHTML = info;
               let coords = target.getBoundingClientRect();
               let left = coords.left + (target.offsetWidth - $scope.infoElemet.offsetWidth) / 2;
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

        $scope.reset = (event)=>{
            let target = event.target;
            if ($scope.show) {
                $scope.infoElemet.style.display="none";
                $scope.show = null;
            }
        };

        $scope.max = 0;

        var arrLength = $scope.data.length;
        for (var i = 0; i < arrLength; i++) {
            if ($scope.data[i].course > $scope.max)
                $scope.max = $scope.data[i].course;
        }


    });

})();