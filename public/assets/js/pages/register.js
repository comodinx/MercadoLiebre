(function () {
    const regexpEmail = /^\S+@\S+$/;
    const regexpDate = /^\d\d\d\d-\d\d-\d\d$/;

    let form = document.getElementById('form');
    let fullname = document.getElementById('fullname');
    let borndate = document.getElementById('borndate');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm_password');
    let role = document.form.role;

    form.addEventListener('submit', function (e) {
        if (!validate()) {
            e.preventDefault();
            return false;
        }
    });

    function validate () {
        if (!fullname.value || !fullname.value.trim()) {
            alert('Por favor complete el nombre y apellido');
            return false;
        }
        if (!borndate.value || !borndate.value.trim()) {
            alert('Por favor complete la fecha de nacimiento');
            return false;
        }
        if (!regexpDate.test(borndate.value)) {
            alert('Por favor ingrese una fecha de nacimiento valida');
            return false;
        }
        if (!address.value || !address.value.trim()) {
            alert('Por favor complete la dirección');
            return false;
        }
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
        if (!role.value || !role.value.trim()) {
            alert('Por favor seleccione un perfil del usuari@');
            return false;
        }
        if (!confirmPassword.value || !confirmPassword.value.trim()) {
            alert('Por favor complete la confirmación de la contraseña');
            return false;
        }
        if (password.value !== confirmPassword.value) {
            alert('Las contraseñas no coinciden');
            return false;
        }
        return true;
    }
})();
