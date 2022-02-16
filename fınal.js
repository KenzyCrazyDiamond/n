var hour=document.getElementById("hour");
var min=document.getElementById("min");
var sec=document.getElementById("sec");


var clock=setInterval(
    function time() {
      var date_now = new Date();
        var hr = date_now.getHours();
        var mins = date_now.getMinutes();
        var secs = date_now.getSeconds();
        
        
        if(hr < 10){
            hr = "0" + hr;
        }
        
         if(mins < 10){
            mins = "0" + mins;
        }
        
         if(secs < 10){
            secs = "0" + secs;
        }
        
        
       hour.textContent=hr;
       min.textContent=mins; 
       sec.textContent=secs;
        
        
        
    },1000
)