angular.module("canvasCmp", []).
component('appDiv', {
  templateUrl: '/tmpl/appDiv.html',  
  controller:function($interval, $http){
      var canvas = document.getElementById('c');
      this.resize = function(){
        canvas.width=canvas.height=(window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth
      }
      this.resize();
      
      window.addEventListener("resize",()=>{
        this.resize()
      })

      var ctx = canvas.getContext("2d")
      var image = document.getElementById("t");
      var tach = document.getElementById("t2");
      var scaleFactor = tach.width / canvas.width
      var ind = document.getElementById("i");

      var val = this.data;
      console.log(val)
      
     this.render = function(val){         
         ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(image,1,2, canvas.width,canvas.height);
    //   ctx.globalAlpha = 0.5;
        ctx.drawImage(tach,1,2, canvas.width,canvas.height);

        ctx.save();            
       
        ctx.translate(canvas.width/2,canvas.height/2)
        ctx.rotate((Math.PI/180)*val)
        ctx.drawImage(ind,-27,-242,ind.width/scaleFactor,ind.height/scaleFactor);
        ctx.restore();
     } 
      

      $interval(()=>{                 
          this.render(this.data);
      },60)
      

  },
  bindings: {
    data: '='
  }
});