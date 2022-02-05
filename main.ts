function Zeichne_waagerechtes_Segment () {
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, Segmentlänge - 4, xSegment + 2, ySegment)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, Segmentlänge - 2, xSegment + 1, ySegment + 1)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, Segmentlänge, xSegment, ySegment + 2)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, Segmentlänge - 2, xSegment + 1, ySegment + 3)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, Segmentlänge - 4, xSegment + 2, ySegment + 3)
}
function zeichne_Segment_5 () {
    xSegment = xZiffer + (Segmentlänge + 4)
    ySegment = yZiffer + 4
    Zeichne_senkrechtes_Segment()
}
function Zeichne_senkrechtes_Segment () {
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, Segmentlänge - 4, xSegment, ySegment + 2)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, Segmentlänge - 2, xSegment + 1, ySegment + 1)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, Segmentlänge, xSegment + 2, ySegment)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, Segmentlänge - 2, xSegment + 3, ySegment + 1)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, Segmentlänge - 4, xSegment + 4, ySegment + 2)
}
function zeichne_Segment_3 () {
    xSegment = xZiffer
    ySegment = yZiffer + 4
    Zeichne_senkrechtes_Segment()
}
function zeichne_Segment_1 () {
    xSegment = xZiffer + 4
    ySegment = yZiffer + (4 + Segmentlänge)
    Zeichne_waagerechtes_Segment()
}
function zeichne_Segment_4 () {
    xSegment = xZiffer
    ySegment = yZiffer + (8 + Segmentlänge)
    Zeichne_senkrechtes_Segment()
}
function _7 () {
    zeichne_Segment_0()
    zeichne_Segment_5()
    zeichne_Segment_6()
}
function zeichne_Segment_0 () {
    xSegment = xZiffer + 4
    ySegment = yZiffer
    Zeichne_waagerechtes_Segment()
}
function _2 () {
    zeichne_Segment_0()
    zeichne_Segment_1()
    zeichne_Segment_2()
    zeichne_Segment_4()
    zeichne_Segment_5()
}
function _6 () {
    zeichne_Segment_1()
    zeichne_Segment_2()
    zeichne_Segment_3()
    zeichne_Segment_4()
    zeichne_Segment_6()
}
function schreibe_Ziffer () {
    let Ziffer = 0
    if (Ziffer == 0) {
        _0()
    } else if (Ziffer == 1) {
        _1()
    } else if (Ziffer == 2) {
        _2()
    } else if (Ziffer == 3) {
        _3()
    } else if (Ziffer == 4) {
        _4()
    } else if (Ziffer == 5) {
        _5()
    } else if (Ziffer == 6) {
        _6()
    } else if (Ziffer == 7) {
        _7()
    } else if (Ziffer == 8) {
        _8()
    } else if (Ziffer == 9) {
        _9()
    }
}
function _ () {
    zeichne_Segment_1()
}
function _9 () {
    zeichne_Segment_0()
    zeichne_Segment_1()
    zeichne_Segment_2()
    zeichne_Segment_3()
    zeichne_Segment_5()
    zeichne_Segment_6()
}
function zeichne_Segment_6 () {
    xSegment = xZiffer + (Segmentlänge + 4)
    ySegment = yZiffer + (8 + Segmentlänge)
    Zeichne_senkrechtes_Segment()
}
function _5 () {
    zeichne_Segment_0()
    zeichne_Segment_1()
    zeichne_Segment_2()
    zeichne_Segment_3()
    zeichne_Segment_6()
}
function _3 () {
    zeichne_Segment_0()
    zeichne_Segment_1()
    zeichne_Segment_2()
    zeichne_Segment_5()
    zeichne_Segment_6()
}
function zeichne_Segment_2 () {
    xSegment = xZiffer + 4
    ySegment = yZiffer + 2 * (Segmentlänge + 4)
    Zeichne_waagerechtes_Segment()
}
function _8 () {
    zeichne_Segment_0()
    zeichne_Segment_1()
    zeichne_Segment_2()
    zeichne_Segment_3()
    zeichne_Segment_4()
    zeichne_Segment_5()
    zeichne_Segment_6()
}
function _0 () {
    zeichne_Segment_0()
    zeichne_Segment_2()
    zeichne_Segment_3()
    zeichne_Segment_4()
    zeichne_Segment_5()
    zeichne_Segment_6()
}
function _4 () {
    zeichne_Segment_1()
    zeichne_Segment_3()
    zeichne_Segment_5()
    zeichne_Segment_6()
}
function _1 () {
    zeichne_Segment_5()
    zeichne_Segment_6()
}
let yZiffer = 0
let xZiffer = 0
let ySegment = 0
let xSegment = 0
let Segmentlänge = 0
let Robert = kitronik_VIEW128x64.matrix16x16(`
    # # # # # # # # # # # # # # # #
    # . . . . . . . . . . . . . . #
    # . . . . . . . . . . . . . . #
    # . . . # # # # # # . . . . . #
    # . . . # # # # # # # . . . . #
    # . . . # # . . . # # . . . . #
    # . . . # # . . . . # . . . . #
    # . . . # # . . . # # . . . . #
    # . . . # # # # # # . . . . . #
    # . . . # # # # # . . . . . . #
    # . . . # # . . # # . . . . . #
    # . . . # # . . . # # . . . . #
    # . . . # # . . . . # # . . . #
    # . . . . . . . . . . . . . . #
    # . . . . . . . . . . . . . . #
    # # # # # # # # # # # # # # # #
    `)
let Havemann = kitronik_VIEW128x64.matrix16x16(`
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . . . . . . . # # # #
    # # # # . . . . . . . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    `)
Segmentlänge = 20
basic.forever(function () {
    basic.pause(2000)
    for (let Ziffer = 0; Ziffer <= 9; Ziffer++) {
        kitronik_VIEW128x64.clearbuffer()
        kitronik_VIEW128x64.clear()
        basic.showNumber(Ziffer)
        kitronik_VIEW128x64.writeImageOLED(Robert, 95, 0)
        kitronik_VIEW128x64.writeImageOLED(Havemann, 112, 0)
        kitronik_VIEW128x64.refresh()
        schreibe_Ziffer()
        basic.pause(2000)
    }
})
