//redux 실습문제_index, book, bookBox 봐야한다!!!
import { useState } from "react";

const BookBox = () => {
    const [input, setInput] = useState("");
    //useSelector를 이용해서 값을 가져오기

    //useDispatch를 이용해서 dispatch 가져오기

    return ( 
        <div>
            {/** 책 제목과 금액을 출력하세요 */}
            <input type="text" onChange={(e)=>{ setInput(e.target.value)}}/>
            {/** button에 onClick을 이용하여 값을 전달하세요 
             * 리덕스의 값은 onChange 를 통해 바꾸기 보단, 
             * 값이 정해졌을때 onClick을 통해 한번에 바꿀수있도록하는게 좋다
            */}
            <button >제목 수정</button>
        </div>
     );
}
 
export default BookBox;








/////////////////////////////////////////////////정답 ///////////////////////////////////////////////////
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setTitle } from "./modules/book";

// const BookBox = () => {
//     const [input, setInput] = useState("");

//     //useSelector를 이용해서 값을 가져오기
//     const book = useSelector((state)=>(state.book));

//     //useDispatch를 이용해서 dispatch 가져오기
//     const dispatch = useDispatch();
//     return ( 
//         <div>
//             {/** 책 제목과 금액을 출력하세요 */}
//             <h3>책 제목 : { book.title }, 금액 : {book.pay} </h3>
//             <input type="text" onChange={(e)=>{ setInput(e.target.value)}}/>
//             {/** button에 onClick을 이용하여 값을 전달하세요 
//              * 리덕스의 값은 onChange 를 통해 바꾸기 보단, 
//              * 값이 정해졌을때 onClick을 통해 한번에 바꿀수있도록하는게 좋다
//             */}
//             <button onClick={()=>{dispatch(setTitle(input))}} >제목 수정</button>
//         </div>
//      );
// }
 
// export default BookBox;