import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header";
import Home from "../Routes/Home/HomeList";

// 라우터 안에 라우터 넣을수없음 

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<>그룹소개</>} />
        <Route path="/" element={<>기업지배구조</>} />
        <Route path="/" element={<>ESG경영</>} />
        <Route path="/toja" element={<>투자정보</>} />
        <Route path="/pr" element={<>PR센터</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;