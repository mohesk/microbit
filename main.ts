input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Bird: game.LedSprite = null
let Obstacles: game.LedSprite[] = []
basic.forever(function () {
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(100)
})
