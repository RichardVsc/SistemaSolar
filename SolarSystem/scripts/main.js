function calcularPeso(){
   let massa = document.getElementById("massa").value
   let e = document.getElementById("opcaoSelecionada")
   let opcaoSelecionada = e.options[e.selectedIndex].text
   
    switch(opcaoSelecionada){
        case 'Terra':
            var N = massa * 9.81
            var resultado = `Peso do objeto na Terra é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Júpiter':
            var N = massa * 24.79 
            var resultado = `Peso do objeto em Júpiter é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Marte':
            var N = massa * 3.72  
            var resultado = `Peso do objeto em Marte é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Mercúrio':
            var N = massa * 24.79 
            var resultado = `Peso do objeto em Mercúrio é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Lua':
            var N = massa * 1.62
            var resultado = `Peso do objeto na Lua é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Netuno':
            var N = massa * 11.15 
            var resultado = `Peso do objeto em Netuno é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Plutão':
            var N = massa * 0.62 
            var resultado = `Peso do objeto em Plutão é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Saturno':
            var N = massa * 10.44 
            var resultado = `Peso do objeto em Saturno é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Urano':
            var N = massa * 8.87
            var resultado = `Peso do objeto em Urano é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
        case 'Vênus':
            var N = massa * 8.87 
            var resultado = `Peso do objeto em Vênus é ${Math.round(N)}N`
            document.getElementById("resultado").innerHTML = resultado
            break;
    } 
}