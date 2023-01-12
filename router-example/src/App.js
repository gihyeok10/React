import './App.css';
import { useState } from 'react';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import {Routes,Route,Navigate} from "react-router-dom";  //네비게이트 컴포넌트 
import Productpage from './page/Productpage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';


function App() {
  //대문자 컴포넌트
  const [authenticate,setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage/> : <Navigate to ="/login"/>   //로그인 상태를 확인해서 리다이랙트를 해줌..
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<Productpage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>





      </Routes>
    </div>
  );
}

export default App;
