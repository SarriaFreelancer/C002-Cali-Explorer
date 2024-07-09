function calcular() {
    let precio = parseFloat(document.getElementById('precio').value);
    let desc = precio * 0.15;
    let resul = precio - desc;

    document.getElementById("resultado").innerText = `El precio sin descuento es: ${precio}, el descuento es: ${desc} y el precio final a pagar con descuento es: ${resul}`;
}
