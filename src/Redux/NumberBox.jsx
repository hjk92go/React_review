import { useDispatch, useSelector } from "react-redux";
import { increase, setNumber } from "./modules/number";

const NumberBox = () => {
    
    //리덕스를 사용해서 그 값을 가져오려고 함
    //1. useSelector의 화살표 함수를 통해서 modules/index.js의 전체 state에 접근
    //2. state.number는 modules/index.js에 연결해준 number.js의 {number}을 의미한다
    //3. number.js의 state객체의 number의 숫자값을 가져온다
    /**😡!!!주의!!!😡 값을 가져올때 그 값을 확인해주지 않기 때문에 이름을 확인
     *  값이 없는 내용을 들고오면 undefined 를 출력
    */
    const number = useSelector((state)=>(state.number.number));
    const numberObj = useSelector((state) => (state.number))
    
    
    
    
    
    //리덕스에서 작성한 리듀서를 가져오기 위한 useDispath
    //dispatch를 사용해 줄때, dispatch({type : 값 })을 전달해준다
    //      -> type을 통해서 리듀서를 찾아가게 된다.
    const dispatch = useDispatch();
    

    return(
        <div>
            <h3>리덕스를 사용할 공간입니다.</h3>
            <p>useSelector를 통해서 가져온 값 : {number} </p>
            <p>useSelector를 통해서 가져온 값 : {numberObj.number} </p>
            <button onClick={()=>{ dispatch({type:"increase"})}}>+1 증가</button>
            <button onClick={()=>{ dispatch(increase())}}>+1 증가(함수)</button> {/**액션함수사용할떄 그 함수의 결과값이 들어가게 작성한다. */}
            {/**type 값은 문자열이라 오류확인하기가 어렵다 그래서 함수를 통해 확인해주는데 이러한 함수를 액션함수라고 한다. */}
        



        
            {/** setNumber를 통해서 값을 수정 : 객체 형태 : 이 객체는 action으로 들어간다 */}
            <button onClick={()=>{dispatch({type:"setNumber", payload:0})}}>0으로 초기화</button>
            <button onClick={()=>{dispatch( setNumber(100) )}}>100으로 초기화</button>
        </div>
     );
}
 
export default NumberBox;