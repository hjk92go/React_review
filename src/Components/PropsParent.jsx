//002

import { useState } from "react";
import PropsChildren from "./PropsChildren";
import StateBox from "./StateBox";






const PropsParent = () => {
    
    
    
    const[count, setCount] = useState(1);
    
    return ( 
    <div>
        <h3>PropsParent, count : {count} </h3>
        {/**속성값(name)을 통해서 값을 전달할 예정  / 자료형으로 전달(count) / setcount는 함수값으로 전달하는 예시*/}
        <PropsChildren 
        name="green" 
        count = {count} 
        setCount={setCount}//만들어진 컴포넌트에 on이벤트는 props값으로 들어간다
        //문자열이나 자바스크립트 함수 자료형 보내줄수잇다.
        onClick={()=>{ console.log('클릭했습니다.')}}>  {/*클릭할때마다 함께 출력이 되어야하지만, 실제로 보면 클릭할떄마다 값을 올라가지만 콘솔에서는 올라가지 않음, 이유 -> 콘솔의 내용조차 프랍으로 값이 전달됨 그러므로 확인하고 싶으면 childred에서 확인가능하다 */} 
       태그 사이에 들어가는 값(이 값 또한 children에서 받아올수잇다) : {count} <br/>
       태그도 들어갈 수 있다. -> 이말인즉 우리가 만든 컴포넌트도 가능하다! <br/>
       map을 이용하여 컴포넌트를 children으로 넘겨 줄 수 있다. 
       <StateBox />
       </PropsChildren>
    </div> 
    );
}
 
export default PropsParent;