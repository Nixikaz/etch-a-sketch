

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
            container.appendChild(gridBox);
        }
    }
// }


function resetSketchPad(newGridSize) {
    let body = document.querySelector('body');
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    container.style.cssText = `display: flex;flex-wrap: wrap;border-radius: 10px;border: ridge 5px lightgrey;margin: 0 auto; padding: 0; height: 800px;width: 800px`;
    body.appendChild(container);
    let gridSize = newGridSize;
    createGrid(gridSize);
}

resetSketchPad(64);
// currently on step three of this site.
// https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project?ref=lnav