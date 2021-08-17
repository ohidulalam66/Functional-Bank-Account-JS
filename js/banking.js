// get Deposit Handel er  
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input'); 
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(newDepositAmount);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalText);
    console.log(previousDepositTotalAmount);
    depositTotal.innerText = previousDepositTotalAmount + newDepositAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    balanceTotal.innerText = previousBalanceTotalAmount + newDepositAmount;

    depositInput.value = '';
})

// get withdrew Handel er  
document.getElementById('withdrew-btn').addEventListener('click', function(){
    const withdrewInput = document.getElementById('withdrew-input');
    const newWithdrewText = withdrewInput.value; 
    const newWithdrewAmount = parseFloat(newWithdrewText);
    // console.log(newWithdrewAmount);
    const WithdrewTotal = document.getElementById('withdrew-total');
    const perviousWithdrewTotalText = WithdrewTotal.innerText;
    const perviousWithdrewTotalAmount = parseFloat(perviousWithdrewTotalText);
    console.log(perviousWithdrewTotalAmount);
    WithdrewTotal.innerText = perviousWithdrewTotalAmount + newWithdrewAmount;

    const balancePartial = document.getElementById('balance-total');
    const previousBalancePartialText = balancePartial.innerText;
    const previousBalancePartialAmount = parseFloat(previousBalancePartialText);
    balancePartial.innerText = previousBalancePartialAmount - newWithdrewAmount;

    withdrewInput.value = '';
})