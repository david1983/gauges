angular.module("canvasCmp", []).
component('appDiv', {
    templateUrl: '/tmpl/appDiv.html',
    controller:function($scope, $interval){
        var canvas = document.getElementById('tachBckgrnd');
        var indicator = document.getElementById('indicator');
        //indicator.height = indicator.height*1

        console.log(canvas.height)
        console.log(this.data)

        canvas.style.width = "100%"
        this.resize = function(){
            var myImage = new Image();
            myImage.src = '/img/tach.png';

            var dim =(window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth
            console.log(myImage.width, dim);
            var scale = dim / myImage.width;
            console.log(scale)

            myImage = new Image();
            myImage.src = '/img/indicator.png';
            indicator.style.width = indicator.style.height = dim+"px"
            canvas.style.width=canvas.style.height = dim+"px"
        }
        this.resize();

        window.addEventListener("resize",()=>{
            this.resize()
        })
        $interval(()=>{
            if(this.data)
            indicator.style.transform = "translateX(-50%) translateY(-50%)  rotateZ(" + this.data + "deg)"
        },60)
    },
    bindings: {
        data: '='
    }
});