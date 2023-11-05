function caseUpdate (isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease){
       newCaseNumber = previousCaseNumber + 1;
    }
    else{
       newCaseNumber = previousCaseNumber - 1;
    }

   
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

////////////////////// case calculate /////////////

function casePrice(newCaseNumber){
    const casePrice = newCaseNumber * 59;

    const caseNumberField = document.getElementById('case-total')
    caseNumberField.innerText = casePrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber = caseUpdate(true)
   casePrice(newCaseNumber);

  
   getSubTotal();
});

///////////////////////////////////


document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = caseUpdate(false)
    casePrice(newCaseNumber);
    
    getSubTotal();
});

//////////////////////////////////


