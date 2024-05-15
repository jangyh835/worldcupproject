import React, { useEffect, useState } from "react";
import p0 from "../../../asset/image/1.png"
import p1 from "../../../asset/image/2.png"
import p2 from "../../../asset/image/3.jpeg"
import p3 from "../../../asset/image/4.jpeg"
import p4 from "../../../asset/image/5.jpeg"
import p5 from "../../../asset/image/6.jpeg"
import p6 from "../../../asset/image/7.png"
import p7 from "../../../asset/image/8.jpeg"
import p8 from "../../../asset/image/9.jpeg"
import p9 from "../../../asset/image/10.jpeg"
import p10 from "../../../asset/image/11.jpeg"
import p11 from "../../../asset/image/12.jpeg"
import p12 from "../../../asset/image/13.jpeg"
import p13 from "../../../asset/image/14.jpeg"
import p14 from "../../../asset/image/15.jpeg"
import p15 from "../../../asset/image/16.jpeg"
import { GameContainer, ImgBox, ImgContainer, Round, Game } from "./styled";
import { useNavigate } from "react-router-dom";
import Result from "../Reseult/result";

export const candidate = [
  {
  key:0,
  name:"SUN",
  src:p0
},

{
  key:1,
  name:"MOON",
  src:p1
},

{
  key:2,
  name:"STAR",
  src:p2
},
{
  key:3,
  name:"FIRE",
  src:p3
},

{
  key:4,
  name:"WATER",
  src:p4
},

{
  key:5,
  name:"GOLD",
  src:p5
},
{
  key:6,
  name:"SOLD",
  src:p6
},

{
  key:7,
  name:"HORN",
  src:p7
},

{
  key:8,
  name:"ARMOR",
  src:p8
},
{
  key:9,
  name:"TALL HOME",
  src:p9
},

{
  key:10,
  name:"DATE",
  src:p10
},

{
  key:11,
  name:"MOUSE",
  src:p11
},
{
  key:12,
  name:"ENERGY",
  src:p12
},

{
  key:13,
  name:"GIRL",
  src:p13
},

{
  key:14,
  name:"COLTHS",
  src:p14
},
{
  key:15,
  name:"FORCE",
  src:p15
}
]


export const Main =()=>{
    const [candy,setCandy]=useState(candidate);
    const[winCandy,setWinCandy]=useState([]);
    const [round,setRound]=useState(1);
    const [game,setGame] = useState(candidate?.length);
    const navigate = useNavigate();
    useEffect(() => {
        setCandy(
            candidate
                .map((c) => {
                    return { key: c.key, name: c.name, src: c.src, order: Math.random() };
                })
                .sort((l, r) => {
                    return l.order - r.order;
                })
        );
    }, [])
    const onclickChange = (e)=>{
            setCandy((prev) =>{
                const temp = prev.splice(0,2)
                return prev.filter((e,i)=>e.key!==temp.key)
            })
        setRound((prev) => prev+1)
        setWinCandy((prev)=>[...prev, e])
        // setCandy((prev)=>{
        //     prev.reduce(0,1)
            // const temp = candy.splice(0,1)
            // candy.filter((e,i)=>temp.key === e)
        // })
    // useEffect(()=>{if(round>candy.length/2 && candy.length>1){
    }
    useEffect(()=>{
        if(game<=1) {return;}
        if(candy.length===0){
        setRound(1);
        setWinCandy([]);
        setCandy(winCandy)
        setGame((prev)=>prev/2)
    }},[round])
    
    function ResetButton(){
        if (game <= 1) {
            return <button onClick={Refresh}>Reset!</button>;
        } else {
            return null;
        }
    }
    const Refresh = ()=>{
        window.location.reload();
    }
    function ResultButton(){
        if (game <= 1) {
            return <button onClick={ShowResult}>To Result!</button>;
        } else {
            return null;
        }
    }
    const ShowResult = () => {
        navigate('/result');
    };
    return (
        <>
        {
            game === 1 ? <Game>Win!</Game> :
            game === 2 ? <Game>결승</Game> : <Game>{game}{"강"}</Game>
        }
        {/* <Game>{game}강</Game> */}
        <Round>{round}</Round>
        <GameContainer>
            {candy.map((e, i) => {
                if (i > 1) return;
                return (
                    <ImgContainer onClick={() => onclickChange(e)
                            // const temp = candy.splice(0,1)
                            // candy.filter((e,i)=>temp.key === e)
                        }
                    >
                        <ImgBox src={e.src} />
                        {e.name}
                    </ImgContainer>
                )
            })}
        </GameContainer>
        <ResetButton/>
        <div>__________</div>
        <Result candy={candy} ShowResult={ShowResult} />
        </>
    )

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