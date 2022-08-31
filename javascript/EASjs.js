const grid = document.querySelector(".grid");


// Take the input from the input slider and make the divs in the sketchpad
const sketchSlider = document.getElementById("slider");
let sketchDensity = sketchSlider.value;
sketchSlider.addEventListener("change",() => {
    sketchDensity = sketchSlider.value;
    createDivs();
    paint();
});


function createDivs(){
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
      }
      grid.style.cssText="grid-template-columns: repeat("+sketchDensity+", 1fr);"
    for (let i =1; i<=sketchDensity*sketchDensity; i++){
        let sketchDiv = document.createElement("div");
        sketchDiv.classList.add(`pixel${i}`);
        sketchDiv.style.cssText=" height:"+500/sketchDensity+"px;width:"+500/sketchDensity+"px;"
        grid.appendChild(sketchDiv);
        
    }
}
createDivs();
// change the color of the pen/div bg according to the color picker 
const color = document.querySelector("#pen");
let penColor = color.value;


//change pen color or div color to white when eraser button is pressed
const eraser = document.querySelector(".eraser");
eraser.addEventListener("click",() => {
    penColor = "#ffffff";
});
// use mouse as a pen and allow sketching via adding bg color

function paint(){
    color.addEventListener("change",() => {
    penColor = color.value;
    console.log(penColor);
});
    for (let i =1; i<=sketchDensity*sketchDensity; i++){
        let mousedDiv = document.querySelector(`.pixel${i}`);
        mousedDiv.addEventListener("mouseover",() => {
        if (mousedDiv.style.backgroundColor=="white"){
            mousedDiv.style.backgroundColor=penColor;
        }
        else{
            mousedDiv.style.backgroundColor=penColor
        }
        });

        
            }
    
}

paint();         



//clear the screen when the clear screen buttin is pressed

const clearScreen = document.querySelector(".clearScreen");
clearScreen.addEventListener("click",() => {
    for (let i =1; i<=sketchDensity*sketchDensity; i++){
        let pixelDivs = document.querySelector(`.pixel${i}`);
        pixelDivs.style.backgroundColor="white";
        
        }
});