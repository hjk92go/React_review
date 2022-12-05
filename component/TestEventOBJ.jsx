/**onMouseEnter, onMouseLeave를 사용하여 
 * 마우스가 div위에 있다면 backgroundColor를 lightgrey
 * 마우스가 div위를 떠난다면 backgroundColor를 white로 바뀌게 작성하세요
 */

import { useState } from "react";



const TestEventOBJ = () => {
    const [onMouse , setOnMouse] = useState(false)
    return ( 
        <div>
            <p onMouseEnter={(e)=>{
                
                


                
            }
        }
                
    
            ><h3>마우스커서를 올려주세요</h3></p>
        </div>
     );
}
 
export default TestEventOBJ;




/**정답
 * 
 *   /** onMouseEnter, onMouseLeave를 사용하여 
   * 마우스가 div위에 있다면 backgoundColor를 lightgrey
   * 마우스가 div위를 떠난다면 backgoundColor를 white
   * 로 바뀌게 작성하세요
   
  // div의 스타일 값을 참/거짓으로 주기위한 state
  const [onDiv, setOnDiv] = useState(false);
  // onMouseEnter, onMouseLeave에 실행할 함수
  const onMouseToggle = (e)=>{
    console.log(e.type);
    // 이벤트의 타입을 통해서 if문으로 값을 넣어줄수 있다
    if(e.type == "mouseleave") {
      setOnDiv(false);
    }else {
      setOnDiv(true);
    }
    // 수정창을 눌렀을때 색 고정
    if(modify) {
      setOnDiv(true);
    }
  }
 * 
 * */