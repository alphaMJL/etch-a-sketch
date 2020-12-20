

function createWorkSpace(numberOfDivs, newDivSize) {
    for (let i = 0; i < numberOfDivs; i++) {
        let baseDiv = document.createElement('div')
        baseDiv.setAttribute("id", `div${i}`)
        baseDiv.setAttribute('class', 'pixelDivs')
        baseDiv.style.width = `${newDivSize}%`;
        baseDiv.style.height = `${newDivSize}%`
        document.getElementById('main-container').appendChild(baseDiv)
        document.getElementById(`div${i}`).addEventListener('mouseenter', element => {
            console.log(element)
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;
            element.target.style.backgroundColor = rgb;
           
        })
               
    }
}

document.getElementById('clear-button').addEventListener('click', e => {
    document.getElementById('main-container').remove();
    let baseDiv = document.createElement('div')
    baseDiv.setAttribute('id', "main-container")
    document.body.appendChild(baseDiv)
    let newSize = prompt('What length for grid? Between 1 and 100. For example: Enter 10 for a 10x10 grid.')
    if(newSize > 100) {
        newSize = 100;
    }
    else if (newSize < 1) {
        newSize = 1;
    }
    let newDivSize = 100 / newSize;
    console.log(newDivSize)
    createWorkSpace(newSize*newSize, newDivSize)
})

createWorkSpace(256)