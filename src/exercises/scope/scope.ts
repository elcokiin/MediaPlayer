const listNumbers = () => {
    for(var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 3000);
    }
}

listNumbers();

// Esto lo puedo solucionar haciendo que el var nose remplace haciendo que recuerde el valor y cambiar
// a un scope nuevo

const listNumbers2 = () => {
    for(var i = 0; i < 10; i++){
        const eventuallyPrinterNumber = (n: number) => {
            setTimeout(() => {
                console.log(n);
            }, 3000);
        }
        eventuallyPrinterNumber(i);
    }
}

listNumbers2();

// Y con let seria así y no lo puedo hacer con const ya que i esta cambiando

const listNumbers3 = () => {
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 3000);
    }
}

listNumbers3();