function Start_game () {
    mySprite = sprites.create(img`
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
}
function Enemys (x: number, y: number, Hard: boolean) {
    if (Hard) {
        mySprite2 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Enemy)
        mySprite2.setPosition(x, y)
        info.changeScoreBy(2)
        music.baDing.play()
        mySprite3 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Enemy)
        mySprite3.setPosition(x - randint(10, 30), y - randint(10, 30))
    } else {
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
        mySprite2.setPosition(x, y)
        info.changeScoreBy(1)
        music.baDing.play()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
Start_game()
game.onUpdateInterval(2000, function () {
    Enemys(randint(0, 160), randint(0, 160), Math.percentChance(50))
})
