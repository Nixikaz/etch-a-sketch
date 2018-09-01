let body = document.querySelector('body');

let mainContent = document.createElement("div");
let headerRow = document.createElement("div");
let headerCol = document.createElement("div");
let gridContainer = document.createElement("div");


mainContent.setAttribute("id", "maincontent");
mainContent.setAttribute("class", "container-fluid p-5 text-center");
mainContent.innerHTML = `<h1 class="display-4">Etch-a-Sketch</h1>`

headerRow.setAttribute("id", "headerrow");
headerRow.setAttribute("class", "row p-2 justify-content-center");

headerCol.setAttribute("id", "headercol");
headerCol.setAttribute("class", "col-md-auto p-2");
headerCol.innerHTML = `<div class="input-group mb-3">
<input id="gridSizeInput" type="text" class="form-control" placeholder="Enter a grid size (16 - 128)" aria-label="Recipient's username" aria-describedby="submit">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="submit">Reset</button>
        </div>
      </div>`;

gridContainer.setAttribute("id", "gridcontainer");
gridContainer.style.cssText = `display: flex;flex-wrap: wrap;border-radius: 10px;border: ridge 5px lightgrey;margin: 0 auto; padding: 0; height: 600px;width: 600px`;

body.appendChild(mainContent);
mainContent.appendChild(headerRow);
headerRow.appendChild(headerCol);
headerCol.appendChild(gridContainer);
createGrid(16);

function createGrid(gridSize) {
    
        for (let i = 0; i < gridSize * gridSize; i++) {
            let gridBox = document.createElement("div");
            gridBox.setAttribute("id", "gridbox" + i);
            gridBox.style.cssText = `background-color: black; opacity: 0;width: ${100/gridSize}%;height: ${100/gridSize}%; position: relative; float: left`
            gridBox.addEventListener('mouseover', () => {
                if (gridBox.style.opacity == 0) {
                    gridBox.style.opacity = parseFloat(gridBox.style.opacity, 10) +0.1;
                } else {
                    gridBox.style.opacity = parseFloat(gridBox.style.opacity, 10) +0.1;
                }
            });
            gridContainer.appendChild(gridBox);
        }
    }
// }

const resetGrid = document.getElementById("submit");
const gridSizeInput = document.getElementById("gridSizeInput");
gridSizeInput.focus();
resetGrid.addEventListener('click', () => {
    if (gridSizeInput.value > 128 || gridSizeInput.value < 16){
        gridContainer.innerHTML = '';
        gridSizeInput.value = "";
        gridSizeInput.placeholder = "Grid size must be between 16 and 128. Reseting grid to 16.";
        createGrid(16);
    } else {
    gridContainer.innerHTML = '';
    createGrid(gridSizeInput.value);
    gridSizeInput.value = '';
    gridSizeInput.placeholder = "Enter a grid size (16-128)"
    }
})


// currently on step three of this site.
// https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project?ref=lnav