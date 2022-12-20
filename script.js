const WORLD_HEIGHT = 30
const WORLD_WIDTH = 100

const worldElem = document.querySelector("[data-world]")

setPixelToWorldScale();

window.addEventListener("resize", setPixelToWorldScale)

function setPixelToWorldScale() {
    let worldToPixelScale
    
    if(window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT){ // IF WIDER
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}