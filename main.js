//Phone Part Start

//Increase Plus Phone Number
document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const phoneInputPlus = document.getElementById('phone-number-field');
  const phoneInputPlusString= phoneInputPlus.value;
  const phoneInputPlusTotal = parseInt(phoneInputPlusString);
  const newTotalPlus = phoneInputPlusTotal + 1;
  phoneInputPlus.value = newTotalPlus;
  
  const phonePricePlus = document.getElementById('phone-total');
  const newPhoneTotal = newTotalPlus * 1219;
  phonePricePlus.innerText=newPhoneTotal;
})


//Decreasing Phone Number

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const phoneInputMinus = document.getElementById('phone-number-field');
  const phoneInputMinusString = phoneInputMinus.value;
  const phoneInputMinusTotal = parseInt(phoneInputMinusString);
  const prePhoneTotalMinus = phoneInputMinusTotal - 1;
  phoneInputMinus.value = prePhoneTotalMinus;
  
  const phoneTotalMinus = document.getElementById('phone-total');
  const newPhoneTotalMinus = prePhoneTotalMinus * 1219;
   phoneTotalMinus.innerText = newPhoneTotalMinus;
})






//Case Part Start

//plus Case Number

document.getElementById('btn-case-plus').addEventListener('click', function(){
  const caseNumberPlus = document.getElementById('case-number-field');
  const caseNumberPlusString = caseNumberPlus.value;
  const previousCaseNumberPlus = parseInt(caseNumberPlusString);
  const newCaseNumberPlus = previousCaseNumberPlus + 1;
  caseNumberPlus.value = newCaseNumberPlus;
  
  const caseTotal = document.getElementById('case-total');
  const newCaseTotal = newCaseNumberPlus*59;
  caseTotal.innerText= newCaseTotal;
})


//Minus Case Number

document.getElementById('btn-case-minus').addEventListener('click', function(){
  const caseNumberMinus = document.getElementById('case-number-field');
  const caseNumberMinusString = caseNumberMinus.value;
  const previousCaseNumberMinus = parseInt(caseNumberMinusString);
  
  const newCaseNumberMinus = previousCaseNumberMinus - 1;
  caseNumberMinus.value = newCaseNumberMinus;
  
  const caseTotalMinus = document.getElementById('case-total');
  const newCaseTotalMinus = previousCaseNumberMinus * 59;
  caseTotalMinus.innerText = newCaseTotalMinus;
  
})


//Total Phone && Case Count

function totalCount (){
  const subTotalCount = document.getElementById('sub-total');
  const newIncreaseSubTotal = newPhoneTotal + newCaseTotal;
  subTotalCount.innerText = newIncreaseSubTotal;
}
