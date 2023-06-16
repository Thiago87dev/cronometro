let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')
let relogio = document.querySelector('.relogio')

let seg = 0
let min = 0
let hor = 0
iniciar.addEventListener('click',(e)=>{
    relogio.style.color = 'black'
    let cronometro = setInterval(function(){
        seg++
        if(seg === 60){
            min++
            seg = 0
        }
        if(min === 60){
            hor++
            min = 0
        }
        relogio.innerHTML = `${(hor.toString().padStart(2, '0'))}:${(min).toString().padStart(2,'0')}:${(seg).toString().padStart(2,'0')}`
    }, 1000)

    pausar.addEventListener('click',(e)=>{
        relogio.style.color = 'red'
        clearInterval(cronometro)
    })

    zerar.addEventListener('click',(e)=>{
        relogio.style.color = 'black'
        clearInterval(cronometro)
        relogio.innerHTML = '00:00:00'
        seg = 0
        min = 0
        hor = 0
    })
})
