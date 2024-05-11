const precioPerfume = 28000
const costoEnvio = 1.2
function promoCuotas(costoTotal){
    console.log("Aprovechá esta promo en 6  cuotas s/interés:")
    for (i=1; i<=6; i++){
        let precioCuotas = (costoTotal / 6)
        console.log("Cuota ", i, " $", precioCuotas)
    }
    confirm("Si queres comprar el producto podes confirmar!")
}
function cerrarPedido(perfumeTipo){
    let costoTotal = (costoEnvio * precioPerfume)
    console.log("Bien, entonces tu orden quedaría cargada con los siguientes datos. Corroboralos y confirmanos si son correctos por favor!")
    console.log("Tipo de perfume: ", perfumeTipo)
    console.log("Presentación: 100ml")
    console.log("Costo total del pedido con envío incluido: $", costoTotal)
    promoCuotas(costoTotal)
}
function tomarPedido (){
    let perfumeTipo = prompt("Contanos qué perfume del catálogo te interesa?")
    if (perfumeTipo == "Red" || perfumeTipo == "Blue" || perfumeTipo == "Black" || perfumeTipo == "White"){
        cerrarPedido(perfumeTipo)
    } else {
        alert("Por favor introduce datos válidos para tomar tu pedido!")
    }
}