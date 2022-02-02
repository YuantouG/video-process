/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-01-27 15:46:50
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-29 17:23:57
 */
import {
  // XXX as Router已被替换
  HashRouter,
  Routes, //Switch已改名为Routes
  Route,
  Navigate, //V6使用Navigate代替Redirect进行重定向
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spin } from "antd";
const Home = lazy(() => import("./Home"));
const DownLoadManage = lazy(() => import("../components/DownLoadManage"));
const VideoResolution = lazy(() => import("../components/VideoResolution"));
// const NotFound = lazy(() => import("./NotFound"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Spin tip="Loading"></Spin>}>
        <Routes>
          <Route path="/Home" element={<Home />}>
            <Route path="downLoadManage" element={<DownLoadManage />}></Route>
            <Route path="videoResolution" element={<VideoResolution />}></Route>
            <Route path="*" element={<Navigate to="downLoadManage" />}></Route>
          </Route>
          {/* 重定向到首页 */}
          <Route path="*" element={<Navigate to="/Home/downLoadManage" />}></Route>

          {/* 跳转到NotFound */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
