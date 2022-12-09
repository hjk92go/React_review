/**
 * 리덕스에서 사용할 작성한 js파일을 묶어서 사용
 * 묶어서 사용하는 이유 -> 사용할 데이터가 많아지면 따로 관리하기 위함
 */
//작성한 js 파일을 하나로 묶어주는 함수 'combineReducers'를 사용해준다
import { combineReducers } from "redux";

//작성한 리덕스 모듈을 가지고 오기
import number from "./number";




//combineReducer을 통해서 작성한 js파일을 들고와서 객체 형태로 묶어 준다
const rootReducer = combineReducers({number}); //값 들을 rootReducer로 보내준다





//export default를 통해서 이름을 그대로 사용할 수 있게 내보내준다
export default rootReducer















///////////////////////////////////////////////////실습 정답/////////////////////////////////////////////////////


// // 작성한 js 파일을 하나로 묶어주는 함수
// import { combineReducers } from "redux";

// //작성한 리덕스 모듈 들고오기
// import number from "./number";
// import book from "./book";

// // combinReducer를 통해서 
// // 작성한 js 파일을 들고와서 객체 형태로 묶어준다
// const rootReducer = combineReducers({number,book});

// // export default를 통해서 
// // 이름을 그대로 사용할수 있게 내보내준다
// export default rootReducer;
