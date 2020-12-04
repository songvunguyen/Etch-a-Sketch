let container = document.querySelector("#container");

/* Create div cell */
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        let div = document.createElement("div");
        div.classList.add("grid_cell");
        div.setAttribute("id", i.toString()+"_"+j.toString());
        div.style.cssText = `grid-column: ${i+1} / ${i+2}; grid-row: ${j+1} / ${j+2}; border-style: solid;
        background-color: white`;
        container.appendChild(div);
    }
}

let grids = document.querySelectorAll(".grid_cell");

//add event listener to each grid to change color when mouse hover over
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        draw(grid);
    });
});

let button = document.querySelector("button");
button.addEventListener("click", () => {
    reset(document.querySelectorAll(".grid_cell"));
});

//function to chnage the color of div
function draw(grid){
    grid.style.backgroundColor = "black";
}

//function to reset and prompt for a new title
function reset(grids){
    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    });

    let size = prompt("Enter the size of the new grid: ");

    //Check to see if size enter > 100
    while(size > 100 || size < 0){
        size = prompt("The entered size must be <= 100 and > 0. Enter the size of the new grid: ");
    }

    //remove the old grid
    grids.forEach((grid) => {
        grid.remove();
    });

    let container = document.querySelector("#container");

    //rebuild the new grid
    container.style.cssText = `grid-template-columns: repeat(${size}, ${960/size}px);
    grid-template-rows: repeat(${size}, ${960/size}px)`;
    /* Create div cell */
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let div = document.createElement("div");
            div.classList.add("grid_cell");
            div.setAttribute("id", i.toString()+"_"+j.toString());
            div.style.cssText = `grid-column: ${i+1} / ${i+2}; grid-row: ${j+1} / ${j+2}; border-style: solid;
            background-color: white`;
            container.appendChild(div);
        }
    }

    //re-add the hovering function
    grids = document.querySelectorAll(".grid_cell");

    //add event listener to each grid to change color when mouse hover over
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            draw(grid);
        });
    });
}
