const container = document.querySelector('#container');
const btn = document.querySelector('.newGrid');


// function that builds a grid in the "container"
function createGrid(x) {
    
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            const div = document.createElement('div');
            div.className = "grid";
            div.style.width = (700/x) + "px";
            div.style.height = (700/x) + "px";
            div.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
            container.appendChild(div);
            
        };
    };
};



// function that clears the grid
function clearGrid(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid(container);
    createGrid(z);
};

btn.addEventListener('click', refreshGrid);
createGrid(16);

    
    
        
    










