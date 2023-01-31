//selecting elements.

const select = document.querySelector('select');
const container = document.querySelector('#container');
const color = document.querySelector('#color');

//giving border to container.
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
  
for (let i = 0; i < totalCells; i++) {
   
	const cells = document.createElement('cells');
    if(totalCells=== 256){
        cells.style.flexBasis = '30px';
        cells.style.flex = '30px';
    }else if(totalCells === 1024){
        cells.style.flexBasis = '15.5px';
        cells.style.flex = '15.5px';
    }else if(totalCells === 4096){
        cells.style.flexBasis = '7.7px';
        cells.style.flex = '7.8px';
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


// add event listener to color picker 
color.addEventListener('change', ()=>{
    const choice = color.value;
    switch(choice){
        case 'black':
            changeCol('black');
            break;
            
        case 'red':
            changeCol('red');
             break;

        case 'green':
            changeCol('green');
            break;
        
            case 'white':
                changeCol('white');
                break;    
                }
                changeCol();
})
// function that changes color by user color ch
function changeCol(){
    let rndCol = '';
    if(color.value === 'black'){
        rndCol = 'black';
        return rndCol;
    }else if(color.value === 'red'){
        rndCol = 'red';
        return 'red';
    }else if (color.value === 'green'){
        rndCol = 'green';
        return rndCol;
    }else{
        rndCol = 'white';
        return rndCol;
    }
}






