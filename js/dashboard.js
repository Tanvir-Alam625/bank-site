// Selection 
const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');
// deposit event handler 
depositButton.addEventListener('click', function (){
    // get deposit input value 
    const depositInputValue = document.getElementById('deposit-input');
    if(depositInputValue.value ==  ""){
        alert("Please enter your amount!");
    }else{
        const depositInputText = depositInputValue.value
        const depositValue = parseFloat(depositInputText);
        // get deposit span text 
        const perviousDeposit = document.getElementById('deposit');
        const perviousDepositText = perviousDeposit.innerText
        const perviousDepositAmount = parseFloat(perviousDepositText);
        // deposit calculation  
        const totalDepositAmount = perviousDepositAmount + depositValue;
        perviousDeposit.innerText = totalDepositAmount;
        depositInputValue.value = '';
        // get account balance 
        const perviousBalance = document.getElementById('balance');
        const perviousBalanceText = perviousBalance.innerText;
        const perviousBalanceAmount = parseFloat(perviousBalanceText);
        // balance calculation 
        const newTotalBalance = perviousBalanceAmount + totalDepositAmount;
        perviousBalance.innerText = newTotalBalance;
    }
});

// withdraw event handler 
withdrawButton.addEventListener('click',function(){
    // get withdraw input value 
    const withdrawInput = document.getElementById('withdraw-input');
    if(withdrawInput.value == ''){
        alert('Please enter  your amount!');
    }
    else{
        const withdrawInputText = withdrawInput.value;
        const withdrawInputAmount = parseFloat(withdrawInputText);
        // get withdraw text 
        const perviousWithdraw = document.getElementById('withdraw');
        const perviousWithdrawText = perviousWithdraw.innerText;
        const perviousWithdrawAmount = parseFloat(perviousWithdrawText);
        // get account balance 
        const perviousBalance = document.getElementById('balance');
        const perviousBalanceText = perviousBalance.innerText;
        const perviousBalanceAmount = parseFloat(perviousBalanceText);
        // withdraw calculation 
        const totalWithdrawAmount = perviousWithdrawAmount + withdrawInputAmount;
        perviousWithdraw.innerText =  totalWithdrawAmount;
        //balance calculation 
        const totalBalance = perviousBalanceAmount - withdrawInputAmount;
        perviousBalance.innerText = totalBalance;
        withdrawInput.value = "";
    }
});
