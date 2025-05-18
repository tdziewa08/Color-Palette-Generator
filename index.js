const schemeBtn = document.getElementById("scheme-btn")
const baseColor = document.getElementById("base-color")

baseColor.addEventListener("change", () => {
    baseColor.style.backgroundColor = `${baseColor.value}`
})

schemeBtn.addEventListener('click', () => {
    const paletteContainer = document.getElementById("palette-container")
    const selection = document.getElementById("scheme-select")

    fetch(`https://www.thecolorapi.com/scheme?rgb=${baseColor.style.backgroundColor}&mode=${selection.value}`)
        .then(response => response.json()) 
         .then(data => {
            let html = ""
            let text = ""
            let div = ""
            paletteContainer.innerHTML = ""
            for(let color of data.colors)
            {
                div = paletteContainer.appendChild(document.createElement("div"))
                html = div.appendChild(document.createElement("img"))
                html.src = color.image.bare
                text = div.appendChild(document.createElement("h2"))
                text.textContent = color.hex.value
            }
         })
})