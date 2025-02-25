var precio_base = 2000;

while (true) {
  // Variables para calcular el recargo y el precio final
  let recargo_total = 0;
  let precio_final = 0;
  
  // Solicitar al usuario el precio base o usar el valor predeterminado
  let precio_input = prompt("Ingrese el precio base o deje en blanco para usar Q2000 o escriba 'SALIR' para terminar");
  if (precio_input === "SALIR") break;
  
  if (precio_input !== "") {
    precio_base = parseFloat(precio_input); // Convertir a número flotante
    if (isNaN(precio_base) || precio_base <= 0) {
      alert("Precio base inválido, se usará Q2000");
      precio_base = 2000; // Usar precio predeterminado si el valor es inválido
    }
  } else {
    precio_base = 2000; // Usar precio predeterminado si no se ingresa nada
  }

  // Solicitar el nombre del asegurado
  let nombre = prompt("Ingrese su nombre o escriba 'SALIR' para terminar");
  if (nombre === "SALIR") break;

  // Solicitar la edad del asegurado
  let edad = prompt("¿Cuántos años tiene? Ingrese solamente números o escriba 'SALIR' para terminar");
  if (edad === "SALIR") break; 
  let edad_numero = parseInt(edad);

  // Verificar si la edad es válida (debe ser mayor o igual a 18)
  if (isNaN(edad_numero) || edad_numero < 18) {
    alert("Debe ingresar una edad válida (mínimo 18 años).");
    continue;
  }

  // Preguntar si el asegurado está casado
  let casado = prompt("¿Está casado actualmente? (SI/NO) o escriba 'SALIR' para terminar");
  if (casado === "SALIR") break;

  let edad_conyuge_numero = 0; 
  if (casado.toUpperCase() === "SI") {
    // Si está casado, preguntar por la edad del cónyuge
    let edad_conyuge = prompt("¿Qué edad tiene su esposo/a? Ingrese un número o escriba 'SALIR' para terminar");
    if (edad_conyuge === "SALIR") break;
    edad_conyuge_numero = parseInt(edad_conyuge);
    // Verificar si la edad del cónyuge es válida (debe ser mayor o igual a 18)
    if (isNaN(edad_conyuge_numero) || edad_conyuge_numero < 18) {
      alert("Debe ingresar una edad válida para el cónyuge (mínimo 18 años).");
      continue;
    }
  }

  // Preguntar si el asegurado tiene hijos
  let hijos = prompt("¿Tiene hijos o hijas? (SI/NO) o escriba 'SALIR' para terminar");
  if (hijos === "SALIR") break; 

  let cantidad_hijos = 0; // Inicializar variable para la cantidad de hijos
  if (hijos.toUpperCase() === "SI") {
    // Si tiene hijos, preguntar cuántos tiene
    cantidad_hijos = prompt("¿Cuántos hijos tiene? Ingrese un número o escriba 'SALIR' para terminar");
    if (cantidad_hijos === "SALIR") break; 
    cantidad_hijos = parseInt(cantidad_hijos);

    // Verificar si la cantidad de hijos es válida (no debe ser negativa)
    if (isNaN(cantidad_hijos) || cantidad_hijos < 0) {
      alert("Debe ingresar un número válido de hijos.");
      continue;
    }
  }

  // Cálculo del recargo según la edad del asegurado
  if (edad_numero >= 18 && edad_numero < 25) recargo_total += precio_base * 0.1;
  else if (edad_numero >= 25 && edad_numero < 50) recargo_total += precio_base * 0.2;
  else if (edad_numero >= 50) recargo_total += precio_base * 0.3;

  // Cálculo del recargo según la edad del cónyuge (si está casado)
  if (casado.toUpperCase() === "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) recargo_total += precio_base * 0.1;
    else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) recargo_total += precio_base * 0.2;
    else if (edad_conyuge_numero >= 50) recargo_total += precio_base * 0.3;
  }

  // Cálculo del recargo por hijos
  recargo_total += cantidad_hijos * (precio_base * 0.2);

  // Calcular el precio final sumando el precio base y los recargos
  precio_final = precio_base + recargo_total;

  // Mostrar el recargo total y el precio final de la cotización
  alert("Para el asegurado " + nombre + " el recargo total será de: Q" + recargo_total.toFixed(2));
  alert("El precio final de la cotización es: Q" + precio_final.toFixed(2));

  // Preguntar si el usuario desea realizar otra cotización
  let otra_cotizacion = prompt("¿Desea realizar otra cotización? (SI/NO)");
  if (otra_cotizacion.toUpperCase() !== "SI") {
    alert("Gracias por usar nuestro servicio. ¡Hasta luego!");
    break; // Salir del bucle si el usuario no desea otra cotización
  }
}
