
// =================  Toggel Fucntion For Vat Prices Effected files are header.liquid (dropdown) and
// =================  Product-price.liquid (pricing and filters + class names (incvat,exvat))


var vatApp=(function(){
       // Method To Control Pricing  
    function vatPricing()
    {
        
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
            console.log('Please choose right options');
        }
    }

//   ==============   INITIALIAZE APP. ====================
    function init()
    {
        
    }
    return {
        init:init,
        pricing:vatPricing
    }

})();

vatApp.init();


