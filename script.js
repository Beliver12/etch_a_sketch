//selecting elements.
const select = document.querySelector('select');
const container = document.querySelector('#container');

//giving styles to container.
container.style.width = '80vmin';
container.style.height = '80vmin';
container.style.border = '1px solid black';
//Looping div child creation inside container

//function to remove children from container.
function removeAllChildNodes(container){
  while(container.firstChild){
   container.removeChild(container.firstChild);
   
  }
}
//function to create grid.
function createGrid(totalCells){
  
for (let i = 0; i <= totalCells; i++) {
   
	const cells = document.createElement('cells');
    if(totalCells=== 256){
  cells.style.height = '3.2%';
    cells.style.width = '3.2%'
    }else if(totalCells === 1024){
    cells.style.flex = '2.9%';
    cells.style.width = '5px';
    }else if(totalCells === 4096){
     cells.style.flex = '1.5%';
    cells.style.width = '5px';
    }
   
	container.appendChild(cells);
 
    //add event listener when hovering over divs to paint their background color.
    cells.addEventListener('mouseover', (event)=>{
    event.target.style.backgroundColor = changeCol();
    
})
   //add event listener change to select element to change value of divs by each selection.
    }}
    select.addEventListener('change',() =>{
        let value = 0;
          const totalCells = select.value * select.value;
          
          removeAllChildNodes(container);
          createGrid(totalCells);
          
        })

        //i plan to change this to event listener to choose colors.
function random(number) {
    return Math.floor(Math.random()*number);
}

function changeCol(){
    const rndCol = 
    `rgb(${random(255)}, 
    ${random(255)},
     ${random(255)})`;

     return rndCol;
}