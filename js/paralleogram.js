function calculateparalleogramArea(){
    const paralleogramInput = document.getElementById('parallelogram-base');
    const parallelogramText = paralleogramInput.value;
    const parallelogram = parseFloat(parallelogramText);
    console.log(parallelogram);
      

const heightInput = document.getElementById('parallelogram-height');
const heightText = heightInput.value;
const height = parseFloat(heightText);
console.log(height);
 const area = parallelogram * height;
 console.log(area);

 const areaTotal = document.getElementById('parallelogram-area');
 areaTotal.innerText = area;
 

}
