(function transformNumber(){
    const number  = window.prompt('insert number');
    const base = window.prompt('insert base');
    if(isNaN(base)|| isNaN(number)) return console.log('wrong data type');
return (parseInt(number)).toString(base);})()