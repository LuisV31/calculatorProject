let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

const sumFunction = (a, b) => Number(a) + Number(b);
const subFunction = (a, b) => Number(a) - Number(b);
const divFunction = (a, b) => Math.round(Number(a) / Number(b) * 100) / 100;
const mulFunction = (a, b) => Number(a) * Number(b);

const operate = (operator, number1, number2) => {
    if (operator === '*') {
        return mulFunction(number1, number2);
    }
    else if (operator === '/') {
        return divFunction(number1, number2);
    }
    else if (operator === '+') {
        return sumFunction(number1, number2);
    }
    else if (operator === '-') {
        return subFunction(number1, number2);
    }
}

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '=':
                if(display.innerText.includes('*')){
                    const splitStuff = display.innerText.split('*');
                    display.innerText = operate('*', splitStuff[0], splitStuff[1]);
                    break;
                }
                else if (display.innerText.includes('/')){
                    const splitStuff = display.innerText.split('/');
                    display.innerText = operate('/', splitStuff[0], splitStuff[1]);
                    break;
                }
                else if (display.innerText.includes('+')){
                    const splitStuff = display.innerText.split('+');
                    display.innerText = operate('+', splitStuff[0], splitStuff[1]);
                    break;
                }
                else if (display.innerText.includes('-')){
                    const splitStuff = display.innerText.split('-');
                    display.innerText = operate('-', splitStuff[0], splitStuff[1]);
                    break;
                }
                
            case 'AC':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                }
            default:
                display.innerText += e.target.innerText;
        }
    });
}); 
