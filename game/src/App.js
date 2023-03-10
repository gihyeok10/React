import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
//박스 2개 (타이틀 사진, 결과)
//가위 바위 보 버튼이 있따.
// 버튼을 클릭하면 내껀 내가 클릭한거. 컴터는 랜덤.
// 결과를 가지고 누가 이겼는지 승패를 따짐.
// 테두리 컬러 (이기면 -초록, 지면-빨강 , 비기면-검정)
//가위 바위 보를 객체로 만듬(이름, 이미지)
const choice = {

  rock:{name:"Rock",
        img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
        },
  scissors:{name:"Scissors",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPEAHC1qKLD8xMNYUEboms8MAbp1sbwqPXQ&usqp=CAU"},
  paper:{name:"Paper",img:"https://cdn.shopify.com/s/files/1/0293/4669/3204/products/1_6dcc270e-871e-466b-bd56-2c655a323a56_4472x.jpg?v=1667954943"}
}



function App() {

  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult] = useState(null)


  const play = (userChoice)=> {
    console.log("선택댐",userChoice)
    setUserSelect(choice[userChoice]) //내가 선택한값
    let computerChoice = randomChoice(); //컴퓨터가 선택한값
    setComputerSelect(computerChoice)

    setResult(judgement(choice[userChoice],computerChoice))
    // const computerJugement = () => {
    //   if (result == "Draw"){
    //     return 'Draw'
    //   }
    //   else if (result == "WIN"){
    //     return 'LOSE'
    //   }
    //   else if (result == "LOSE"){
    //     return 'WIN'
    //   }
    // }
    // setResult2(computerJugement());

  }

  const judgement = (user,computer) => {
   //유저값 == 컴퓨터 => 비김
  
   if(user.name == computer.name) {
    return "Draw"
   }else if (user.name == "Rock") return computer.name == "Scissors" ? 'WIN' : "LOSE"
    else if (user.name == "Scissors") return computer.name == "paper" ? 'WIN' : "LOSE"
    else if (user.name == "Paper") return computer.name == "Rock" ? "WIN":"LOSE"


  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수!
    let randomItem = Math.floor(Math.random()* itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];

  }
  return (
    <div>
    <div className='main-div'>
      <Box user="YOU" result={result} item={userSelect}></Box>
      <Box user="Computer" result={result} item={computerSelect}></Box>
    </div>
    <div className="main-div">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>  
      </div>
    </div> 
  );
}

export default App;
