<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signo Zodiacal</title>
  <!-- Agregué código CSS para que sea agradable visualmente -->
  <style>
    {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Lato', sans-serif;
      background-color: #FFF8F3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #0b1957;
    }

    button {
      padding: 15px 30px;
      font-size: 0.75rem;
      background-color: #0b1957;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    button:hover {
      background-color: #0b1957;
      transform: scale(1.35);
      color: white;
    }

    button:active {
      background-color: #0b1957;
    }

    .content {
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background-color: #BED1E3;
    }
  </style>
  <script>
    function obtenerSignoZodiacal() {
      // le di un valor de número a los datos ingresados en los prompts para poder calcular tanto el signo como hacer una validación
      let mes = parseInt(prompt("Ingrese el mes de su nacimiento (1-12):"));
      let dia = parseInt(prompt("Ingrese el día de su nacimiento (1-31):"));
      // Agregue validaciones para que los datos ingresados por usuario sean números dentro de un rango especifico
      if (isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        alert("Por favor, ingrese un mes y día válidos.");
        return;
      }
      // Para hacer el calculo de que signo es el usuario, use un Switch-Case para que el código sea limpio, legible y más rápido evitando usar varios If-Else
      let signo = "";
      switch (mes) {
        case 1:
          signo = (dia >= 20) ? "Acuario" : "Capricornio";
          break;
        case 2:
          signo = (dia <= 18) ? "Acuario" : "Piscis";
          break;
        case 3:
          signo = (dia <= 20) ? "Piscis" : "Aries";
          break;
        case 4:
          signo = (dia <= 19) ? "Aries" : "Tauro";
          break;
        case 5:
          signo = (dia <= 20) ? "Tauro" : "Géminis";
          break;
        case 6:
          signo = (dia <= 20) ? "Géminis" : "Cáncer";
          break;
        case 7:
          signo = (dia <= 22) ? "Cáncer" : "Leo";
          break;
        case 8:
          signo = (dia <= 22) ? "Leo" : "Virgo";
          break;
        case 9:
          signo = (dia <= 22) ? "Virgo" : "Libra";
          break;
        case 10:
          signo = (dia <= 22) ? "Libra" : "Escorpio";
          break;
        case 11:
          signo = (dia <= 21) ? "Escorpio" : "Sagitario";
          break;
        case 12:
          signo = (dia <= 21) ? "Sagitario" : "Capricornio";
          break;
        default:
          alert("Datos inválidos.");
          return;
      }
      // Con un alert le indico al usuario cual es su signo
      alert("Su signo zodiacal es: " + signo);
    }
  </script>
</head>
<body>
  <div class="content">
    <h1>Calculadora de Signo Zodiacal</h1>
    <!-- Agregué un botón para que el usuario decida cuando ejecutar el cálculo, o si desea volver a ejecutarlo sin tener que recargar la página -->
    <button onclick="obtenerSignoZodiacal()">Descubre tu signo zodiacal</button>
  </div>
</body>
</html>
