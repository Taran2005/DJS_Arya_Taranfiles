let saveElement = document.getElementById("save-element")
let counterElement = document.getElementById("count-element")
let counter = 0

console.log(saveElement)

function increment() {
    counter += 1
    counterElement.textContent = counter
}

function save() {
    let counterString = counter + " - "
    saveElement.textContent += counterString
    console.log(counter)
    counter = 0
}
