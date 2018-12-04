
// =================  Toggel Fucntion For Vat Prices Effected files are header.liquid (dropdown) and
// =================  Product-price.liquid (pricing and filters + class names (incvat,exvat))

function vatPricing(){
    console.log('in here');
    var ele = document.getElementsByClassName('incvat');
    // var showPrice=document.getElementById('incvat');
    var hideprice=document.getElementsByClassName('excvat');  
    var x = document.getElementById("vatid").value;

    if(x=="inc"){
  
        for (var i = 0; i < ele.length; i++ ) {
            ele[i].style.display = "block";
            hideprice[i].style.display = "none";
        }
        
    }
    else if(x=="exc")
    {
        for (var i = 0; i < hideprice.length; i++ ) {
            hideprice[i].style.display = "block";
            ele[i].style.display = "none";
        }
        
    }
    else{
        console.log('choose right options');
    }
}