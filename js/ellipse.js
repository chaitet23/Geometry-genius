// function calculateEllipseInputArea(){
//     const ellipseInput = document.getElementById('ellipse-width');
//     const ellipseText = ellipseInput.value;
//     const ellipse = parseFloat(ellipseText);
//     // console.log(ellipse);

// const base = getEllipseBase();
// console.log(base);



// function getEllipseBase(){
//     const ellipseInputArea = document.getElementById('ellipse-base');
// const baseText = ellipseInputArea.value;
// const base =parseFloat(baseText);
// // console.log(base);
// return base;
// }
// const area = 3.14 * ellipse*base;
// console.log(area);


// const areaTotal = document.getElementById('ellipse-area')
// areaTotal.innerText = area;

    
// }

function calculateEllipseInputArea(){
    const mejorRedius = getInputById('ellipse-width');
    const minorRedius = getInputById('ellipse-base');
    const area = 3.14 *mejorRedius*minorRedius;
    setInnerTextById('ellipse-area',area);
}



