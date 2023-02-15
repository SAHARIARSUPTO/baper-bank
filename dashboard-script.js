document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField= document.getElementById('deposit-amount');
    const depositAmountValueString=depositField.value;  
    const depositAmountValue=parseFloat(depositAmountValueString);
    


    const depositTotalElement=document.getElementById('deposit-total');
    const depositTotalString=depositTotalElement.innerText;
    const depositTotal=parseFloat(depositAmountValueString);

    const currentDepositTotal= depositAmountValue+depositTotal;

    depositTotalElement.innerText=currentDepositTotal;




depositField.value='';





})


