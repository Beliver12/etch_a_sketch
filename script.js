const parent = document.querySelector('#parent');
const btn = document.querySelector('#btn');

for (let i = 1; i <= 10000; i++) {
	let cells = document.createElement('cells');

    //Container styling;
    parent.style.width = '500px';
    parent.style.height = '500px';
    
    
    //childd styling;
	parent.appendChild(cells);
    cells.style.flex = '1%';
    cells.style.width = '5px';
    

    

    cells.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = changeCol();
    })
    
}

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
