let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
console.log(saveEl)

let count = 0

function increment() {
    count += 1  // count = count + 1
    countEl.textContent = count
} 

function save() {
    previousEntries = " " + count + " - "
    saveEl.textContent += previousEntries
    countEl.textContent = 0
    count = 0
    console.log(count)
}