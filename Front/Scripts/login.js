const formLogin = document.getElementById('formLogin')
// const endpoint = "http://127.0.0.1:3000/api/users/"
const endpoint = "https://api-progra-final.onrender.com/api/users/"

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userName = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    const resp = await fetch(endpoint + 'userByUserNameAndPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userName,
            password: password
        })
    })

    const user = await resp.json();

    console.log(user);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user.username));
        window.location.href = './Pages/dashboard.html';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
        })
    }
});