const decremBtn = document.querySelector('button[data-action="decrement"]');
const incremBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValue -= 1;   
    return  valueEl.textContent = counterValue;
}

const onIncrementBtnClick = () => {
    counterValue += 1;    
    return valueEl.textContent = counterValue;
}

decremBtn.addEventListener('click', onDecrementBtnClick);
incremBtn.addEventListener('click', onIncrementBtnClick);
