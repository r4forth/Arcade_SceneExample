def on_hit_wall(sprite, location):
    info.set_score(0)
    game.game_over(False)
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_on_overlap(sprite2, otherSprite):
    info.change_score_by(-3)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

info.set_score(10)
info.set_life(3)
tiles.set_current_tilemap(tilemap("""
    層級2
"""))
mySprite2 = sprites.create(img("""
        ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
    """),
    SpriteKind.enemy)
mySprite2.set_position(72, 83)
mySprite = sprites.create(img("""
        . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . 8 8 6 6 6 6 6 8 . . . 
            . . . . 8 8 6 6 6 6 6 6 6 8 . . 
            . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
            . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
            . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
            8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
            8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
            8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
            8 6 8 8 8 8 b b b b 8 b b 8 b 8 
            8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
            8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f 8 8 
            . 8 8 f b c c f 8 8 f b c c f . 
            . . . . b b f . . . . b b f . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)