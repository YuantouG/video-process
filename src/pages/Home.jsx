import React from "react";
import "../styles/home.scss";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "antd";
export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home_container">
          {/* <div className="header">
            <img src={require("../assets/logo.gif")}></img>
            <span>视频解析</span>
          </div> */}
          <div className="container">
            <div className="meua">
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to="downLoadManage"
              >
                下载管理
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to="videoResolution"
              >
                视频解析
              </NavLink>
            </div>
            <div className="text">
              <div className="textTop">
                <input placeholder="复制链接" />
                <Button type="primary" size="large" className="textButton">
                  解析下载
                </Button>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
