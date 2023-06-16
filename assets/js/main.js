function cronometro() {
    let iniciar = document.querySelector('.iniciar')
    let pausar = document.querySelector('.pausar')
    let zerar = document.querySelector('.zerar')
    let relogio = document.querySelector('.relogio')

    let seg = 0
    let min = 0
    let hor = 0
    let cronometro
    pausar.disabled = true
    zerar.disabled = true
    function inicarRelogio() {
        relogio.classList.remove('pausado')
        cronometro = setInterval(function () {
            seg++
            if (seg === 60) {
                min++
                seg = 0
            }
            if (min === 60) {
                hor++
                min = 0
            }
            relogio.innerHTML = `${(hor.toString().padStart(2, '0'))}:${(min).toString().padStart(2, '0')}:${(seg).toString().padStart(2, '0')}`
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        let el = e.target

        if (el.classList.contains('iniciar')) {
            pausar.disabled = false
            zerar.disabled = false
            iniciar.disabled = true
            inicarRelogio()
        }
        if (el.classList.contains('pausar')) {
            pausar.disabled = true
            iniciar.disabled = false
            relogio.classList.add('pausado')
            clearInterval(cronometro)
        }
        if (el.classList.contains('zerar')) {
            iniciar.disabled = false
            pausar.disabled = true
            zerar.disabled = true
            relogio.classList.remove('pausado')
            clearInterval(cronometro)
            relogio.innerHTML = '00:00:00'
            seg = 0
            min = 0
            hor = 0
        }
    })
}
cronometro()


