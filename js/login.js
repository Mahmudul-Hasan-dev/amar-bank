// step-1 get event handler to button
const loginButton = document.getElementById('login-btn');
loginButton.addEventListener('click', function () {
    // step 2 check if it is okay
    console.log('clicked')

    //step 3 get the value from input field
    //always remember to add .value to get the value from input field
    const getemail = document.getElementById('user-email');
    const emailValue = getemail.value;
    console.log(emailValue);

    const getpassword = document.getElementById('user-password');
    const passValue = getpassword.value;
    console.log(passValue);

    //email pass verification::do not do this on client side

    if (emailValue == 'abc@gmail.com' && passValue == '12345') {
        console.log('successful');
    }
    else {
        console.log('invalid user');
    }
})