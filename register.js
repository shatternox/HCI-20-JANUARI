let error = document.getElementById('error')
let btn = document.getElementById('submit')

btn.addEventListener('click', (e) => {
    validate(e)
})

function validate(e){

    let fullname = document.getElementById('fullname').value
    let male = document.getElementById('male').checked
    let female = document.getElementById('female').checked
    let other = document.getElementById('other').checked
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirm_password = document.getElementById('confirm-password').value
    let address = document.getElementById('address').value
    let agree = document.getElementById('agree').checked


    if(fullname === ""){
        error.innerHTML = "Please enter your fullname!"
        e.preventDefault()
        return
    }

    if(fullname.length < 5){
        error.innerHTML = "Fullname should be at least 5 characters!"
        e.preventDefault()
        return
    }
    for(let i = 0; i< fullname.length; i++){

        if(!(fullname.charAt(i) >= 'A' && fullname.charAt(i) <= 'Z') && !(fullname.charAt(i) >= 'a' && fullname.charAt(i) <= 'z')){
            error.innerHTML = "Fullname should be at least 5 characters!"
            e.preventDefault()
            return
        }
    }

    if(!male && !female && !other){
        error.innerHTML = "You must pick a gender"
        e.preventDefault()
        return
    }

    if(email === ""){
        error.innerHTML = "Please enter your email!"
        e.preventDefault()
        return
    }

    if(!email.includes('@')){
        error.innerHTML = "Please enter a valid email format!"
        e.preventDefault()
        return
    }

    if(password === ""){
        error.innerHTML = "Please enter your password!"
        e.preventDefault()
        return
    }

    if(password.length < 8){
        error.innerHTML = "Password must be at least 8 characters!"
        e.preventDefault()
        return
    }

    if(!(password === confirm_password)){
        error.innerHTML = "Password confirmation does not match!"
        e.preventDefault()
        return
    }

    if(address === ""){
        error.innerHTML = "Please enter your address!"
        e.preventDefault()
        return
    }


    if(!agree){
        error.innerHTML = "You must agree to the terms and conditions!"
        e.preventDefault()
        return 
    }

    error.innerHTML = ""
    alert('Register success!')


}












