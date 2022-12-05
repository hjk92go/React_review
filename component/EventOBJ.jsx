//001
//이벤트 객에촤 몇가지 이벤트 확인
//이벤트 객체 - 자바스크립트의 이벤트 객체
//자바스크립트 형태 사용, node로 접근이 가능

import { useState } from "react";


const EventOBJ = () => {

    const [onMouse, setOnMouse] = useState(false)

    return ( 
        <div>
            <h1>eventOBJ 컴포넌트 입니다</h1>
            <p onMouseEnter={
                (e)=>{
                    //이벤트가 발생했을때, 컴포넌트의 값을 수정하는 함수나 state사용
                    //관련기능을 작성할 수 있는 자바스크립트 작성 가능
                    setOnMouse(true);
                    
                    //이벤트 객체를 통해서 DOM값을 가져올 수 있다.
                    //버블링 _ 하나만 선택되어도 둘다 선택되서 같이 실행되는것을 말함 p태그에서 실행된 이벤트가 span에도 영향을끼침
                    console.log("target",e.target);
                    console.log("currentTarget",e.currentTarget);
                    //이벤트 객체를 통해서 가져온 DOM값을 
                    //자바스크립트에서 사용한 방식으로 수정할 수 있다. 
                    e.target.style.color = 'red';
            
                    //이벤트 객체를 통해서 자바스크립트 형식으로 값을 가져오기
                    console.log(e.currentTarget.firstElementChild.innerHTML); //값을 바꿀땐 데이터 형식, 가져올때 자바스크립트 형식으로 가져올수 잇다...?
                    //노드를 통해서 데이터를 가져오는방법도 연습해보는게 좋음!!!!!!!!!!!! (노드로 접근하는 법 : http://www.tcpschool.com/javascript/js_dom_nodeAccess)
                }
            }
            /**리액트에서 스타일을 바꿀때 사용한 방식 */
            /**style 속성에 객체 형태로 값을 넣을 수 있다 */
            /**값을 수정하기 위해서 state값에 따라서 수정할 수 있다 */
            /**state 중심으로 화면이 업데이트 >>>>>> 데이터 중심으로 화면구성 */
            style={ onMouse ? { color : 'red' } : {} } //원하는 조건값으로 삼항연산자를 넣어서 이용가능
            >
                <span style={{fontWeight : 'bold'}}>마우스</span>를 커서를 위로 올리세요 : {onMouse ? "올라갔습니다"  : "아직 올라가지 않았습니다"}</p>
                    
        </div>
     );
}
 
export default EventOBJ;



/**
 * 
 * 
 * 221202
 * propsParent

state : count 값을 가져오기만!
set함수 : setCount 값을 수정만!

props 객체형태로 전달 {}
name : 문자열
count : >> setCount통해서(set함수를 통해서) 값이 수정되면 업데이트 될때마다 값이 업데이트 되어 바뀌게 되다
setCount : >>


부모 : 자식의 값을 받아와서submit 
자식 >>부모 값을 올려줄수 잇는방법은 없음
(-> 부모의 값을 수정하는함수를 전달해준다고 생각해야함)
자식에서 부모의 값을 수정하는 식으로 해야함.. */