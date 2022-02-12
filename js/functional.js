// Selection 
const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');
// input value function 
function getInputField(inputId){
    // get input field 
    const input = document.getElementById(inputId);
    const inputText = input.value ;
    if(inputText == ''){
        input.style.border = '2px solid red';
    }else{
        input.style.border = '2px solid green';
        const inputValue= parseFloat(inputText);
        input.value = '';
        return inputValue;
    }
}
// inner text function 
function getTotalFieldBalance(amount,innerId ){
    const totalValue = document.getElementById(innerId);
    const totalTextValue = totalValue.innerText;
    const totalConvert= parseFloat(totalTextValue);
    // console.log(amount);
    const additionAmount = amount + totalConvert;
    totalValue.innerText = additionAmount;


}
// total balance function 
function totalBalanceID(){
    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    // convert string to Number 
    const totalBalanceValue = parseFloat(totalBalanceText)
    return totalBalanceValue;
}
// total balance calculation  function 
function getTotalBalance( BalanceAmount, isSub ){
    // get balance id 
    const totalBalance = document.getElementById('balance');
    // total balance calling function 
    const balanceId =totalBalanceID();
    // condition 
    if(isSub == true){
        totalBalance.innerText = balanceId - BalanceAmount;
    }else{
        totalBalance.innerText = balanceId + BalanceAmount;

    }

}
// deposit event handler
depositButton.addEventListener('click',function(){
     const updatedDepositValue = getInputField('deposit-input');
     if(updatedDepositValue > 0){
         getTotalFieldBalance (updatedDepositValue, 'deposit');
         getTotalBalance(updatedDepositValue, false);
     }
     

});
// withdraw event handler 
withdrawButton.addEventListener('click',function(){
    const updatedWithdrawValue = getInputField('withdraw-input');
    const myTotalBalance = totalBalanceID();
    if(updatedWithdrawValue > 0 && updatedWithdrawValue <= myTotalBalance ){
        getTotalFieldBalance(updatedWithdrawValue, 'withdraw');
        getTotalBalance(updatedWithdrawValue, true);
    }
    if(updatedWithdrawValue>myTotalBalance){
        alert('your Account balance is not available!');
    }
    // getInnerText(newValue , 'withdraw') ;
});
