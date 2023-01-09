import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
//박스 2개 (타이틀 사진, 결과)
//가위 바위 보 버튼이 있따.
// 버튼을 클릭하면 내껀 내가 클릭한거. 컴터는 랜덤.
// 결과를 가지고 누가 이겼는지 승패를 따짐.
// 테두리 컬러 (이기면 -초록, 지면-빨강 , 비기면-검정)
function App() {
  return (
    <div>
    <div className='main-div'>
      <Box user="YOU" result="WIN"></Box>
      <Box user="Computer" result="LOSE"></Box>
    </div>
    <div className="main-div">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div> 
  );
}

export default App;
