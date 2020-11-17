/*-------------Kruh---------------*/
let kruhr = 0;
let kruhr2 = 0;
/*Obsah*/
function obsah(r){
    let pi= Math.PI
     
    return pi * r * r ;
      }
document.getElementById('kruhobs').addEventListener('click',function(){
    kruhr = document.getElementById('kruhr').value;

    document.getElementById('kruhobs2').innerHTML = "<p>" + obsah(kruhr).toFixed(2) + " cm^2 </p>"
    kruhr = 0;
    
});
/*obvod*/
function obvod(r){
    
    let pi= Math.PI
     
    return pi * r * 2 ;
}

document.getElementById('kruhobv').addEventListener('click',function() {
    kruhr2 = document.getElementById('kruhr2').value;
    
   

    document.getElementById('kruhobv2').innerHTML = "<p>" + obvod(kruhr2).toFixed(2) + " cm </p>"
    kruhr2 = 0;
  
});