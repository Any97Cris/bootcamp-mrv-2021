var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

currentNumberWrapper.addEventListener(decrement,increment);

function decrement() {    
     
    if(currentNumber > -10){
        currentNumber--; 
        currentNumberWrapper.innerHTML = currentNumber;        
    }else{
        currentNumberWrapper.removeEventListener('click',increment);
    }     
    cor()  
}

function increment() {            
    if(currentNumber < 10){ 
        currentNumber++;       
        currentNumberWrapper.innerHTML = currentNumber;               
    }  else{
        currentNumberWrapper.removeEventListener('click',increment);
    }   
    
}

 function cor() {
     if(currentNumber <= 1){
         currentNumberWrapper.style.color = "red"
     }
     else{
        currentNumberWrapper.style.color = "black"
     }
 }






