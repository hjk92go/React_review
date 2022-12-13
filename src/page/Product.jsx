import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const [name, setName] = useState();

    return ( 
        <div>
            {/** input으로 값을 입력받아서 주소로 값을 건네줌
             * 1. params값으로 보내기 : /page/1 
             * 2. 쿼리스트링으로 보내기 : ?name=사과
             * >> params값으로 보내는 방식 사용
             * 1) App.js에 주소지정필요 : /page/:id
             * 2) 값을 주소의 :id위치에 전달 : /page/1
             */}
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
            <Link to={`/product/${name}`}>검색페이지로 이동합니다</Link>
        </div>
     );
}
 
export default Product;