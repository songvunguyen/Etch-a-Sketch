let container = document.querySelector("#container");

/* Create div cell */
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        let div = document.createElement("div");
        div.classList.add("grid_cell");
        div.setAttribute("id", i.toString()+"_"+j.toString());
        div.style.cssText = `grid-column: ${i+1} / ${i+2}; grid-row: ${j+1} / ${j+2}; border-style: solid;
        background-color: green`;
        container.appendChild(div);
    }
}
