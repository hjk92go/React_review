import { useState } from "react";

const TestProps = (props) => {
  //props의 값  product을 가져와서 아래내용을출력하세요
  //state값 input을 만들어서 값을 입력 받으세요
  const { product, setProduct, children } = props;
  const [input, setInput] = useState("");
  return (
    <div>
      {/*product를 출력하세요*/}
      <h3>{product}</h3>
      {/*input의 값을 입력하는 공간*/}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/*받아온 setproduct이름을 수정*/}
      <button
        onClick={(e) => {
          setProduct(input);
        }}>
        물건 이름 수정
      </button>
      {/*children을 받아와서 출력하세요*/}
      {children}
    </div>
  );
};

export default TestProps;
