'stric mode'

const index = (() => {
    function init() {
        setInterval(function tempo() {
            const data = new Date();
            let hora = data.getHours();
            let minuto = data.getMinutes();
            let segundo = data.getSeconds();
    
            if (hora < 10) hora ='0' + hora;
            if (minuto < 10) minuto ='0' + minuto;
            if (segundo < 10) segundo ='0' + segundo;
            
            document.querySelector('.horas').textContent = hora;
            document.querySelector('.minutos').textContent = minuto;
            document.querySelector('.segundos').textContent = segundo;
        }, 1000);
    }

    return {
        init
    };
})()

index.init();