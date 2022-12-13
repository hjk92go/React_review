import { useParams } from "react-router-dom";

const ProductDetail = () => {
    // params으로 들고온 모든 값은 문자열
    const { name } = useParams();
    return ( 
        <div>
            <h3>{name}</h3>
        </div>
     );
}
 
export default ProductDetail;