function calculateRectangleArea(){
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);
    
const area = width * length;
console.log(area);

const areaTotal = document.getElementById('rectangle-area');
areaTotal.innerText = area;

    
}
