import React, { useEffect, useState } from "react";
import p0 from "../../../asset/image/1.png";
import p1 from "../../../asset/image/2.png";
import p2 from "../../../asset/image/3.jpeg";
import p3 from "../../../asset/image/4.jpeg";
import p4 from "../../../asset/image/5.jpeg";
import p5 from "../../../asset/image/6.jpeg";
import p6 from "../../../asset/image/7.png";
import p7 from "../../../asset/image/8.jpeg";
import p8 from "../../../asset/image/9.jpeg";
import p9 from "../../../asset/image/10.jpeg";
import p10 from "../../../asset/image/11.jpeg";
import p11 from "../../../asset/image/12.jpeg";
import p12 from "../../../asset/image/13.jpeg";
import p13 from "../../../asset/image/14.jpeg";
import p14 from "../../../asset/image/15.jpeg";
import p15 from "../../../asset/image/16.jpeg";
// ../경우 상위 폴더, default로 현재 dir에서 경로 설정.
// /rootfolder,./nowfolder,.../ x
import { GameContainer, ImgBox, ImgContainer, Round, Game } from "./styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RankingContext } from "../../../App";
// import Result from "../Reseult/result";

export const candidate = [
  {
    key: 0,
    name: "SUN",
    src: p0,
  },

  {
    key: 1,
    name: "MOON",
    src: p1,
  },

  {
    key: 2,
    name: "STAR",
    src: p2,
  },
  {
    key: 3,
    name: "FIRE",
    src: p3,
  },

  {
    key: 4,
    name: "WATER",
    src: p4,
  },

  {
    key: 5,
    name: "GOLD",
    src: p5,
  },
  {
    key: 6,
    name: "SOLD",
    src: p6,
  },

  {
    key: 7,
    name: "HORN",
    src: p7,
  },

  {
    key: 8,
    name: "ARMOR",
    src: p8,
  },
  {
    key: 9,
    name: "TALL HOME",
    src: p9,
  },

  {
    key: 10,
    name: "DATE",
    src: p10,
  },

  {
    key: 11,
    name: "MOUSE",
    src: p11,
  },
  {
    key: 12,
    name: "ENERGY",
    src: p12,
  },

  {
    key: 13,
    name: "GIRL",
    src: p13,
  },

  {
    key: 14,
    name: "COLTHS",
    src: p14,
  },
  {
    key: 15,
    name: "FORCE",
    src: p15,
  },
];
//importe된 image file을 obj로 const에 저장.

export const Main = () => {
  const [candy, setCandy] = useState(candidate); //DOM에서 candidate RENDERING 하기위함.
  const [winCandy, setWinCandy] = useState([]); //선택된 candidate를 나누기 위함.
  const [round, setRound] = useState(1); //단계표시
  const [game, setGame] = useState(candidate?.length); //남은 vs수
  const navigate = useNavigate(); //navigate변수 초기화
  const { value, setValue } = useContext(RankingContext);
  // let userInfo = useContext(UserContext);
  // userInfo.userId = "love"
  // console.log("user id : ",userInfo.userId)

  useEffect(() => {
    //마운트될때만 실행. 최초 1회
    setCandy(
      candidate
        .map((c) => {
          return { key: c.key, name: c.name, src: c.src, order: Math.random() };
        }) //candidate의 obj value값을 가져와서  obj형태로 저장하되, 순서를 랜덤으로
        .sort((l, r) => {
          return l.order - r.order;
        }) //order 속성의 숫자를 l-r이 양수면 ㅣ이 앞에, 음수면 l이 뒤에 위치하여 오름차순 정렬
    );
  }, []);
  const onclickChange = (e) => {
    //클릭할 경우 실행
    setCandy((prev) => {
      const temp = prev.splice(0, 2); //배열의 0~1까지를 추출하여 temp에 저장
      return prev.filter((e, i) => e.key !== temp.key);
    }); //key와 temp가 일치하지 않은 경우만 반환
    setRound((prev) => prev + 1); //setRound의 숫자를 1증가
    setWinCandy((prev) => [...prev, e]); //선택된 candidate를 setWinCandy에 저장
    // setCandy((prev)=>{
    //     prev.reduce(0,1)
    // const temp = candy.splice(0,1)
    // candy.filter((e,i)=>temp.key === e)
    // })
    // useEffect(()=>{if(round>candy.length/2 && candy.length>1){
  };

  const rank = () => {
    if (value.length > 0) {
        setValue((prev) => {
            const temp = prev.map((e, i) =>
                candy[0].key === e.key ?
                    { key: e.key, name: e.name, src: e.src, score: e.score + 1 }
                    : { key: e.key, name: e.name, src: e.src, score: e.score }
            )
            return temp;
        })
    } else {
        const temp = candidate.map((e, i) =>
            candy[0].key === e.key ?
                { key: e.key, name: e.name, src: e.src, score: 1 }
                : { key: e.key, name: e.name, src: e.src, score: 0 }
        )
        setValue(temp)
    }
    navigate("/ranking");
    }

    // const temp = candidate.map((e) => {
    //   console.log(e);
    //   console.log(winCandy);
    //     //candidate obj, 우승한 candidate 정보를 console log에 보여줌.
    //   if (e.score) {//candidate obj에 score가 있다면 실행
    //     if (e.key === candy[0].key) {

    //         value[candy[0].key]

    //       return {
    //         key: e.key,
    //         name: e.name,
    //         src: e.src,
    //         score: e.score++,
    //       };//candidate의 score +1
    //     }
    //     return {
    //       key: e.key,
    //       name: e.name,
    //       src: e.src,
    //       score: e.score,
    //     };//candidate의 score 0
    //   } else {//candidate obj에 score가 없는 경우.
    //     if (e.key === candy[0].key) {
    //       return {
    //         key: e.key,
    //         name: e.name,
    //         src: e.src,
    //         score: 1,
    //       };
    //     }
    //     return {
    //       key: e.key,
    //       name: e.name,
    //       src: e.src,
    //       score: 0,
    //     };
    //   }
    // });


  useEffect(() => {
    if (game === 1) {
      rank();
      return;
    }
    if (candy.length === 0) {
      setRound(1);
      setCandy(winCandy);
      setWinCandy([]);
      setGame((prev) => prev / 2);
    }
  }, [round]);

  // userId:null,
  // accessToken:null

  //남은 배열의 길이
  //     if(candy.length===0){//남은 배열의 길이가 0이면
  //     setRound(1);//Round 초기화
  //     setWinCandy([]);//win배열 초기화
  //     setCandy(winCandy)//candy value에 winCandy를 저장
  //     setGame((prev)=>prev/2)//setGame의props를 반으로 나눔
  // }},[round])

  function ResetButton() {
    if (game <= 1) {
      return <button onClick={Refresh}>Reset!</button>;
    } else {
      return null;
    } //reload버튼
  }
  const Refresh = () => {
    window.location.reload();
  };
  // function ResultButton(){
  //     if (game <= 1) {
  //         return <button onClick={ShowResult}>To Result!</button>;
  //     } else {
  //         return null;
  //     }
  // }//Result page로 이동
  // const ShowResult = () => {
  //     navigate('/result');
  // };//Routeing 제어- showResult 함수가 실행되면 /result page로 이동.
  return (
    <>
      {game === 1 ? (
        <Game>Win!</Game>
      ) : game === 2 ? (
        <Game>결승</Game>
      ) : (
        <Game>
          {game}
          {"강"}
        </Game>
      )}
      {/* 3항연산자, 남은 게임 수 가 1이면 Win반환, 2이면 결승, 나머지 게임 수+강 */}
      {/* <Game>{game}강</Game> */}
      <Round>{round}</Round>
      <GameContainer>
        {candy.map((e, i) => {
          if (i > 1) return;
          return (
            <ImgContainer
              onClick={
                () => onclickChange(e)
                // const temp = candy.splice(0,1)
                // candy.filter((e,i)=>temp.key === e)
              }
            >
              <ImgBox src={e.src} />
              {e.name}
            </ImgContainer>
          );
        })}
      </GameContainer>
      <ResetButton />
      {/* <div>__________</div>
        <Result candy={candy} ShowResult={ShowResult} /> */}
    </>
  );
}

//     useEffect(()=>{
//     setCandy(
//         setCandy(
//             candidate
//             .map((c) =>{
//                 return{key:c.key, name:c.name, src: c.src,order:Math.random()};

//             })
//             .sort((l,r)=>{
//                 return l.order - r.order;
//             })
//         )
//     );

//     },[])

//     return(<GameContainer>
//     {candy.map((e,i)=>{
//         if(i>1) return;
//         return(
//             <ImgContainer>
//             <ImgBox src ={e.src}/>
//             {e.name}
//             </ImgContainer>
//         )
//     })}
//     </GameContainer>)
// }
