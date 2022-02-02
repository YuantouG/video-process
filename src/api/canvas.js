/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-01-30 14:40:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-30 15:17:26
 */
export function drawCoordinate(canvas, x, y) {
    let ctx = canvas.getContext("2d")
    console.log(ctx)
    ctx.strokeStyle = 'red'
    ctx.rect(20, 20, 20, 20)
    ctx.stroke();
}
