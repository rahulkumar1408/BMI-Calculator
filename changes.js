var form = document.querySelector('form');

form.addEventListener('submit',function(e){
   e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');
   
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Please give a valid height ${height}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`;
    }    
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Please give a valid weight ${weight}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`;
    }
    else{
        const bmiResult = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmiResult}</span>`;

        if(bmiResult < 18.6){
            results.innerHTML = `_______________________________________${bmiResult} - you are Under weight______________________________________`;
        }
        else if(bmiResult > 18.6 && bmiResult <= 24.9){
            results.innerHTML = `_______________________________________${bmiResult} - you are in Normal Range___________________________________`;
        }
        else{
            results.innerHTML = `_______________________________________${bmiResult} - you are Overweight_______________________________________`;
        }
    }

});



