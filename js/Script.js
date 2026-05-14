const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    // 1. Prevenir que la página se recargue automáticamente
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // 2. Validación: No dejar campos vacíos
    if (emailValue === "" || passwordValue === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // 3. Validación de formato de correo (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // 4. Validación de contraseña: Mínimo 8 caracteres
    if (passwordValue.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Si todo está correcto, puedes redirigir o enviar a tu API
    console.log("Validación exitosa. Redirigiendo...");
    window.location.href = "index.html"; 
});