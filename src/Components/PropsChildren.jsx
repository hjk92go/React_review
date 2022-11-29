//003

import { Children } from "react";

//부모컴포넌트의 속성값을 받아오게됨
const PropsChildren = (props) => {
  //props의 값이 여러개가 들어오기 떄문에
  //객체의 형태로 사용 > 구조화 분해 이용
  const { name, count, setCount, onClick } = props; //즉 여기서 부모가 보낸 값 "green"을 출력하게됨 / {}를 사용하면 js도 사용가능하다
  //props으로 받아올수 있는 값들 : 문자열, {}로 감싸서 보내진 자바스크립트의 변수와 함수
  //주의 : 작성한 컴포넌트에 on이벤트를 작성하면, props값으로 들어온다.

  const { children } = props;
  //children은 태그와 태그사이에 작성한 값을 들고온다.

  return (
    <div onClick={onClick}>
      <h3>
        PropsChildren : {name}, count : {count}
      </h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        클릭시 +1
      </button>
      {/**부모의 값도 바뀌었다고 보면됨 */}

      <p>{children}</p>
    </div>
  );
};

export default PropsChildren;
