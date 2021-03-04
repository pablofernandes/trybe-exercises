let clickNumber = 0;
const btnClick = document.getElementById('clicks');
btnClick.addEventListener('click', () =>  {
    clickNumber += 1;
    const numberTextElement = document.getElementById('click-number');
    numberTextElement.innerText = clickNumber;
})