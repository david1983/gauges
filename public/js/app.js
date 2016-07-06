
angular.module("gaugeApp", ['canvasCmp'])
.controller('mainCtrl', function($scope,$interval,$http){
    var socket = io.connect('http://localhost:8001');
    console.log(socket)
    socket.on('sensor',(data)=>{

        $scope.$apply(()=>{
        this.test = (360 * data.value) /1024
        })
    })
    console.log('ok')
})

