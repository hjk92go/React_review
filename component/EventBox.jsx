import { useEffect } from "react";
import { useState } from "react";

// let name = "aa"; 여기에 사용하면 값이 안바뀜..!!!!!!!!

const EventBox = () => {
  //001
  //자주사용하는 이벤트 확인
  //객체와 배열, 객체들을 가진 배열에 대한 내용
  //map, filter > 자바스크립트의 메소드(함수)
  //데이터 기능 > 자바스크립트의 메소드에서 확인가능
  const [changeName, setChangeName] = useState("");
  const [clickName, setClickName] = useState(""); //>> changeName을 받아올꺼임
  const [varName, setVarName] = useState(""); //>>변수 name을 받아올꺼임

  let name = "aa"; //화면에 출력되지 않고 많이 바뀌는 값들에 사용한다
  // 이 값을 화면에 출력하고 싶다면, state에 담아서 화면이 바뀌도록  // 위치를 밖으로 옮기면, EventBox.jsx전체영역에서 사용이 가능해지므로, 업데이트 될때 다시 실행되지않음
  const funcName = (n) => {
    name = n;
  };

  //002
  //객체 state에 이벤트값 넣기
  //                          -  1)각각의 속성에 값을 넣어줘야함
  //                             2)남은 속성의 값을 유지 해줘야한다. >>>그래서 ...(스프레드연산자)을 사용함  /... : 객체나 배열안에 잇는 그 요소의 값을 꺼낸다
  const [user, setUser] = useState({ name: "", address: "" });

  //003
  const changeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //변수를 그냥 작성시 인지하지 못하기 떄문에, 변수를 속성으로 사용하고 싶다면,
  };

  //004
  //변수 : 고정해서 사용할 값, 화면상에서 바뀌지 않을 값
  //이 값들을 map을 통해서 출력할예정
  //컴포넌트를 반복해서 출력하기 위해 배열 사용.
  const info = ["name", "address"];

  //005
  //배열안에 객체를 넣어서 진행
  //속성 이름들을 동일하게 넣어줘야한다
  const infoObj = [
    { name: "name", info: "이름", id: 1 },
    { name: "address", info: "주소", id: 2 },
  ];

  return (
    <div>
      <h3>이벤트 박스</h3>
      <h4>
        state로 작성한 이름 : {changeName}, 변수 이름 : {name}
      </h4>
      <input
        type="text"
        onChange={(e) => {
          setChangeName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setClickName(changeName);
        }}>
        state 값을 저장
      </button>{" "}
      {/**이벤트 값이 아니라 바뀌어진 값을 가져오면된다. */}
      <br />
      <input
        type="text"
        onChange={(e) => {
          funcName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setVarName(name);
        }}>
        {" "}
        변수값을 가져와서 저장
      </button>
      <br />{" "}
      <h4>
        state값을 가져와서 저장 : {clickName} , 변수 값을 가져와서 저장 :{" "}
        {varName}
      </h4>
      <hr></hr>
      <h3> 객체 값 바꾸기</h3> {/**객체 state에 이벤트 값넣기 예시 */}
      <p>
        user의 이름 : {user.name}, 유저의 주소 : {user.address}
      </p>
      이름 :{" "}
      <input
        type="text"
        //... 사용하여 객체안의 값을 전부 가져오고, 그안에 값을 바꾸고 싶다면, 바꾸고 싶은 속성의 이름을 사용
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />{" "}
      {/**같은내용이 2번 겹치게 될경우 뒤의 값이 앞의 값을 덮는다. */}
      <br />
      주소 :{" "}
      <input
        type="text"
        onChange={(e) => {
          setUser({ ...user, address: e.target.value });
        }}
      />
      {/**003 */}
      {/**위에 보면 함수가 중복된것이 보인다. >>>함수이름만 가져오면 중복없이 사용할수 있을것같음  함수로 만들어 사용해보자!*/}
      <hr />
      <h3>함수의 값으로 바꿔서 사용해보기</h3>
      <p>
        user의 이름 : {user.name}, 유저의 주소 : {user.address}
      </p>
      {/** 1)리턴밖으로 나가서 함수를 작성한다(changeuser이라는 함수 ) */}
      이름 :{" "}
      <input
        type="text"
        name="name"
        //... 사용하여 객체안의 값을 전부 가져오고, 그안에 값을 바꾸고 싶다면, 바꾸고 싶은 속성의 이름을 사용
        onChange={changeUser}
      />{" "}
      {/**e객체는 값을 전달하지 않아도 쓸수 있다. */}
      <br />
      주소 : <input type="text" name="address" onChange={changeUser} />
      {/**004 */}
      <hr></hr>
      <h3>배열을 통해서 컴포넌트/태그 반복하기</h3>
      <p>배열값(문자열)도 html에 그대로 출력할 수 있다.</p>
      <p>배열의 값(문자열/컴포넌트)도 html에 그대로 출력 할 수 있다.</p>
      <h4>
        {user.name},{user.address}
      </h4>
      {info}
      {
        /** 배열을 map을 통해서 반복
         * map: 배열의 메소드(배열이 아니면 사용이 불가능)
         * 배열의 값을 꺼내서 return에서 새로운 배열을 만들어 준다.  >>>>> 원하는 모양으로 출력
         */
        //info는 배열, infomation은 배열안에 있는 요소(값의 이름은 내 임의로 지정가능)
        //index는 현재 가져온 배열안에 있는 요소의 index
        //map을 사용할때 {중괄호}가 아니라 (괄호)를 사용하는 이유는 : return값을 만들기 위해서
        //return값을 통해 태그. 컴포넌트를 사용하기 위해서 / 리턴값 안은 div로 감싸고 이용할것
        //map 값을 사용시 반드시 키값을 넣어줘야한다. 보통id값(객체배열인경우)을 쓰지만 사용하지 못하는경우 index값(문자열) 사용
        info.map((infomation, index) => (
          <div>
            {infomation}
            <input
              type="text"
              name={infomation}
              key={index}
              onChange={changeUser}
            />
          </div>
        ))
      }
      <hr />
      {/**005 */}
      <h3>객체의 배열</h3>
      {/*infoObj : 객체는 리액트에서 바로 출력할 수 없다.*/}
      <h4>
        {user.name},{user.address}
      </h4>
      {infoObj.map((infomation) => {
        //중괄호 사용시, 임의로 리턴을 사용해서 값을 전달해주면된다.
        return (
          <div>
            {infomation.info}
            <input
              type="text"
              name={infomation.name}
              key={infomation.id}
              onChange={changeUser}
            />
          </div>
        );
      })}{" "}
      <hr />
      <h3>filter함수 사용</h3>
      {
        //filter함수는 return값이 true 면, 새로운 배열에 넣고,
        //false 이면 새로운 배열에 넣지 않음
        //원본배열에는 영향을 미치지 않는다.
        info.filter((infomation) => (infomation = "name"))
        //원본 배열의 값을 바꾸고 싶다면, 그 원본 배열의 값에 새로 만들어진 배열을 넣어 주어야한다.
        //filter의 결과 값이 배열이기 때문에,
      }
      {
        //map을 이용해서 다시 화면에 출력할수 있다.
        //map을 통해서 객체의 값을 바꿔서 넣어줄수 있다.
        //filter의 return 값 >> true / false 원본의 값으로
        //map의 return의 값 : 원본의 값+추가 > 작성(수정)해야한다
        infoObj
          .filter((infomation) => infomation.id == 2)

          .map((infomation) => (
            <p>{infomation.info}</p>
          ))
      }
    </div>
  );
};

export default EventBox;
