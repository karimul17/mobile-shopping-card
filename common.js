function getSubTotalID(element, ){
    const sutTotalField = document.getElementById(element);
    const subTotalString = sutTotalField.innerText;
    const subTotal = parseInt(subTotalString);
return subTotal;
}

/////////////////////////////////////

function getSubTotal (){
 const phoneCalculate = getSubTotalID('phone-total')
 const caseCalculate = getSubTotalID('case-total')

 const subTotal1 = phoneCalculate + caseCalculate;
  
 const subTotalElement = document.getElementById('sub-total');
///////////text amount /////////////

function settElementById (element, value){
    const sutTotalField = document.getElementById(element);
    sutTotalField.innerText = value
}
// tax total 
const texAmountString = (subTotal1 * 0.1).toFixed(2);
const texAmount = parseFloat (texAmountString)
settElementById('tax-amount',texAmount)
 subTotalElement.innerText = subTotal1;
// fainal total
 const finalAmount = subTotal1 + texAmount;
 settElementById('final-total', finalAmount)
}