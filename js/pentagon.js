function calculatePentagonArea(){
    const perimeter = getInputById('pentagon-pen');
    const base = getInputById('pentagon-base');
    console.log( perimeter,base);
    
    
    const area = 0.5 * perimeter*base;
    setInnerTextById('pentagon-area',area);
}


function getInputById(inputFeildId){
const inputFeild = document.getElementById(inputFeildId);
const inputText = inputFeild.value;
const input = parseFloat(inputText);
return input;

}

function setInnerTextById(elementId , area){
const element = document.getElementById(elementId);
element.innerText = area;
}