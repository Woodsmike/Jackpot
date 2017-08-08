function getRando(number) {   
    
    var num = Math.round(Math.random() * number);
    num = num.toString();

    if (num.length < 2) {
        num = "0" + num;
    }
    return num;
}
function getPBNums() {

    document.getElementById('PB1').innerHTML = getRando(65);
    
    do {
        document.getElementById('PB2').innerHTML = getRando(65);

    } while (document.getElementById('PB2') == document.getElementById('PB1'))  
        
    do {
         document.getElementById('PB3').innerHTML = getRando(65);

    } while (document.getElementById('PB3') == document.getElementById('PB2') ||
        document.getElementById('PB3') == document.getElementById('PB1'))
    
    do {
         document.getElementById('PB4').innerHTML = getRando(65);        
    }    
    while (document.getElementById('PB4') == document.getElementById('PB3') ||
        document.getElementById('PB4') == document.getElementById('PB2') ||
        document.getElementById('PB4') == document.getElementById('PB1'))
    do {
        document.getElementById('PB5').innerHTML = getRando(65);
    }
    while (document.getElementById('PB5') == document.getElementById('PB4') ||
        document.getElementById('PB5') == document.getElementById('PB3') ||
        document.getElementById('PB5') == document.getElementById('PB2') ||
        document.getElementById('PB5') == document.getElementById('PB1'))
   
    document.getElementById('PB6').innerHTML = getRando(65);
   
}



function getMegaNums() {
    document.getElementById('MG1').innerHTML = getRando(70);
    document.getElementById('MG2').innerHTML = getRando(70);
    document.getElementById('MG3').innerHTML = getRando(70);
    document.getElementById('MG4').innerHTML = getRando(70);
    document.getElementById('MG5').innerHTML = getRando(70);
    document.getElementById('MG6').innerHTML = getRando(70);
}
