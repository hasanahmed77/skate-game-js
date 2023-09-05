import { getCustomProperty, incrementCustomProperty, setCustomProperty } from './updateCustomProperty.js'

const skateElem = document.querySelector('[data-skate]')
const startScreenElem = document.querySelector("[data-start-score]")
const JUMP_SPEED = .4
const GRAVITY = .0015

let isJumping
let yVelocity

export function setupSkate() {
    isJumping = false
    setCustomProperty(skateElem, '--bottom', 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)

    document.removeEventListener("touchstart", onJump)
    document.addEventListener("touchstart", onJump)
}

export function updateSkate(delta, speedScale ) {
    handleRun(delta, speedScale)
    handleJump(delta)
}

export function getSkateRect() {
    return skateElem.getBoundingClientRect()
  }

export function setSkateLose() {
    skateElem.src = 'img/lost.png'
}

function handleRun(delta, speedScale) {
    if (isJumping) {
        skateElem.src = 'img/jump.png'
        return
    }
}

function handleJump(delta) {
    if (!isJumping) return
    console.log(delta)
    incrementCustomProperty(skateElem, '--bottom', yVelocity * delta)

    if (getCustomProperty(skateElem, '--bottom') <= 0) {
        setCustomProperty(skateElem, '--bottom', 0)
        isJumping = false
        skateElem.src = 'img/run.png'
    }

    yVelocity -= GRAVITY * delta
}

function onJump(e) {
    if (isJumping) return

    yVelocity = JUMP_SPEED
    isJumping = true
}



