function calculateRhombusArea(){
    const baseInput = document.getElementById('Rhombus-1');
    const d1Text = baseInput.value;
    const base = parseFloat(d1Text);
    console.log(base);
     
const heightInput = document.getElementById('Rhombus-2');
const d2Text = heightInput.value;
const height = parseFloat(d2Text);
console.log(height);

const rhombusArea = 0.5 * base * height;
console.log(height);

const areaTotal = document.getElementById('Rhombus-area');
areaTotal.innerText = height;

     
}