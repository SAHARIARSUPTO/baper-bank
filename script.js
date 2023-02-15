document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('email');
    const emailValue=emailField.value;
    const passField=document.getElementById('pass');
    const passValue=passField.value;
    
    if (emailValue == 'supto622@gmail.com' && passValue == 'supto1234'){
        window.location.href='dashboard.html';

    }
    else{
        window.location.href='error.html'
    }

})

