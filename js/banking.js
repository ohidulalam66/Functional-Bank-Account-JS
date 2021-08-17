/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

function getInputValue(inputId){
    const inputFlied = document.getElementById(inputId); 
    const newInputText = inputFlied.value;
    const newInputAmount = parseFloat(newInputText);
    inputFlied.value = '';
    
    return newInputAmount; 
}

function updateTotal(totalId, amount){
    // debugger;
    const total = document.getElementById(totalId);
    const previousTotalText = total.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);
    console.log(previousTotalAmount);
    total.innerText = previousTotalAmount + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    return previousBalanceTotalAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText); 
    */
   const previousBalanceTotalAmount = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotalAmount + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotalAmount - amount;
    }
}

// get Deposit Handel er  
document.getElementById('deposit-btn').addEventListener('click', function(){

    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotal('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    /* 
    const depositInput = document.getElementById('deposit-input'); 
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText); 
    */
    
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalText);
    console.log(previousDepositTotalAmount);
    depositTotal.innerText = previousDepositTotalAmount + newDepositAmount; 
    */

    /* 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    balanceTotal.innerText = previousBalanceTotalAmount + newDepositAmount; 
    */  
})

// get withdrew Handel er  
document.getElementById('withdrew-btn').addEventListener('click', function(){

    const newWithdrewAmount = getInputValue('withdrew-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrewAmount > 0 && newWithdrewAmount < currentBalance){
        updateTotal('withdrew-total', newWithdrewAmount);
        updateBalance(newWithdrewAmount, false);
    }
    /* 
    const withdrewInput = document.getElementById('withdrew-input');
    const newWithdrewText = withdrewInput.value; 
    const newWithdrewAmount = parseFloat(newWithdrewText); 
    */
    
    /* 
    const WithdrewTotal = document.getElementById('withdrew-total');
    const perviousWithdrewTotalText = WithdrewTotal.innerText;
    const perviousWithdrewTotalAmount = parseFloat(perviousWithdrewTotalText);
    console.log(perviousWithdrewTotalAmount);
    WithdrewTotal.innerText = perviousWithdrewTotalAmount + newWithdrewAmount; 
    */

    /* 
    const balancePartial = document.getElementById('balance-total');
    const previousBalancePartialText = balancePartial.innerText;
    const previousBalancePartialAmount = parseFloat(previousBalancePartialText);
    balancePartial.innerText = previousBalancePartialAmount - newWithdrewAmount; 
    */
})