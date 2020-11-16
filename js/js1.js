/*----------------------------------------*/
let obdelnika = 0;
let obdelnika2 = 0;
let obdelnikb = 0;
let obdelnikb2 = 0;
/*Obsah*/

document.getElementById('obdelnikobs').addEventListener('click',function(){
    obdelnika = document.getElementById('obdelnika').value;
    obdelnikb = document.getElementById('obdelnikb').value;

    function obsah(a,b){
  
   
        return a * b;
    }

    document.getElementById('obdelnikobs2').innerHTML = "<p>" + obsah(obdelnika,obdelnikb).toFixed(2) + " cm^2 </p>"
    obdelnika = 0;
    obdelnikb = 0;
});
/*obvod*/
function obvod(a,b){
    parseFloat(a);
    parseFloat(b);
    a +=b;
    return 2*a;
}

document.getElementById('obdelnikobv').addEventListener('click',function() {
    obdelnika2 = document.getElementById('obdelnika2').value;
    obdelnikb2 = document.getElementById('obdelnikb2').value;
   

    document.getElementById('obdelnikobv2').innerHTML = "<p>" + obvod(obdelnika2, obdelnikb2).toFixed(2) + " cm </p>"
    obdelnika2 = 0;
    obdelnikb2 = 0;
});