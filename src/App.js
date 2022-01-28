import {
  // XXX as Router已被替换
  HashRouter,
  Routes, //Switch已改名为Routes
  Route,
  // Navigate V6使用Navigate代替Redirect进行重定向
} from 'react-router-dom'
import { Suspense, lazy } from 'react'
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {

  const fallbackShow = () => {
    return
  }

  return (
    <HashRouter>
      <Suspense fallback={fallbackShow}>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          {/* 重定向到首页 */}
          {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
          {/* 跳转到NotFound */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App;