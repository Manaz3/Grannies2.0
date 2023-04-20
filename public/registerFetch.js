const form = document.getElementById('register-form')

form.addEventListener('submit', async(event)=>{
    event.preventDefault()

    const form = event.target
    const {login, password, password2} = form
    if(login && password && password2 === password){

    const response = await fetch('/login',{
        method: 'POST',
        body: JSON.stringify({
            login: login.value,
            password: password.value,
            password2: password2.value
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    })
    }

    if(response.ok){
        window.location.href = '/'
    }else{
        const result = await response.json()
        alert(result.message)
    }
})