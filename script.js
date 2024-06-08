
let selectTem = document.querySelector("#tem");
let result=document.querySelector("#result");
let btn = document.querySelector("button");

       function convertor(){
        let val = document.querySelector("#input").value;

        if(val===" "){
          alert("Enter the valid temperature");
        }

        else if(selectTem.value==="Fahrenheit"){
      let formula1 = (val*1.8)+32;
      var Fahrenheit = formula1.toFixed(2);
      result.innerText=`${val}C to ${Fahrenheit}F`;

    }
    else if(selectTem.value==="Celsius"){
        let formula2 = (val-32)*(5/9);
      
        var Celsius = formula2.toFixed(2);
        result.innerText=` ${val}C to ${Celsius}C`;
    }
   
    else if(selectTem.value==="kelvin"){
      let formula3 = val-273.15; 
      var kel = formula3.toFixed(2);
      result.innerText=`${val}C to ${kel}K`;

    }

   
    
}

        

    




