function updatePhoneTotalNumber(isIncrease) {
    const caseNumberField = document.getElementById('phone-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

/////////////////////////////
function updatePhoneTotalPrice(newCaseNumber) {
    const phoneTotalPrice = newCaseNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newCaseNumber = updatePhoneTotalNumber(true);
    updatePhoneTotalPrice(newCaseNumber);
    getSubTotal();


});

///////////////////////////////////


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newCaseNumber = updatePhoneTotalNumber(false);
    updatePhoneTotalPrice(newCaseNumber);

    getSubTotal();


});

////////////phone price calculate /////////////

