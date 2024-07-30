// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級1":
            case "層級1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級2":
            case "層級2":return tiles.createTilemap(hex`1000100003010101030101010301010301010301010101010101010101010101010101010301020202020202020101030101030101010201010101010201010101010101010202010101020202010103010103010302010304030201010101010101010101020101040102020202020202020201030202030403010103010103010102010101020105060606070101010101020101010202020202030401030202020201010301010102020104010102010101010101010202020101040202020301030103010302010301060802030101010101010301020301030101020101030103010301030202020202020201030103010301010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
. . 2 . . . . . 2 . . . . . . . 
. 2 2 . . . 2 2 2 . . . . . . . 
. 2 . . . . 2 . . . . . . . . . 
. 2 . . . . 2 2 2 2 2 2 2 2 2 . 
. 2 2 . . . . . . . . . . . 2 . 
. . 2 . . . . . . . . . . . 2 . 
. . 2 2 2 2 2 . . . . 2 2 2 2 . 
. . . . . 2 2 . . . . 2 . . . . 
. . . 2 2 2 . . . 2 2 2 . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.dungeon.floorLight0,sprites.castle.tileGrass2,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "我的貼圖":
            case "tile1":return tile1;
            case "我的貼圖0":
            case "tile2":return tile2;
            case "我的貼圖1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
