import Users from '../Data/usuarios.json' assert { type: "json" };

const formLogin = document.getElementById('formLogin')


formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    const user = Users.usuario.find(user => user.username === userName && user.password === password);

    console.log(password);

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