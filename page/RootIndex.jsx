/** 현재 페이지는 라우터의 내용을 정리하기 위한 컴포넌트
 * 아래 내용에 BrowserRouter와 Rootes를 정리
 * 아래 내용을 app.js와 index.js에 분리해서 넣어도 상관없다
 */

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './About';
import AboutMain from './AboutMain';
import AboutTest from './AboutTest';
import Board from './Board';
import BoardPage from './BoardPage';
import Error from './Error';
import Home from './Home';


const RootIndex = () => {
    return ( 
        
            <BrowserRouter>
                <Routes>
                    {/**Route를 통해서 주소와 컴포넌트를 연결 */}
                    {/**http://localhost:3000/의 가장 처음 위치 
                     * http://localhost:3000/ 의 기본위치를 두고 path의 내용을 붙여서 이동
                     * path의 위치에 '/'를 두면 가장 처음 위치로 간다<div className=""></div>
                    */}
                    <Route path='/' element = {<Home />}></Route>
                    <Route path='/about' element = {<About />}>
                        {/**중첩되서 사용하는경우 아울렛으로 연결, 프랍값 내려줄수없다. */}
                        <Route path='/about/test' element={<AboutTest />} >
                            <Route path='/about/test/outlet' element={<AboutTest/>}></Route>
                        </Route>
                        <Route path='/about/main' element={<AboutMain />}></Route>
                        {/**about으로 들어가면 아래에 aboutmain페이지가 뜨는것을 확인할수 있다. */}
                        
                        {/** 기본주소로 들어왔을 때, 가장 처음 위치를 : index라고 한다 아래의 index와 path로 주소 지정한것과 출력값이 같다.
                         *   기본주소 : 자신을 감싸고 있는 path
                         *   인덱스는 아울렛을 쓸수 없음!!!  */}
                        {/* <Route path='/about' element={<AboutMain />}></Route>  */}
                        <Route index element={<AboutMain />}></Route>
                    </Route>
                    {/**전체경로에대해 작성하고 싶으면 path='*' 해주면 된다 */}
                    <Route path='*' element={<Error />}></Route>
                </Routes>

                {/**Routes 하나더 만들어 사용 가능 
                 *  같은 주소일때, 화면을 분할해서 사용할 수 있다.*/}
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    {/**첫번째 Route에서 사용하지 않는 주소로 연결하면 현재화면만 보인다.
                     * 단, *를 사용하는경우  사용하지 않는 주소가 없기에 *를 사용한 주소는 항상 보인다.
                     */}
                    <Route path='test' element={<Home />}></Route>
                    {/** 주소를 통해서 값을 전달*/}
                    <Route path='/board' element={<Board />}>
                        {/**:id 뒤에 어떠한 주소를 입력해도 현재 페이지가 뜸 
                         * 
                         * 주소로 전달하는 값을 prams 값이라고 한다.
                         * 이 값은 { path의 ':이름' : "주소에 작성해준 값"}
                         * :id는 그 사용할 공간의 이름이기 때문에 원하는 이름으로 작성해서 사용
                         * 이와 같이 param값을 사용한 주소는 
                         * 어떤 값이 들어와도 같은 컴포넌트를 출력한다
                        */}
                        <Route path='/board/:id:num' element={<BoardPage />}></Route>
                    </Route>
                </Routes>









            </BrowserRouter>
     );
}
 
export default RootIndex;