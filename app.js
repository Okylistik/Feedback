'use strict'

const firstName = document.querySelector('#first-name'),
    lastName = document.querySelector('#last-name'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
btn = document.querySelector('#submit')

const test = firstName.parentNode

console.info('test:'+test);

function error(node, text){
    const small=node.parentNode.querySelector('small')
    node.parentNode.appendChild(small).innerHTML=text
    node.classList.add('border', 'border-danger', 'border-3', 'sm')
}

function getInvisible(node){
    const small=node.parentNode.querySelector('small')
    small.innerHTML=''
}

// const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// const letters = /^[A-Za-z]+$/


function validateEmail(email) 
{
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
}
console.log(validateEmail(email) );
;

function validatePhone(tel) 
{
    const telNumber = /[^0-9\+]/g;
    return telNumber.test(tel);
}
console.log()

phone.addEventListener('click',()=>{
    phone.value="+"
})


error (firstName, "clear()")
error (phone, "clear()")

function notCorrect() {
    let count = 0
if (firstName.value.length<=2 ){
    error (firstName, "Слишком короткое имя")
} else count+=1
if (lastName.value.length<=2 ){
    error (lastName, "Слишком короткая фамилия")
} else count+=1

if (!validateEmail(email.value)){
    error (email, "Не правильно введена почта")
}else count+=1
if(validatePhone(phone.value) | phone.value=='' | phone.value=="+"){
    error (phone, "Телефон должен состоять только из цифр")
}else count+=1
if(count==4){
    alert('Заявка отправлена')
}   
}

btn.addEventListener('click', () => {
    getInvisible(firstName)
    getInvisible(lastName)
    getInvisible(email)
    getInvisible(phone)
    notCorrect()
})



