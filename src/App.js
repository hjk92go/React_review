import logo from "./logo.svg";
import "./App.css";
import StateBox from "./Components/StateBox";
import PropsParent from "./Components/PropsParent";
import TestState from "./Components/TestState";

//app 안에 원하는 내용을 바로 작성할 수 있지만,
//각 내용을 컴포넌트로 만들어서 화면서 출력하고 있다
//빈 컴포넌트를 먼저 만들고 app으로 불러와서 화면에 출력되는것을 보고 작성

function App() {
  //function app안에서는 자바스크립트의 내요응ㄹ 자유롭게 쓸수 있다
  //return은 랜더될 html의 내용+{}를 통해서 자바스크립트와 함께 사용한다.
  //return안에서 실행순서는 위에서 아래로 실행이 된다.
  //오류가 났을때 전체가 출력이 되지 않는다
  return (
    <div>
      {/* <PropsParent/> */}
      <TestState /> {/**test용 */}
    </div>
  );
}
//export를 통해서 모듈 형식으로 함수나 변수를 내보내줄수 있따
//default가 붙게 되면 {}없이 들고올수 있다
//export로만 내보내주면 {}를 통해서 값을 들고올 수 있다
export default App;
