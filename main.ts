player.onChat("Día", function () {
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("Noche", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
})
player.onChat("Tiempoactual", function () {
    gameplay.timeSet(gameplay.timeQuery(REAL_LIFE))
})
gameplay.timeSet(gameplay.timeQuery(REAL_LIFE))
