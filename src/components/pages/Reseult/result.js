import React from "react";
import {ImgBox, ImgContainer } from "./styled";
import { useNavigate } from "react-router-dom";
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
export default function Result({candy}){
    const navigate =useNavigate()
    const ShowResult = () => {
        navigate('/result');
    };
    
    return(
        <>
        <ImgContainer>
        <ImgBox src={candy.src} />
        {candy.name}
        </ImgContainer>
        <button onClick={ShowResult}>Go to Result Page</button>
        </>
    )
}