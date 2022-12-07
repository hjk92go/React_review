//데이터 API를 통해서 값을 뉴스 데이터를 가져오는 컴포넌트
//데이터 API의 특징 - 데이터를 가져오기 위해 Ajax를 사용하여 비동기로 값을 가져와서 사용(http객체, fetchAPI,axios)
//

import { useEffect } from "react";
import { useState } from "react";


const APIComp = () => {
    //news를 저장할 공간 state
    const [news, setNews] = useState();
    //api의 내용이 많을시 그 값이 빨리 전달이 되지 않을때가 있기에 
    //그 값이 왔을때 제어하기 위한 state
    const [newsLoading, setNewsLoading] = useState(false);
    //값을 가져올떄 바로 접근이 가능한지 확인하기 위해서 >>> 주소창에다 오픈api 주소와 키값을 입력해서 주소창에 먼저 확인한다!


    useEffect(() => {
        //시작하자마자 값을 들고오기 위해 useEffect에 작성
        //비동기함수로 작성 async / 기다려야할 함수 awaite

        const getData = async () => {
            //fetch는 주소를 통해서 값을 가져오기 때문에 await를 써서 늦게 들고온다
            //await를 쓰지 않으면 promise 데이터로 들고오게 된다.
            //promis는 값을 가져오겠다고 약속한 데이터 형식
            //=>then , await를 이용하여 값을 가져와서 사용
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
            console.log(response);
            const body = await response.json();
            console.log(body);
            setNews(body);
            //useState에 들어가는 값이 클때, 
            //바로 반영이 되지 않는 경우가 있다.
            // console.log(news);


            //그 값이 들어올때까지 기다림
            //들어오지 않을때 나오는 출력화면
            if (!news) {
                setNewsLoading(true)
                console.log("내용이 들어왔습니다")
            }

            //위에랑 같은 내용임
            // if (!news) {
            //     setNewsLoading(false)
            //     console.log("내용이 아직들어오지 않았습니다")
            //     console.log(news);
            // } else {
            //     setNewsLoading(true)
            //     console.log("내용이 들어왔습니다")
            //     console.log(news);
            // }

        }
        getData();
    },[newsLoading])
    


    return (
        <div>
            <h1>API컴포넌트입니다</h1>
            {/**리액트는 객체 형식을 바로 출력할 수 없다
             *         >>>>>>>>> 객체 형식이 아닌 문자열이나, 숫자를 출력
             * 리액트는 undefined에서 값을 찾을 수 없다
             * : 외부값이 들어오기 전에는 undefined가 들어가있다.
             * ex ) 값이 들어가지 않을떄 속성에서 값을 찾아오려고 함
             *        >>>>>>>>>> 삼항연산자를 사용해서 값이 있을때만 접근할 수 있게
             */}

            {/** news를 조건식으로 넣으면, 값이 있을때 : true, 값이 없을때 false */}
            {/* {news === undefined 
             ? "값이 아직 오지 않았습니다" 
             : news.status} */}

            {/* {news !== undefined ? news.status : "값이 아직 오지 않았습니다"} */}
            {/**실습 : articles의 0번째 인덱스의  title출력   */}


            <h3>{/**Object 에러 조심!!! */}
                {news !== undefined ? news.articles[0].title : "값이 아직 오지 않았습니다"}
            </h3>
             {/**map을 통해서 확인하기!
              * 1. 현재 가져오는 데이터가 배열인지확인할것!(map은 배열에서만 사용가능)
              * 2. 배열안의 요소가 객체인지, 문자열인지 확인한 후 출력한다.
              * 
              * 값이 없을땐 출력하지 않도록 삼항 연산자, 
              * && 값이 있을때만 출력할 수 있도록 코드를 작성한다.
              * 사진이 없는경우  출력하고 싶지 않은 경우 또한 삼항연산자 이용가능
              */}
              {news && news.articles.map((article)=>( 
                    <li>{article.title}</li>
              )) 
            }
            <APIBox title="제목" />
            <hr/>

            {//배열하나하나의 요소를 article의 이름으로 진행중
                news && news.articles.map((article)=>(
                    <APIBox title={article.title}
                            urlToImage={article.urlToImage}/>
                ))
            }
        </div>
    );
}

export default APIComp;


//여러개의 데이트럴 동일한 화면으로 출력하기 위해 컴포넌트를 작성해서 사용
//                                                   >>> 그 값을 props로 받아옴

const APIBox= (props) => {
    //props의 값을 객체로 들어오기 때문에, 객체 기호로 감싸서 구조화할당 사용([]->대괄호로 감싸면 배열, {}->중괄호로 감싸면 객체)
    const { title,urlToImage } = props 
    
    return(
        <div>
            <h3>{title}</h3>
            {/** 이미지가 없을때 img 태그가 출력되지 않게 작성해보자 */}
            
            {
                urlToImage ?
                <img src={urlToImage} alt="사진" width="300px" />
                : <div style={{width: "300px", height:"300px", backgroundColor:"lightgrey" ,display:"inline-block"}}></div>
            }
        </div>
    )
}