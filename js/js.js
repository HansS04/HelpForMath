/*------------------CTVEREC----------------------*/
let ctvereca = 0;
let ctvereca2 = 0;
/*Obsah*/

document.getElementById('ctverecobs').addEventListener('click',function(){
    ctvereca = document.getElementById('ctvereca').value;
    function obsahct(a){
  
   
        return a * a;
    }

    document.getElementById('vysledek1').innerHTML = "<p>" + obsahct(ctvereca).toFixed(2) + " cm^2 </p>"
    ctvereca = 0;
});
/*obvod*/

function obvodct(a){
  
   
    return a * 4;
}
document.getElementById('ctverecobv').addEventListener('click',function() {
    ctvereca2 = document.getElementById('ctvereca2').value;
  

    document.getElementById('vysledek2').innerHTML = "<p>" + obvodct(ctvereca2).toFixed(2) + " cm </p>"
    ctvereca2 = 0;
});




