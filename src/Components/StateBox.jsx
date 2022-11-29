//001

//함수형 컴포넌트 (화살표 함수)
//보통 함수(선언형 함수)의 경우 가장 먼저 실행되어있지만(호이스팅)
//화살표 함수, 또는 익명함수가 변수에 담아서 있는경우는
//변수에 담겨질 때 함수가 생성

import { useState } from "react"; // 임포트한 내용 컨트롤 클릭하면 넘어감

const StateBox = () => {
  //inputname의 값을 받아와서return해주는 내용
  const printName = (inputName) => {
    return inputName + "입니다";
  };

  //리액트는 html값을 변수에 넣어서 사용할수 있다
  //이때 태그를 여러개 사용하고 싶다면 하나의 태그로 감싸서 사용
  const element = (
    <div>
      <h3>자바스크립트의 변수안에 넣어서 사용할 수 있다</h3>
      <p>단, 여러개의 태그는 하나의 태그로 감싸서 사용</p>
    </div>
  );

  //state : 컴포넌트 안에서 개별적으로 사용되는 데이터값
  //state로 들어가 잇는 값들은 컴포넌트의 업데이트에 영향
  const [name, setName] = useState("green");
  /*input버튼을 눌렸을때만 값바뀌게 하기!*/
  const [input, setInput] = useState("");

  //useState : 함수형컴포넌트에서 state를 사용할 수 있게 만들어둔 hook
  //hook : use를 붙여서 사용하는 함수형 컴포넌트의 내용(리액트 16버전 이후로 사용가능)
  //useState는 ()안에 원하는 데이터 값을 넣어서 사용할 수 있다.
  //이때 그 안에 있는 값은 setName을 통해서 값을 바꿔준다.

  return (
    <div>
      <h1>{name}입니다</h1>
      <p>
        변수는 중괄호 안에 이름을 넣으면 값이 그대로 출력되고,
        <br />
        <b>
          함수는 ()을 통해 내용을 실행시킬수 있다.
          <br />
        </b>
        단 화면에 출력되는 부분은 return되는 부분이다
      </p>
      <p>{printName("blue")}</p>
      {element}

      <hr />
      <h3>값을 입력받아서 확인하기 : {name} </h3>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/* onchange 함수값이 바뀔떄마다 바뀜  / 여기서 사용된 이벤트는 js에서 사용되던 이벤트임 / MDN에 가서 관련된내용봐라 */}
      {/*이벤트 발생시 타겟되어잇는 input으로 가게된다 그 값은 value로 지정되고 그거는 setname으로 넘어가서 값이 저장됨*/}

      {/*버튼 클릭시 name값 변경 : input이라는 공간에서 바뀌고 있기때문에 name은 영향 가지 않는다.*/}
      {/*onchange를 걸어서 바뀌도록 해준다.* */}
      <button
        onClick={(e) => {
          setName(input);
        }}>
        이름 수정
      </button>
    </div>
  );
};
//그다음 프랍, 프랍값을 이야기할떄 컴포넌트 두개사용 부모와 자식관계필수
export default StateBox;
