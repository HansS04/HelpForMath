let body = 0;


document.getElementById("check").addEventListener("click", function(){
    
     
  
  
   if ( document.getElementById('ano').checked != true){
       console.log("1spatne");    
   }
   else {
       body++;
       console.log(body);
   }
  
   if ( document.getElementById('ano1').checked != true){
    console.log("2spatne");  
   }
   else{
    body++;
    console.log(body);
   } 
   if ( document.getElementById('ano2').checked != true){
    console.log("3spatne");  
   }
   else{
    body++;
    console.log(body);
   }if ( document.getElementById('ano3').checked != true){
    console.log("4spatne");  
   }
   else{
    body++;
    console.log(body);
   }if ( document.getElementById('ano4').checked != true){
    console.log("5spatne");  
   }
   else{
    body++;
    console.log(body);
   }
   console.log(body);
  
   
   document.getElementById('test').innerHTML = "<h2>Nasbíral/a jste " + body + " bodů. Známka:" + hodnoceni(body) +"</h2>";
});

function hodnoceni(b){
    console.log(b);
    if (b>=5){
        return 1;
    }
    else if (b>=4){
        return 2;
    }    
    else if (b>=3){
        return 3;
    }
    else if (b<=2){
        return 4;
    }
    else if (b>=1){
        return 5;
    }
    else if (b>=0){
        return 5;
    }
}
