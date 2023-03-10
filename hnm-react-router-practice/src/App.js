import { Route,Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {

  const authenticate = useSelector((state) => state.auth.authenticate)

  useEffect(() => {
    console.log('AAAA',authenticate)
  },[authenticate])
  //true면 로그인댐, false 안댐.
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>}></Route>
        <Route path='/login' element={<Login setAuthenticate={authenticate}/>}></Route>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

//1.총 3개 페이지 (전체 상품페이지 ,로그린, 상품 상세 페이지) clear
//1-2 {네비게이션 바 만들기} flex navbar 유지하기..
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//3. 상품 디테일을 눌렀으나, 로그인이 안되어있으면, 로그인 페이지가 먼저 나온다.
//4. 로그인이 되어있을 경우에는 상품 디테일 페이지가 나옴.
//5. 로그아웃 클릭시 로그아웃이됌.
//6. 로그아웃이 되면. 상품 디테일 페이지를 될수없다. 다시 로그인 페이지가 보인다.
//7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 나옴.