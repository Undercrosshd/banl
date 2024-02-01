import logo from './logo.svg';
import './App.css';
import { Button, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outleft } from 'react-router-dom'
import DesignerSearch from './pages/DesignerSearch';
import DesignerProduct from './pages/DesignerProduct';
import DesignerPortfolio from './pages/DesignerPortfolio';
import DesignerRanking from './pages/DesignerRanking';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
        <div>
          <div className = 'loginMenu' style = {{marginBottom : '40px', color : 'black'}}>
          <div className = 'nav'><Nav.Link onClick = {() => {navigate('/')}}>로그아웃</Nav.Link></div>
          <div className = 'nav'><Nav.Link onClick = {() => {navigate('/')}}>장바구니</Nav.Link></div>
          <div className = 'nav'><Nav.Link onClick = {() => {navigate('/')}}>마이페이지</Nav.Link></div>
          </div>

          <div className = 'MenuBar' >
            <div className = 'logo'><Nav.Link onClick = {() => {navigate('/')}}></Nav.Link></div>
            <div className = 'menu'><Nav.Link onClick = {() => {navigate('/')}}>바늘</Nav.Link></div>
            <div className = 'menu'><Nav.Link onClick = {() => {navigate('/')}}>상품검색</Nav.Link></div>
            <div className = 'menu'><Nav.Link onClick = {() => {navigate('/DesignerSearch')}}>디자이너 검색</Nav.Link></div>
            <div className = 'menu'><Nav.Link onClick = {() => {navigate('/')}}>물 시각화</Nav.Link></div>
            <div className = 'menu'> <Nav.Link onClick = {() => {navigate('/DesignerRanking')}}>디자이너 순위</Nav.Link> </div>
          </div>
        </div>

        <Routes>
          <Route path="/DesignerSearch" element={<DesignerSearch/>}/>
          <Route path="/DesignerProduct" element={<DesignerProduct/>}/>
          <Route path="/DesignerPortfolio" element={<DesignerPortfolio/>}/>
          <Route path="/DesignerRanking" element={<DesignerRanking/>}/>
        </Routes>
    </div>
  );
}

export default App;
