
//inicio de secion
function iniciarSecion (){
    let usuario = prompt("Ingrese su nombre de usuario")
    let password = prompt("Ingrese su contraseña")
    while (usuario != "omar" || password != "1234") {
        alert("lo siento, su usuario o contraseña no ha sido encontrada. Vuelve a intentarlo!")
        iniciarSecion()
    }
    alert(`secion iniciada correctamente. Bienvenido/a ${usuario}`)
    
}
iniciarSecion();
