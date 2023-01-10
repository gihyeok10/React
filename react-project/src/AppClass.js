import React, { Component } from "react";
import BoxClass from "./component/BoxClass";
export default class AppClass extends Component {
  //클래스 생성할떄 쓰임 state만듦
   constructor(props){
    super(props)
    //state 쓰는 법
    this.state={
        counter2:0,
        num:1,
        value:0
    };
    console.log("constructor")

   }
   
   increase = () => {
    this.setState({counter2:this.state.counter2 +1,
                    value:this.state.value +1})
                    console.log("increase",this.state)
   };

   componentDidMount(){
    //주로 API콜
    console.log("componentDidMount");
   }

    componentDidUpdate(){
        console.log("componentDidUpdate",this.state)
    }
   //UI 그리기
  render() {
    console.log("render")
    return (
      <div>
        <div>counter:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value}></BoxClass>}
      </div>
    );
  }
}
