import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <h1>HOME화면 입니다</h1>
            {/**about주소를 작성해서 이동할수 있는 링크를 걸어줌 */}
            <Link to="/about">about으로 이동</Link> <br/>
            <a href="/about">a태그로 이동 ? </a>
            <p>
                : a태그는 새로고침이 되므로 컴포넌트 간의 이동을 할때 사용하지 않는다.
                <br/>
                만약 사용한다면, 클릭이벤트를 이용해서 새로 고침을 막아야 한다.
        
            </p>
        </div>
     );
}
 
export default Home;