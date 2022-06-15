'use strict'

const firstName = document.querySelector('#first-name'),
    lastName = document.querySelector('#last-name'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
btn = document.querySelector('#submit')



function error(node, text){
    const small=document.createElement('small')
    small.classList.add('text-danger')
    node.parentNode.appendChild(small).innerHTML=text
    node.classList.add('border', 'border-danger', 'border-3', 'sm')
}

// const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// const letters = /^[A-Za-z]+$/


function validateEmail(email) 
{
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
}

function validatePhone(tel) 
{
    const telNumber = /[^0-9\+]/g;
    return telNumber.test(tel);
}

phone.addEventListener('click',()=>{
    phone.value="+"
})

// function clear(input){
//     const small= input.querySelector('small')
//     input.addEventListener('click', ()=>{
//     input.parentNode.removeChild(small)
//     input.classList.remove(...input.classList)
// })
// }
// clear(firstName)
// clear(lastName)
// clear(email)
// clear(phone)


error (phone, "clear()")

btn.addEventListener('click', () => {
    
    if (firstName.value.length<=2 ){
        error (firstName, "Слишком короткое имя")
    } 
    if (lastName.value.length<=2 ){
        error (lastName, "Слишком короткая фамилия")
    } 

    if (!validateEmail(email.value)){
        error (email, "Не правильно введена почта")
    }
    if(validatePhone(phone.value) | phone.value=='' | phone.value=="+"){
        error (phone, "Телефон должен состоять только из цифр")
    }

    // alert('Спасибо, за предоставленую вами информацию!')
})

