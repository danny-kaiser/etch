const container = document.querySelector('.container')
const button = document.querySelector('button')
const input = document.querySelector('input')

function makesLines (container, amount) {
  for (let step = 0; step < amount; step++) {
    const newLine = document.createElement('div')
    newLine.className = 'line'
    container.appendChild(newLine)
  }
}

function makesBoxes (line, amount) {
  for (let step = 0; step < amount; step++) {
    const newBox = document.createElement('div')
    newBox.className = 'box'
    line.appendChild(newBox)
  }
}

function adjustsBoxes () {
  const boxes = document.querySelectorAll('.box')
  boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.setAttribute('style', 'background-color: black')
    })
  })
}

// default grid
makesLines(container, 4)
const lines = document.querySelectorAll('.line')
lines.forEach((line) => {
  makesBoxes(line, 4)
  adjustsBoxes()
})

// generates a new grid
button.addEventListener('click', () => {
  const newSize = input.value
  input.value = ''
  container.innerHTML = ''
  makesLines(container, newSize)
  const lines = document.querySelectorAll('.line')
  lines.forEach((line) => {
    makesBoxes(line, newSize)
  })
  adjustsBoxes()
})
