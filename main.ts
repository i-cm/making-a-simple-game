sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
scene.setBackgroundColor(7)
controller.moveSprite(mySprite)
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 160), randint(0, 160))
    info.changeScoreBy(1)
    music.baDing.play()
})
