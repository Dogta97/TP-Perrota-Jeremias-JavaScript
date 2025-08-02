
const calculoHecho = [];
let usuario = prompt("¡Bienvenido! Ingresa tu nombre:");
if (usuario === null) {
    alert("Cancelado. Volve cuando quieras.");
} else {
    alert("Hola " + usuario + ", hagamos unas cuentas.");

    function pedirNumero(mensaje) {
        let numero
        do {
            numero = prompt(mensaje)
            if (numero === null) {
                alert("Cancelado. Volve cuando quieras.")
                return null;
            }
            if (isNaN(numero) || numero.trim() === "") {
                alert("No es un número. Vamos de nuevo!")
            }
        } while (isNaN(numero) || numero.trim() === "")
        return parseFloat(numero)
    }

    function calcular(num1, operador, num2) {
        let resultado
        switch (operador) {
            case "+":
                resultado = num1 + num2
                break
            case "-":
                resultado = num1 - num2
                break
            case "*":
                resultado = num1 * num2
                break
            case "/":
                if (num2 !== 0) {
                    resultado = num1 / num2
                } else {
                    return "Error: división por cero"
                }
                break
            default:
                return "Operación inválida"
        }
        const operacionDetalle = `${num1} ${operador} ${num2} = ${resultado}`
        calculoHecho.push(operacionDetalle)
        return resultado
    }

    function mostrarHistorial() {
        console.log(" Historial de cuentas:");
        for (let i = 0; i < calculoHecho.length; i++) {
            console.log(`${i + 1}. ${calculoHecho[i]}`);
        }
    }


    let continuar = true;
    const operadoresValidos = ["+", "-", "*", "/"];

    while (continuar) {
        let num1 = pedirNumero("Primer número:");
        if (num1 === null) break;

        let operador;
        do {
            operador = prompt("Operación (+, -, *, /):");
            if (operador === null) {
                alert("Cancelado. Volve cuando quieras.");
                continuar = false;
                break;
            }

            if (!operadoresValidos.includes(operador)) {
                alert("Operador invalido. Usa estos: +, -, *, /.");

            }

        } while (!operadoresValidos.includes(operador));
        if (!continuar) break;

        let num2 = pedirNumero("Segundo número:");
        if (num2 === null) break;

        let resultado = calcular(num1, operador, num2);

        alert("El resultado final es:\n" + resultado);
        console.log("Resultado:", resultado);

        continuar = confirm("¿Hacemos otra cuenta más?");
    }

    alert("Gracias por usar la calculadora " + usuario + " 😊");
    mostrarHistorial();

}