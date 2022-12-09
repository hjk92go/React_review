//필요한것 순서
//1. 초기값
//2. 값을 수정 또는 사용하는 리듀서 함수

// 1. 초기값 만들기 - 원하는 변수값을 다 넣을수 있다
// 보통은 여러개의 값을 사용하기 때문에 객체값으로 넣어준다.
const initalState = {
    number : 0,
}

//2. 값을 수정 또는 사용하는 리듀서 함수 만들기
// 함수의 매개변수로 들어갈 값은 : state와 action 들어간다.
function number( state = initalState, action ) {
    //액션값에 따른, 결과를 다르게 출력하고함
    //      -> switch문을 사용해서 action.type에 따른 코드를 작성한다
    switch (action.type) {

        //increase라는 액션이 발생했을때, 값을 1증가 시키고 return을 통해서 바뀐 값을 state로 전달       
        case  "increase" : 
        //이전에 있던 값이 바뀌면 안되기 떄문에 ...(스프레드 연산자)를 통해서 그대로 들고온다
        //바뀐값을 number로 따로 작성해서 그안에다가 현재있는 state의 number에 접근해서 값을 더해주려고 한다
        //이때 접근하는 state는 현재 number.js에서 작성한 initalState이다.
        return { ...state, number : state.number + 1 }
        //return { ...state, 값의이름 : 수정할값 + 1 } 위의 내용

        case "setNumber":
            // 값을 받아와서 그 내용을 수정하는 것
            // 값을 받아오는 공간 : action.payload를 통해서 값 전달
            return {...state, number : action.payload}


    default : 
        return state; //디폴트값을 state값으로 지정해준다.

    }
}




//액션함수 : {type : "리듀서 이름"}을 return 해서 사용하는 함수
//    리턴해서 결과값을 보내는게 목표임()
//다른 js, 컴포넌트에서 사용하게 된다 -> export를 통해서 내보내줘야한다
export const increase = () => ({type : "increase"}); //제일마지막 괄호 중괄호 대신 일반괄호를 쓰면 값을 내보내줌(이부분 확인필요)

// 값을 가져와서 사용해 줄때는, 매개변수로 값을 가져와서 사용
export const setNumber = (num)=>(
    {type:"setNumber", payload : num}
);


//리듀서 함수 number를 modules/index.js에 연결하기 위해 내보내 준다.
export default number;
