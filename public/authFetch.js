
const form = document.getElementById('auth-form')
// btn btn-secondary
form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const form = event.target
    const {login, password} = form
    const response = await fetch('/register',{
        method: 'POST',
        body: JSON.stringify({
            login: login.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    })
})