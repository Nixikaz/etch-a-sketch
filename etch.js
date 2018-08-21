let body = document.querySelector('body');

let container = document.createElement("div");
container.setAttribute("id", "container");
container.style.cssText = "margin: 0 auto";
body.appendChild(container);

let gridArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; 
// change grid size to 16 instead of using an array
// https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n

for (let i = 0; i < gridArray.length; i++) {
    gridArray[i];
    let addRow = document.createElement("div");
    addRow.setAttribute("id", "row" + gridArray[i]);
    addRow.style.cssText = "display: table;clear: both;margin: 0 auto"
    container.appendChild(addRow);
    for (let j = 0; j < gridArray.length; j++) {
        let gridBox = document.createElement("div");
        gridBox.setAttribute("id", "gridbox" + gridArray[j]);
        gridBox.style.cssText = "width: 20px;height: 20px;border: 1px solid black;position: relative; float: left"
        // gridBox.textContent = gridArray[j];
        addRow.appendChild(gridBox);
    }
}
// currently on step three of this site.
// https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project?ref=lnav