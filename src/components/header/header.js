import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    height: 50px;
    background: #f7f7f7;
    position: fixed;
    display:flex;
`;

const LogoWrapper = styled.div`
    width: 5%;
    min-width: 45px;
    height: 50px;
    display: inline-block;
    background: #1da1f2;
    text-align: center;
    &:hover{
        .icon-twitter {
            color: darkred;
        }
    }
`;

const LogoIcon = styled.h2`
    font-size: 25px;
    line-height: 50px;
    margin: 0;
    color: #fff;
`;

const Title = styled.h2`
    width: 95%;
    font-family: Arial;
    font-size: 20px;
    color: #fff;
    display: inline-block;
    text-align:center;
    vertical-align: top;
`;

const Header = ({text, icon}) =>{
    return(
        <Wrapper>
            <LogoWrapper>
                <LogoIcon className={icon}></LogoIcon>
            </LogoWrapper>
            <Title>{text}</Title>
        </Wrapper>
    );
}

export default Header;
