document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-amount');
    const withdrawAmountValueString=withdrawField.value;
    const withdrawAmountValue=parseFloat(withdrawAmountValueString);



    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);


    const currentWithdrawTotal=withdrawAmountValue+previousWithdrawTotal;

    withdrawTotalElement.innerText=currentWithdrawTotal;

    withdrawField.value='';
    const balanceTotalElement=getElementById('balance-total');
    const previousBalanceString=balanceTotalElement.innerText;
    const previousBalance=parseFloat(previousBalanceString);

    const nezBalance= previousBalance - withdrawAmountValue;
    balanceTotalElement.innerText=nezBalance;

   
})