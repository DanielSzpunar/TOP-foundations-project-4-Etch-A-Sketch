// Container for boxes
let container = document.getElementById('container')


clearContainerBtn.onclick = () => clearContainer()

function changeColor(e) {
  e.target.style.backgroundColor = 'black'
}
//create the container for the etch-a-sketch
function setupGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.addEventListener('mouseover', changeColor)
    container.appendChild(gridDiv)
  }
}
function clearContainer() {
  container.innerHTML = ''
  setupGrid(16)
}

setupGrid(16)