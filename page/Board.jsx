import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Board = () => {
    //param의 값을 배열로 만들어보는중
    const [boardList, setBoardList] = useState([1,2,3,4,5])
    
    return ( 
        <div>
            <h1>board페이지 입니다.</h1>
            <Link to='/board/1'>페이지 1로 이동합니다.</Link><br/><hr/>
            {/** 
             * 값이 여러개 일경우 배열을 가져와 map으로 출력
             *  1은 param값으로 넘겨줌 
             *  param의 id값을 링크를 통해서 페이지 이동하는 경우가 많다.
             *  param위치를 미리 지정해서 넣어줘야한다 (ex) /board/{!!!}
            */}
            {   //요소를 담을 공간을 boardid라고 지정해서 출력예정
                boardList.map((boardId)=>(
                    <Link to={`/board/${boardId}`}>{boardId}{" "}</Link>// 위치를 알려주기 위해 {boardId} 입력!
                    //변하는 값만 $표시해서 넣어준다
                ))
            }
            <Outlet />
        </div>
     );
}
 
export default Board;