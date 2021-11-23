(function () {
    const regexpEmail = /^\S+@\S+$/;

    let form = document.getElementById('form');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    form.addEventListener('submit', function (e) {
        if (!validate()) {
            e.preventDefault();
            return false;
        }
    });

    function validate () {
        if (!username.value || !username.value.trim()) {
            alert('Por favor complete el nombre de usuari@');
            return false;
        }
        if (!regexpEmail.test(username.value)) {
            alert('Por favor ingrese un nombre de usuari@ valido');
            return false;
        }
        if (!password.value || !password.value.trim()) {
            alert('Por favor complete la contraseña');
            return false;
        }
        return true;
    }
})();
