import React from "react";
import { HeaderContainer, HeaderContents, NavbarContents, Navbar } from "./styled";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate=useNavigate()
    return(
        <HeaderContainer>
            <HeaderContents>Header</HeaderContents>
            <Navbar>
            <NavbarContents onClick={() => navigate("/main")}>game</NavbarContents>
            <NavbarContents onClick={() => navigate("/ranking")}>ranking</NavbarContents>
            </Navbar>
        </HeaderContainer>
    )
}