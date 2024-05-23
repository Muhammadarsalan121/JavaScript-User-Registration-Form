let userName = document.querySelector('#userName')
let email = document.querySelector('#email')
let CNIC = document.querySelector('#CNIC')
let password = document.querySelector('#password')
let btn = document.querySelector('#btn')

let regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,8}$/
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let CNICRegex = /^42\d{11}$/
let passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,15}$/

let obj;

btn.addEventListener('submit', function(event){
    event.preventDefault()
    if(regex.test(userName.value)){
        console.log(userName.value);
        obj.push(userName.value)
        console.log(obj);
    }else {
        console.log('Correct condition required for Username');
    }
    if(emailRegex.test(email.value)){
        console.log(email.value);
    }else {
        console.log('Correct condition required for Email');
    }
    if(nicRegex.test(CNIC.value)){
        console.log(CNIC.value); 
    }else {
        console.log('Correct condition required for CNIC');
    }
    if(passwordRegex.test(password.value)){
        console.log(password.value);
    }else {
        console.log('Correct condition required for Password');
    }
    
    userName.value = ''
    email.value = ''
    password.value = ''
    CNIC.value = ''
})