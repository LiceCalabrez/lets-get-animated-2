controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    LasanhaBolonhesa,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
let Comida: Sprite = null
let decoracao: Sprite = null
let LasanhaBolonhesa: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`ocean2`)
LasanhaBolonhesa = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(LasanhaBolonhesa)
LasanhaBolonhesa.setStayInScreen(true)
info.startCountdown(15)
for (let index = 0; index < 10; index++) {
    let myDecor = 0
    decoracao = sprites.create(assets.image`decoration`, myDecor)
    decoracao.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
LasanhaBolonhesa,
assets.animation`shooting shark`,
500,
true
)
game.onUpdateInterval(2100, function () {
    Comida = sprites.create(assets.image`food`, SpriteKind.Food)
    Comida.setPosition(scene.screenWidth(), randint(10, 160))
    Comida.vx = -75
})
