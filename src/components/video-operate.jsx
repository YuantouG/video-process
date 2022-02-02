import React, { Component } from "react";
import path from "../assets/蛙蛙.mp4";
import { Button } from "antd";
import { drawCoordinate } from "../api/canvas.js";

export default class VideoOperate extends Component {
  componentDidMount() {
    console.log(this.canvas);
  }

  draw = () => {};

  mouseDownEvent = (target) => {
    const { screenX, screenY } = target;
    console.log("x" + screenX, "y" + screenY);
    drawCoordinate(this.canvas,screenX,screenY);
  };

  render() {
    return (
      <>
        <div className="videoOperate">
          <Button type="primary" className="textButton" onClick={this.draw}>
            去水印
          </Button>
        </div>
        <div className="videoTab">
          <canvas
            ref={(cas) => (this.canvas = cas)}
            onMouseDown={this.mouseDownEvent}
          ></canvas>
          <video controls>
            <source src={path} type="video/mp4" />
            您的浏览器不支持 video 标签。
          </video>
        </div>
      </>
    );
  }
}
