function imprimirPiramide(filas) {
    let numAsteriscos = 1;
    for (let i = 1; i <= 2; i++) {
        let fila = '';
        for (let j = 0; j < numAsteriscos; j++) {
            fila += '* ';
        }
        console.log(fila);
        numAsteriscos++;
    }
    
    for (let i = 3; i <= filas; i++) {
        let fila = '';
        for (let j = 0; j < numAsteriscos; j++) {
            fila += '* ';
        }
        console.log(fila);
        numAsteriscos += 2; 
    }
}

imprimirPiramide(6);