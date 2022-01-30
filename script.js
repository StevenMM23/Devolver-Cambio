const billetes = [2000,1000,500,200,100,50,25,10,5,1];

const devuelta = document.getElementById('devuelta');


disableInput();
invisible();
function evaluateMoney(){
    
    
    var dinero = document.getElementById("dinero").value;
    
    for(var i = 0; i <= billetes.length; i++){
        
        if(dinero >= billetes[i]){
            var cantidad = Math.floor(dinero / billetes[i]);
            $(".B" + billetes[i]).fadeIn(450);
            
            document.querySelector(".devueltas").style.justifyContent = "center";
            document.getElementById("B" + billetes[i]).value = cantidad

            dinero -= (billetes[i] * cantidad);   
        }
        else $(".B" + billetes[i]).hide(300);
    }  
    
}
function disableInput(){
    billetes.forEach(x => document.getElementById("B" + x).disabled = true);
}
function invisible(){
    billetes.forEach(x => $(".B" + x).hide());
}
