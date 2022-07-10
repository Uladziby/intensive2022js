function someMathOperations(){
    const firstValue = +prompt('Введите первое число');   
    const secondValue = +prompt('Введите второе число');
    if(isNaN(firstValue)|| isNaN(secondValue)) return console.log('wrong data type');
    console.log(
        `Answer: ${firstValue + secondValue}, ${firstValue / secondValue}`
    );
}