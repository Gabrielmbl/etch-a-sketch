const container = document.querySelector("#gridContainer")

for  (i=0; i<256; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    container.appendChild(square)
    
}