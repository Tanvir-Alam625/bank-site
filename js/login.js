// Selection 
const submitButton = document.getElementById('submit-btn');
// submit event handler 
submitButton.addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if((userEmail == 'tanvir@gmail.com' && userPassword == '12345') ||(userEmail == 'tanviralam@gmail.com' && userPassword == '12345')){
        window.location.href = 'dashboard.html';
    }
    else{
        alert('please enter your valid email and password');
    }
})