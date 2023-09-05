import {
    setCustomProperty,
    incrementCustomProperty,
    getCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.05
  const CACTUS_INTERVAL_MIN = 500
  const CACTUS_INTERVAL_MAX = 2000
  const worldElem = document.querySelector("[data-world]")
  
  let nextCactusTime
  export function setupObstacle() {
    nextCactusTime = CACTUS_INTERVAL_MIN
    document.querySelectorAll("[data-obstacle]").forEach(obstacle => {
      obstacle.remove()
    })
  }
  
  export function updateObstacle(delta, speedScale) {
    document.querySelectorAll("[data-obstacle]").forEach(obstacle => {
      incrementCustomProperty(obstacle, "--left", delta * speedScale * SPEED * -1)
      if (getCustomProperty(obstacle, "--left") <= -100) {
        obstacle.remove()
      }
    })
  
    if (nextCactusTime <= 0) {
      createObstacle()
      nextCactusTime =
        randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) / speedScale
    }
    nextCactusTime -= delta
  }

  export function getObstacleRects() {
    return [...document.querySelectorAll("[data-obstacle]")].map(obstacle => {
      return obstacle.getBoundingClientRect()
    })
  }
  
  
  function createObstacle() {
    const obstacle = document.createElement("img")
    obstacle.dataset.obstacle = true
    obstacle.src = "img/obstacle.png"
    obstacle.classList.add("obstacle")
    setCustomProperty(obstacle, "--left", 100)
    worldElem.append(obstacle)
  }
  
  function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }