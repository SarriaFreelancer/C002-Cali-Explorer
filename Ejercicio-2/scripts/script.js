function calcularPorcentaje() {
    let mujer = parseFloat(document.getElementById("mujer").value);
    let hombre = parseFloat(document.getElementById("hombre").value);

    if (mujer >= 0 && hombre >= 0) {
        let total = mujer + hombre;
        
        if (total > 0) {
            let porcentajeM = (mujer / total) * 100;
            let porcentajeH = (hombre / total) * 100;
            document.getElementById("resultado").innerText = `El porcentaje de mujeres es: ${porcentajeM.toFixed(2)}%, el porcentaje de hombres es: ${porcentajeH.toFixed(2)}%`;
        } else {
            alert('Por favor, ingrese al menos un valor mayor que 0 para calcular los porcentajes.');
        }
        
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
}
