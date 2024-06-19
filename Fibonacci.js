function generateFibonacciSeries(n) {
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        console.error("El número de términos debe ser un entero mayor a 0.");
        return;
    }

    const fibonacciSeries = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibonacciSeries.push(a);
        const temp = a;
        a = b;
        b = temp + b;
    }

    return fibonacciSeries;
}

const n = 10; // Aquí puedes cambiar el valor de n
const series = generateFibonacciSeries(n);

if (series) {
    series.forEach(term => console.log(term));
}