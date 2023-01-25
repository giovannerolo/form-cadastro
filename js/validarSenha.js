export default function initValidarSenha() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("Confirmpassword");

  function validarSenha () {
    if (password.value != confirmPassword.value) {
      confirmPassword.setCustomValidity("Senhas diferentes")
      confirmPassword.reportValidity();
      return false;
    } else {
      confirmPassword.setCustomValidity("");
      return true
    }
  }
  if (confirmPassword) {
    confirmPassword.addEventListener("input", validarSenha);
  }
}