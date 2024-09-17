function calculateTriangleArea(){
const triangleBaseArea = document.getElementById('triangle-base');
const triangleText = triangleBaseArea.value;
// console.log(triangleText);

const base =parseFloat(triangleText);
console.log(base);

const trianglHeightArea = document.getElementById('triangle-height');
const triangleTextValue = trianglHeightArea.value;
const height  = parseFloat(triangleTextValue);
console.log(height);
const area =0.5 * base * height;
console.log(area);

const triangleAreaSpan =document.getElementById('triangle-area');
triangleAreaSpan.innerText=area
}